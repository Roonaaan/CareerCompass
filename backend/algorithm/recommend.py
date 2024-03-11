import os
os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'

import tensorflow as tf
import numpy as np
import mysql.connector
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Connect to MySQL Database
mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="ccdb"
)

# Load User Profile and Work History Data
def load_user_data():
    cursor = mydb.cursor()
    cursor.execute("SELECT EMPLOYEE_ID, JOB_POSITION FROM tblprofile")
    profile_data = cursor.fetchall()

    cursor.execute("SELECT EMPLOYEE_ID, JOB_TITLE, START_DATE, END_DATE FROM tblworkhistory")
    work_history_data = cursor.fetchall()

    cursor.close()
    return profile_data, work_history_data

# Load Job Roles and Descriptions
def load_job_data():
    cursor = mydb.cursor()
    cursor.execute("SELECT POSITION, DESCRIPTION FROM tblroles")
    job_data = cursor.fetchall()
    cursor.close()
    return job_data

# Preprocess Data and Build Model
def preprocess_data(profile_data, work_history_data, job_data):
    # Preprocess profile data
    user_positions = {emp_id: job_position for emp_id, job_position in profile_data}

    # Preprocess work history data
    work_history = {emp_id: [(job_title, start_date, end_date) for emp_id_, job_title, start_date, end_date in work_history_data if emp_id_ == emp_id] for emp_id in user_positions.keys()}

    # Preprocess job data
    job_positions = [position for position, _ in job_data]
    job_descriptions = {position: description for position, description in job_data}

    return user_positions, work_history, job_positions, job_descriptions

# Recommend Jobs
def recommend_jobs(user_positions, work_history, job_positions, job_descriptions, user_id):
    user_position = user_positions.get(user_id)

    if not user_position:
        print(f"No user position found for user ID: {user_id}")
        return [], []

    recommended_jobs = []
    recommended_job_descriptions = []

    # Fetch user's work history
    user_work_history = work_history.get(user_id, [])

    # Add user's current position to the work history for comprehensive analysis
    if user_position not in user_work_history:
        user_work_history.append(user_position)

    # Iterate through job positions and prioritize recommendations based on user's profile and work history
    for job_position in job_positions:
        # Check if the job position is relevant to the user's profile or work history
        if user_position.lower() in job_position.lower() or any(job_title_tuple[0].lower() in job_position.lower() for job_title_tuple in user_work_history):
            if job_position not in recommended_jobs:
                recommended_jobs.append(job_position)
                recommended_job_descriptions.append(job_descriptions.get(job_position))

        # Break the loop if we have exactly 3 recommendations
        if len(recommended_jobs) == 3:
            break

    # If we have less than 3 recommendations, fill in with other relevant positions from the job positions
    if len(recommended_jobs) < 3:
        for job_position in job_positions:
            if job_position not in recommended_jobs:
                recommended_jobs.append(job_position)
                recommended_job_descriptions.append(job_descriptions.get(job_position))

            # Break the loop if we have exactly 3 recommendations
            if len(recommended_jobs) == 3:
                break

    return recommended_jobs, recommended_job_descriptions

# Flask endpoint for recommendations
@app.route('/recommend')
def get_recommendations():
    # Load data from the database
    profile_data, work_history_data = load_user_data()
    job_data = load_job_data()

    # Preprocess data
    user_positions, work_history, job_positions, job_descriptions = preprocess_data(profile_data, work_history_data, job_data)

    # Example user ID
    user_id = 1

    # Recommend jobs for the user
    recommended_jobs, recommended_job_descriptions = recommend_jobs(user_positions, work_history, job_positions, job_descriptions, user_id)

    # Prepare response
    response = [{'title': job, 'description': description} for job, description in zip(recommended_jobs, recommended_job_descriptions)]

    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)