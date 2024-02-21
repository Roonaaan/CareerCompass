<?php

    header("Access-Control-Allow-Origin: http://localhost:5173");
    header("Access-Control-Allow-Methods: GET, POST");
    header("Access-Control-Allow-Headers: Content-Type");

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require '../vendor/phpmailer/phpmailer/src/Exception.php';
    require '../vendor/phpmailer/phpmailer/src/PHPMailer.php';
    require '../vendor/phpmailer/phpmailer/src/SMTP.php';

    include "../connection.php";

    
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        exit(); 
    }
    
    $mail = new PHPMailer(true);

    $data = json_decode(file_get_contents("php://input"));

    if (!empty($data->email)) {
        $email = $data->email;

        $token = bin2hex(random_bytes(32));

        $expiration_time = strtotime('+15 minutes');

        $sql = "INSERT INTO tblforgotpass (EMAIL, RESET_TOKEN, RESET_TOKEN_EXPIRY) VALUES ('$email', '$token', '$expiration_time')";
        if ($conn->query($sql) === TRUE) {
            $reset_link = "http://localhost:5173/Login/Forgot-Password/Change-Password?token=$token";
            $to = $email;
            $subject = "Password Reset Request";
            
            try {
                // Set email content to HTML
                $mail->isHTML(true);
                
                $mail->isSMTP();
                $mail->Host = 'smtp.gmail.com';
                $mail->Port = 587;
                $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
                $mail->SMTPAuth = true;
                $mail->Username = 'careercompassbscs@gmail.com';
                $mail->Password = 'mqmx jfox qpky rtkg';
                $mail->setFrom('ramos.johnronan.bscs2020@gmail.com', 'CareerCompass');

                $mail->addAddress($to);
                $mail->Subject = $subject;
                $mail->Body = "
                Good day,<br><br>
                We have received your request to change your password. Please click the link below and follow the instructions to reset your password. The link will expire within 15 minutes.<br><br>
                <a href='$reset_link'>Reset Password</a><br><br>
                ";

                $mail->send();

                echo json_encode(array("success" => true, "message" => "Password reset link sent successfully."));
            } catch (Exception $e) {
                echo json_encode(array("success" => false, "message" => "An error occurred while sending the email: " . $mail->ErrorInfo));
            }
        } else {
            echo json_encode(array("success" => false, "message" => "Failed to generate password reset token."));
        }
    } else {
        echo json_encode(array("success" => false, "message" => "Email Address is required."));
    }

            

?>