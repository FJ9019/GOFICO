<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize input data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $services = htmlspecialchars($_POST['services']);
    $institution = htmlspecialchars($_POST['institution']);
    $object = htmlspecialchars($_POST['object']);
    $message = htmlspecialchars($_POST['message']);
    
    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit;
    }
    
    // Set the recipient email address
    $to = "margarette.altidor@gofico.net";
    
    // Set email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    // Compose the email body
    $email_body = "You have received a new message from the contact form on your website..\n\n";
    $email_body .= "Name: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Phone: $phone\n";
    $email_body .= "Services: $services\n";
    $email_body .= "Institution: $institution\n";
    $email_body .= "Object: $object\n";
    $email_body .= "Message:\n$message\n";
    
    // Send the email
    if (mail($to, $subject, $email_body, $headers)) {
        // Redirect to the contact page with a success message
        header("Location: ../contact-us.html?status=success");
        exit;
    } else {
        // Redirect to the contact page with an error message
        header("Location: ../contact-us.html?status=error");
        exit;
    }
} else {
    // Redirect to the contact page if the request method is not POST
    header("Location: ../contact-us.html");
    exit;
}
?>