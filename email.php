<?php

    if(isset($_POST['emailbtn']))
    {

    $to      = 'contact@eejohnsonllc.com';

    $subject = 'the subject';
    $message = 'hello';
    $headers = 'From: contact@eejohnsonllc.com' . "\r\n" .
        'Reply-To: contact@eejohnsonllc.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);

    echo 'Email Sent.';
    }

    ?>