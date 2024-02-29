<?php

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

include "../connection.php";

$data = json_decode(file_get_contents("php://input"));

if (!empty($data->token) && !empty($data->currentPassword) && !empty($data->newPassword)) {
    $token = $data->token;
    $currentPassword = $data->currentPassword;
    $newPassword = $data->newPassword;

    // checking if the token is existing and not expired
    $sql = "SELECT * FROM tblforgotpass WHERE RESET_TOKEN = '$token' AND RESET_TOKEN_EXPIRY >= NOW()";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // if token if valid, will retrive the email address
        $row = $result->fetch_assoc();
        $email = $row['EMAIL'];

        // verify the current password first before updating
        $verifySql = "SELECT * FROM tblaccount WHERE ACCOUNT_EMAIL = '$email' and ACCOUNT_PASSWORD = '$currentPassword'";
        $verifyResult = $conn->query($verifySql);

        if ($verifyResult->num_rows > 0) {
            // will update or change the password in the database
            $updateSql = "UPDATE tblaccount SET ACCOUNT_PASSWORD = '$newPassword' WHERE ACCOUNT_EMAIL = '$email'";
            
            if ($conn->query($updateSql) === TRUE) {
                // will remove the token once that the password is successfully changed
                $deleteSql = "DELETE FROM tblforgotpass WHERE EMAIL = '$email'";
                $conn->query($deleteSql);
    
                echo json_encode(array("success" => true, "message" => "Password updated successfully."));
            } else {
                echo json_encode(array("success" => false, "message" => "Failed to update password."));
            }
        } else {
            echo json_encode(array("success" => false, "message" => "Incorrect current password."));
        }
    } else {
        echo json_encode(array("success" => false, "message" => "Invalid or expired token."));
    }
} else {
    echo json_encode(array("success" => false, "message" => "Token, current password, and new password are required."));
}
?>
