<?php

    $servername = "localhost";
    $username = "id21976635_ccdb";
    $password = "Ccdb2024!";
    $dbname = "id21976635_ccdb";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
}

    function connectDB() {
        global $conn;
        return $conn;
    }
