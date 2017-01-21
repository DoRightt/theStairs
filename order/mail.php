<?php

$recepient = "littlegreenbagg@googlemail.com";
$sitename = "Anton Sukhov Portfolio";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$subject = trim($_POST["subject"]);
$message = trim($_POST["message"]);
$letter = "Имя: $name \nE-Mail: $email \nТема: $subject \n Сообщение: $message";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $letter, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");