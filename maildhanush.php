<?php
 header("Access-Control-Allow-Origin: *");
if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $country = $_POST['country'];
    $address = $_POST['address'];
    $phone = $_POST['phone'];
    $interested = $_POST['interested'];
    $requirements = $_POST['requirements'];
    $message = "The customer has sent the following details: \r\n"
    ."Name : ".$name
    ."\r\nEmail : ".$email    
    ."\r\nCountry : ".$country
    ."\r\nPhone Number : ".$phone
    ."\r\nAddress : ".$address
    ."\r\nInterested Product : ".$interested
    ."\r\nRequirements : ".$requirements;

    $messageCustomer = 
    ."Name : ".$name
    ."\r\nCountry : ".$country
    ."\r\nPhone Number : ".$phone
    ."\r\nAddress : ".$address
    ."\r\nInterested Product : ".$interested
    ."\r\nRequirements : ".$requirements;

    mail("kamaldeepsaini51@gmail.com", "This is an email from:" .$email.' with name '.$name, $message);
    mail($email, "Greetings from Dhanush International", "We have successfully received your details as following and will get back to you shortly!\r\n".$messageCustomer);
}
?>