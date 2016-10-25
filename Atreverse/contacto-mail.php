<?php
    if (isset ($_POST['nombre'], $_POST['telefono'], $_POST['email'], $_POST['mensaje']))  {

        $nombre = $_POST['nombre'];
        $telefono = $_POST['telefono'];
        $email = $_POST['email'];
        $mensaje = $_POST['mensaje'];

        $email_to = 'tomas@wcanvas.com';

        if(filter_var($email, FILTER_VALIDATE_EMAIL)){
            $email_subject = "Fundacion Atreverse | Consulta";
            $body = "Recibiste un mensaje de ".$nombre."\nSu numero es ".$telefono." (".$email."):\n\n Ha dejado el siguiente mensaje:\n ".$mensaje;
            $headers = "From: " .$email."\r\n";
            mail($email_to, $email_subject, $body, $headers);
            echo 0;
            return;
        }
        else {
            echo 1;
        }
    } else {
        echo 1;
    }
?>