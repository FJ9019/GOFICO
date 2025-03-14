<?php
// Define variables and initialize with empty values
$name = $email = $message = $file_path = "";
$errors = [];

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate name
    if (empty($_POST["name"])) {
        $errors[] = "Name is required.";
    } else {
        $name = htmlspecialchars($_POST["name"]);
    }

    // Validate email
    if (empty($_POST["email"])) {
        $errors[] = "Email is required.";
    } else {
        $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $errors[] = "Invalid email format.";
        }
    }

    // Validate message
    if (empty($_POST["message"])) {
        $errors[] = "Message is required.";
    } else {
        $message = htmlspecialchars($_POST["message"]);
    }

    // Handle file upload
    if (isset($_FILES["file"]) && $_FILES["file"]["error"] == 0) {
        $target_dir = "uploads/"; // Directory to store uploaded files
        $target_file = $target_dir . basename($_FILES["file"]["name"]);
        $file_type = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

        // Check file size (5MB max)
        if ($_FILES["file"]["size"] > 5000000) {
            $errors[] = "File is too large. Maximum size allowed is 5MB.";
        }

        // Allow certain file formats
        $allowed_types = array("jpg", "jpeg", "png", "gif", "pdf", "doc", "docx");
        if (!in_array($file_type, $allowed_types)) {
            $errors[] = "Sorry, only JPG, JPEG, PNG, GIF, PDF, DOC, and DOCX files are allowed.";
        }

        // Move the file to the uploads directory
        if (empty($errors)) {
            if (!move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
                $errors[] = "Sorry, there was an error uploading your file.";
            } else {
                $file_path = $target_file;
            }
        }
    }

    // If no errors, process the form data
    if (empty($errors)) {
        // Send an email (example)
        $to = "tech@gofico.net"; // Replace with your email
        $subject = "New Contact Form Submission from $name";
        $email_message = "Name: $name\n";
        $email_message .= "Email: $email\n";
        $email_message .= "Message:\n$message\n";
        if ($file_path) {
            $email_message .= "Attached File: $file_path\n";
        }
        $headers = "From: $email";

        if (mail($to, $subject, $email_message, $headers)) {
            echo "<p>Thank you, $name! Your message has been sent.</p>";
        } else {
            echo "<p class='error'>Sorry, there was an error sending your message.</p>";
        }
    } else {
        // Display errors
        foreach ($errors as $error) {
            echo "<p class='error'>$error</p>";
        }
    }
}
?>