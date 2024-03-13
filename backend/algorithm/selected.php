<?php

    header("Access-Control-Allow-Origin: http://localhost:5173");
    header("Access-Control-Allow-Methods: GET, POST");
    header("Access-Control-Allow-Headers: Content-Type");

    include "../connection.php";

$query = "SELECT DEPARTMENT FROM tbldepartment";
$result = $connection->query($query);

$departments = [];

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $departments[] = $row['DEPARTMENT'];
    }
}

$connection->close();

header('Content-Type: application/json');
echo json_encode($departments);
?>

?>