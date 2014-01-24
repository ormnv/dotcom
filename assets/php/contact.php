<?php 
// function email($name, $email, $message){
	$to      = 'romanova.olga.a@gmail.com';
	$subject = $data['name'].' from dotcom';
	$message = $data['name'].' , '.$data['message'];
	// $headers = 'From: webmaster@example.com' . "\r\n" .
	//     'Reply-To: webmaster@example.com' . "\r\n" .
	//     'X-Mailer: PHP/' . phpversion();
	error_log("hit mail");
	error_log($subject.$message);
	mail($to, $subject, $message);
//}
?>