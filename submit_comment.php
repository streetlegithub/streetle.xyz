$to = "youremail@example.com";
$subject = "New comment on your website";
$message = "Name: " . $_POST['name'] . "\n\nEmail: " . $_POST['email'] . "\n\nComment: " . $_POST['comment'];
$headers = "From: " . $_POST['email'];

if (mail($to, $subject, $message, $headers)) {
    echo "Thank you for your comment!";
} else {
    echo "There was a problem sending your comment.";
}
