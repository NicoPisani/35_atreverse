<!-- Contact form PHP script -->

<?php
    $name = $_POST['name'];
    $number = $_POST['number'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "hi@wcanvas.com"; // Replace xxxx@xxxx.com with your email address (mandatory!) 
    $subject = "Consulta"; // Choose a custom subject (not mandatory)

    $body = "Recibiste un mensaje de " . $name ."\n - su numero es ".$number. " (" . $email . "):\n\n" . $message;

    $from = "De: Fundacion Atreverse"; //
    $headers = "De:" . $from . "\r\n";
    $headers .= "Responderle a: " . $email . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();    
                
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        if ($name != '' && $email != '' && $message != '') {
                
            if (mail ($to, $subject, $body, $headers)) { 
                echo '<p style="color:#66A325;">Gracias! Tu mensaje fue recibido!</p>';
            } else { 
                echo '<p style="color:#F84B3C;">Ups! Algo salio mal, por favor proba de nuevo.</p>'; 
            } 

        } else {
            echo '<p style="color:#F84B3C;">Hay campos incompletos!</p>';
        }
    } else {
        echo '<p style="color:#F84B3C;">Direccion de mail invalida.</p>';
    }  


 

?>