<?php

$json_response = file_get_contents('php://input');

$user_data = json_decode($json_response);

if(isset($user_data)){

    $name = $user_data->name;
    $email = $user_data->email;
    $message = $user_data->message;

    $to = "savegdesigner@vsgdesign.me";
    $about = "Sent from Portfolio";

    $headers = "Content-Type:text/html; charset=UTF-8\n";
    $headers .= "From:  vsgdesign.me\n"; 
    $headers .= "X-Mailer: PHP  v".phpversion()."\n";
    $headers .= "X-IP:  ".$_SERVER['REMOTE_ADDR']."\n";
    $headers .= "MIME-Version: 1.0\n";

    if(empty($name) || empty($name) || empty($message)){

        $response = 'Please fill in all fields';

    }

    if(empty($response)){

        mail($to, $about, $message, $headers); 
        $response = "Sent";
        echo json_encode($response);

    }else{

        echo json_encode($response);

    }


}else{

    header('Location: ../index.html');

}

?>