<?php


$sub = "Your subject";

$msg = "Your message TEST the email";

$rec = "put your email what to send";

$suc = mail($rec,$sub,$msg);



// ini_set("SMTP","mail.sweetinteractive.com");
// $suc = mail("techsambd@gmail.com","Learning PHP","Message is not working ","From: techsambd@gmail.com");


if($suc){
    echo "Mail sent";
} else {
    echo "Mail sending Failed.";
}

// <?php phpinfo(); 
// echo phpinfo();
// php --ini