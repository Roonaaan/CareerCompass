<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST");
    header("Access-Control-Allow-Headers: Content-Type");

    $conn = new mysqli("localhost", "root", "P@55w0rd", "sys");

    if(mysqli_connect_error()) {
        echo mysqli_connect_error();
        exit();
    } else {
        $eData = file_get_contents("php://input");
        $dData = json_decode($eData, true);

        $user = $dData['email'];
        $pass = $dData['password'];
        $result = "";

        if($user !== "" and $pass != ""){
            $sql = "SELECT * FROM tblaccount WHERE ACCOUNT_USERNAME='$user';";
            $res = mysqli_query($conn, $sql);

            if(mysqli_num_rows($res) != 0) {
                $row = mysqli_fetch_array($res);
                if($pass != $row['ACCOUNT_PASSWORD']) {
                    $result = "Invalid Password";
                } 
                else {
                    $result = "Logged in Successfully";
                }
            } 
            else {
                $result = "Invalid Email Address";
            }
        } 
        else {
            $result = "";
        }

        $conn -> close();
        $response[] = array("result" => $result);
        echo json_encode($response);
    }

?>