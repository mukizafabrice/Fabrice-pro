<?php
$success_sms;
$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

$mail->SMTPDebug = SMTP::DEBUG_SERVER;

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "smtp.gmail.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

$mail->Username = "mukizafabrice18@gmail.com";
$mail->Password = "qxps zdgo sjux fspd";

$mail->setFrom($email, $name);
$mail->addAddress("fabriceraymond53@gmail.com", "Fabrice");

$mail->Subject = $subject;
$mail->Body = $message;

$mail->send();

echo "
<script>
window.alert('message sent successfully');
window.location.href = 'index.html';
</script>
";
