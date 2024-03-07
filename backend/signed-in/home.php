<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

include "../connection.php";

if (isset($_GET['email'])) {
    $userEmail = mysqli_real_escape_string($conn, $_GET['email']);

    $query = "SELECT FIRSTNAME FROM tblaccount WHERE ACCOUNT_EMAIL = '$userEmail'";
    $result = mysqli_query($conn, $query);

    if ($result) {
        if (mysqli_num_rows($result) > 0) {
            $row = mysqli_fetch_assoc($result);
            $userName = $row['FIRSTNAME'];

            $response = array('success' => true, 'userName' => $userName);
        } else {
            $response = array('success' => false, 'message' => 'User not found');
        }
    } else {
        $response = array('success' => false, 'message' => 'Error fetching username');
    }
} else {
    $response = array('success' => false, 'message' => 'Email not provided');
}

header('Content-Type: application/json');
echo json_encode($response);

mysqli_close($conn);
?>