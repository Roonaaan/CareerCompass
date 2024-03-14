<?php

header("Access-Control-Allow-Origin: https://careercompass-818c6.web.app");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/phpmailer/phpmailer/src/Exception.php';
require '../vendor/phpmailer/phpmailer/src/PHPMailer.php';
require '../vendor/phpmailer/phpmailer/src/SMTP.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));

    if (isset($data->name, $data->email, $data->message)) {
        $name = htmlspecialchars(trim($data->name));
        $email = filter_var(trim($data->email), FILTER_SANITIZE_EMAIL);
        $message = htmlspecialchars(trim($data->message));

        if (!empty($name) && !empty($email) && !empty($message)) {
            // Firebase Realtime Database URL
            $databaseUrl = "https://careercompass-818c6-default-rtdb.asia-southeast1.firebasedatabase.app/";
            // Path to the node where you want to store contact information
            $nodePath = "tblcontactus";

            // Construct the URL for the POST request
            $url = $databaseUrl . $nodePath . ".json";

            // Data to be sent to Firebase Realtime Database
            $postData = json_encode([
                "NAME" => $name,
                "EMAIL" => $email,
                "MESSAGE" => $message
            ]);

            // Send POST request to Firebase Realtime Database REST API
            $ch = curl_init($url);
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            $response = curl_exec($ch);

            if ($response === false) {
                echo json_encode(array("success" => false, "message" => "An error occurred while storing the message."));
            } else {
                // Send email using PHPMailer
                $mail = new PHPMailer(true);
                try {
                    $mail->isSMTP();
                    $mail->Host = 'smtp.gmail.com';
                    $mail->Port = 587;
                    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
                    $mail->SMTPAuth = true;
                    $mail->Username = 'careercompassbscs@gmail.com';
                    $mail->Password = 'mqmx jfox qpky rtkg';

                    $mail->setFrom($email, $name);
                    $mail->addAddress('careercompassbscs@gmail.com', 'CareerCompass');

                    $mail->isHTML(true);
                    $mail->Subject = 'CareerCompass User Feedback';
                    $mail->Body = "<p>Name: $name</p><p>Email: $email</p><p>Message: $message</p>";
                    
                    $mail->send();
                    echo json_encode(array("success" => true, "message" => "Message sent successfully."));
                } catch (Exception $e) {
                    echo json_encode(array("success" => false, "message" => "An error occurred while sending the email: " . $e->getMessage()));
                }
            }

            curl_close($ch);
        } else {
            echo json_encode(array("success" => false, "message" => "Name, email, and message are required fields."));
        }
    } else {
        echo json_encode(array("success" => false, "message" => "Invalid data format."));
    }
} else {
    echo json_encode(array("success" => false, "message" => "Invalid request method."));
}

?>