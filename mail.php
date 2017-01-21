<?php

$recepient = "littlegreenbagg@googlemail.com";
$sitename = "Holz";

$contact = trim($_POST["contact"]);
$info = trim($_POST["info"]);
$text = trim($_POST["text"]);
$message = "Контактные данные: $contact \nИнформация по заказу: $info";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");