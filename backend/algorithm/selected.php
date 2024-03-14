<?php

// Set headers to allow access from your React application
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

// Include connection details from a separate file
include "../connection.php";

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  
  $sql = "SELECT DEPARTMENT FROM tbldepartment";
  $result = $conn->query($sql);
  
  $departments = array();
  
  if ($result->num_rows > 0) {
    // Fetch data from the database
    while($row = $result->fetch_assoc()) {
      $departments[] = $row["DEPARTMENT"];
    }
  }
  
  $conn->close();
  
  // Send JSON response
  header('Content-Type: application/json');
  echo json_encode($departments);

?>