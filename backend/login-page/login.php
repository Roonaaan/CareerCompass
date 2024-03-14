<?php

    header("Access-Control-Allow-Origin: https://careercompass.vercel.app");
    header("Access-Control-Allow-Methods: GET, POST");
    header("Access-Control-Allow-Headers: Content-Type");

    include "../connection.php";

    $data = json_decode(file_get_contents("php://input"));

    if(isset($data->email) && isset($data->password)) {
        $email = mysqli_real_escape_string($conn, $data->email);
        $password = mysqli_real_escape_string($conn, $data->password);

        $query = "SELECT * FROM tblaccount WHERE ACCOUNT_EMAIL='$email' AND ACCOUNT_PASSWORD='$password'";
        $result = mysqli_query($conn, $query);

        if (mysqli_num_rows($result) == 1) {
            $response = array('success' => true, 'message' => 'Login Successful');
        } else {
            $response = array('success' => false, 'message' => 'Invalid email or password');
        }
    } else {
        $response = array('success' => false, 'message' => 'Invalid Request');
    }

    header('Content-Type: application/json');
    echo json_encode($response);

    mysqli_close($conn);

?>