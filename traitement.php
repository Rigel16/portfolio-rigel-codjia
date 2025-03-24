<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "ton-email@example.com"; // Remplace par ton email
    $subject = "Nouveau message de contact";
    $headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";

    $body = "Nom: $name\nEmail: $email\nMessage:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        echo "✅ <strong>Message envoyé !</strong> Je vous répondrez dès que possible.";
    } else {
        echo "❌ <strong>Erreur !</strong> Impossible d’envoyer le message, veuillez réessayer.";
    }
} else {
    echo "❌ <strong>Action interdite !</strong> Vous ne pouvez pas accéder directement à ce fichier.";
}
?>
