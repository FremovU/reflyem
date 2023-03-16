<?php
//var_dump($_GET);     // массив с ключами test1 и test2
//var_dump($_POST);    // пустой массив
$password = 12345;
if ($_POST['password'] == 12345) {
    echo 'Вы ввели верный пароль';
} else {
    echo 'Вы ввели не верный пароль';
}// массив с ключами test1 и test2
?>