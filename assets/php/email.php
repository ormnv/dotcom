<?php 

$to      = 'romanova.olga.a@gmail.com';
$subject = 'From dotcom';
$message = 'hello';
// $headers = 'From: webmaster@example.com' . "\r\n" .
//     'Reply-To: webmaster@example.com' . "\r\n" .
//     'X-Mailer: PHP/' . phpversion();
echo ("hit mail");
mail($to, $subject, $message);

?>