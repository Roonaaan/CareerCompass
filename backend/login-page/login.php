<?php

// Firebase credentials
$firebase_url = 'https://careercompass-818c6.firebaseio.com';
$firebase_secret = 'CysupyOQ5Tci2XTGapL7LPJv3c9moPMI3JDiVWdh';

// Get the POST data
$email = $_POST['email'];
$password = $_POST['password'];

// Fetch user data from Firebase
$firebase_url = $firebase_url . '/tblaccount.json?orderBy="ACCOUNT_EMAIL"&equalTo="' . $email . '"';
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $firebase_url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json', 'Authorization: Bearer ' . $firebase_secret]);
$response = curl_exec($ch);
curl_close($ch);

$data = json_decode($response, true);

// Check if user exists and verify password
if ($data != null) {
    $user_data = reset($data);
    if ($user_data['ACCOUNT_PASSWORD'] == $password) {
        // Password matches, login successful
        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json');
        echo json_encode(array('success' => true, 'message' => 'Login successful', 'user' => $user_data));
    } else {
        // Password does not match
        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json');
        echo json_encode(array('success' => false, 'message' => 'Incorrect password'));
    }
} else {
    // User not found
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    echo json_encode(array('success' => false, 'message' => 'User not found'));
}

?>