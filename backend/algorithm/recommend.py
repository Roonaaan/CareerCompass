import numpy as np
import pandas as pd
from flask import Flask, jsonify
from flask_cors import CORS
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from sqlalchemy import create_engine

# Define your connection string
connection_string = "mysql+mysqlconnector://root:@localhost/ccdb"

# Create a SQLAlchemy engine
db_engine = create_engine(connection_string)

# tblroles define
sql_query_roles = "SELECT POSITION, JOB_LEVEL, DESCRIPTION FROM tblroles"

# tblprofile define (changable employee id for now )
sql_query_profile = "SELECT JOB_POSITION, JOB_LEVEL FROM tblprofile WHERE EMPLOYEE_ID = 1" 

# tblworkhistory define (changeable employee id for now)
sql_query_work_history = "SELECT JOB_TITLE, START_DATE, END_DATE FROM tblworkhistory WHERE EMPLOYEE_ID = 1" 

# fetch data from database to panda dataframe (suggested roles)
df_roles = pd.read_sql(sql_query_roles, con=db_engine)

# fill empty values with empty strings
df_roles = df_roles.fillna('')

# mix text column into one statement
df_roles['combined_text'] = df_roles['POSITION'] + ' ' + df_roles['JOB_LEVEL'] + ' ' + df_roles['DESCRIPTION']

# Create a TF-IDF vectorizer to convert text into numerical vectors for roles
tfidf_vectorizer_roles = TfidfVectorizer(stop_words='english')
tfidf_matrix_roles = tfidf_vectorizer_roles.fit_transform(df_roles['combined_text'])

# fetch data from datase to panda dataframe (user profile)
df_profile = pd.read_sql(sql_query_profile, con=db_engine)

# extract user job profile and job level
user_position = df_profile.at[0, 'JOB_POSITION']
user_level = df_profile.at[0, 'JOB_LEVEL']

# fetch data from database to panda dataframe (user work history)
df_work_history = pd.read_sql(sql_query_work_history, con=db_engine)

# calculate tenurity to years
def calculate_tenure(start_date, end_date):
    return (end_date - start_date).days / 365.25 # whole year

# Compute cosine similarity between job descriptions for user roles
cosine_sim_roles = cosine_similarity(tfidf_matrix_roles, tfidf_matrix_roles)

# Function to recommend top N similar jobs based on job title, level, and description
def recommend_jobs_with_description(user_position, user_level, user_work_history, top_n=3):
    # Find the index of the user's current job position in the DataFrame
    user_job_index = df_roles[df_roles['POSITION'] == user_position].index
    if len(user_job_index) == 0:
        print("User's current job position not found.")
        return []

    user_job_index = user_job_index[0]

    # Compute tenurity for each previous job title
    job_tenures = {}
    for index, row in user_work_history.iterrows():
        job_title = row['JOB_TITLE']
        tenure = calculate_tenure(row['START_DATE'], row['END_DATE'])
        if tenure >= 4:
            job_tenures[job_title] = tenure

    # Check eligibility for higher job levels
    eligible_for_higher_level = False
    for tenure in job_tenures.values():
        if tenure >= 4:
            eligible_for_higher_level = True
            break

    # Compute cosine similarity between user job and all other jobs
    user_sim_scores = list(enumerate(cosine_sim_roles[user_job_index]))

    # Sort jobs based on similarity scores
    user_sim_scores = sorted(user_sim_scores, key=lambda x: x[1], reverse=True)

    # Filter jobs based on user level
    filtered_sim_scores = [job for job in user_sim_scores if df_roles.iloc[job[0]]['JOB_LEVEL'] == user_level]

    # Get top N similar job indices (excluding the user's job itself)
    top_similar_jobs = filtered_sim_scores[1:top_n + 1]

    # Capture the recommended jobs along with their descriptions
    recommended_jobs = [(df_roles.iloc[job[0]]['POSITION'], df_roles.iloc[job[0]]['DESCRIPTION']) for job in top_similar_jobs]

    # If eligible for a higher job, capture at least 1
    if eligible_for_higher_level:
        higher_level_job = df_roles[df_roles['JOB_LEVEL'] > user_level].iloc[0]
        recommended_jobs.append((higher_level_job['POSITION'], higher_level_job['DESCRIPTION']))

    return recommended_jobs

# Flask app setup
app = Flask(__name__)
CORS(app)

# Route for fetching recommendations
@app.route('/recommend', methods=['GET'])
def get_recommendations():
    recommended_jobs_with_desc = recommend_jobs_with_description(user_position, user_level, df_work_history)
    recommendations_json = [{'title': job, 'description': desc} for job, desc in recommended_jobs_with_desc]
    return jsonify(recommendations_json)

if __name__ == "__main__":
    app.run(debug=True)