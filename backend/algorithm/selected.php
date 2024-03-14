<?php


header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

// Include connection details from a separate file
include "../connection.php";

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  
  // Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  
  // SQL query to fetch departments
$sql = "SELECT department, description FROM tbldepartment";
$result = $conn->query($sql);

// Prepare response data
$departments = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $departments[] = $row;
    }
}

// Close connection
$conn->close();

// Encode data as JSON
header('Content-Type: application/json');
echo json_encode($departments);


?>