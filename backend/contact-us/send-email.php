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

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $data = json_decode(file_get_contents("php://input"));

        if (!empty($data->name) && !empty($data->email) && !empty($data->message)) {
            $name = $data->name;
            $email = $data->email;
            $message = $data->message;

            $conn = connectDB();

            $sql = "INSERT INTO tblcontactus (NAME, EMAIL, MESSAGE) VALUES (?, ?, ?)";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("sss", $name, $email, $message);

            if ($stmt->execute()) {
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
                    $mail->Subject = 'CareerCompass User Feedback'; // Email subject
                    $mail->Body = "<p>Name: $name</p><p>Email: $email</p><p>Message: $message</p>";
                    
                    $mail->send();

                    echo json_encode(array("success" => true, "message" => "Email sent successfully."));
                } catch (Exception $e) {
                    echo json_encode(array("success" => false, "message" => "An error occurred while sending the email: " . $mail->ErrorInfo));
                }
            } else {
                echo json_encode(array("success" => false, "message" => "Error executing SQL statement."));
            }

            $stmt->close();
            $conn->close();
        } else {
            echo json_encode(array("success" => false, "message" => "Name, email, and message are required fields."));
        }
    } else {
        echo json_encode(array("success" => false, "message" => "Invalid request method."));
    }

?>