<?php
$servername = "localhost"; // Адрес сервера
$username = "root"; // Имя пользователя
$password = ""; // Пароль
$BDname = "items"; // Название БД

// Подключение к БД
$mysqli = new mysqli($servername, $username, $password, $BDname);

// Проверка на ошибку
if ($mysqli->connect_error) {
    printf("Соединение не удалось: %s\n", $mysqli->connect_error);
    exit();
}

// Получаем запрос
$inputSearch = $_REQUEST['search'];

// Создаём SQL запрос
$sql = "SELECT * FROM `wearon` WHERE `name` = '$inputSearch'";

// Отправляем SQL запрос
$res = $mysqli -> query($sql);


function doesItExist(array $arr) {
    // Создаём новый массив
    $data = array(
        'name' => $arr['name'] != false ? $arr['name'] : 'Нет данных',
    );
    return $data; // Возвращаем этот массив
}

function countPeople($res) {
    // Проверка на то, что строк больше нуля
    if ($res -> num_rows > 0) {
        // Цикл для вывода данных
        while ($row = $res -> fetch_assoc()) {
            // Получаем массив с строками которые нужно выводить
            $arr = doesItExist($row);
            // Вывод данных
            echo "
                  Название: ". $row['name'] ."<br>  
                  Тип: ". $row['type'] ."<hr>";
        }
        // Если данных нет
    } else {
        echo "Не кто не найден";
    }
}
?>