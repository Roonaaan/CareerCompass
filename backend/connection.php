<?php

require __DIR__.'/vendor/autoload.php';

use Kreait\Firebase\Factory;

// Initialize Firebase with service account JSON file
$factory = (new Factory)
    ->withServiceAccount(__DIR__.'/careercompass-818c6-firebase-adminsdk-sxhmh-f2b314603e.json')
    ->withDatabaseUri('https://careercompass-818c6-default-rtdb.asia-southeast1.firebasedatabase.app/');

// Get a reference to the Firebase Realtime Database
$database = $factory->createDatabase();

// Perform a read operation (e.g., reading data from a specific node)
$data = $database->getReference('/')->getSnapshot()->getValue();

// Check if data is retrieved
if ($data) {
    echo "Connected to Firebase Realtime Database. Data retrieved successfully:\n";
    print_r($data);
} else {
    echo "Failed to retrieve data from Firebase Realtime Database.\n";
}

?>
