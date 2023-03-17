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
            $arr = doesItExist($row); ?>
            <!--таблица в первом пилсе-->
            <div class="container-fluid d-flex justify-content-center h-100">
                <table class="table bg-black text-white table-bordered text-center justify-content-center align-items-center w-50">
                    <thead>
                    <tr>

                        <th scope="col">Название</th>
                        <th scope="col">Описание</th>
                        <th scope="col">Материал</th>
                        <th scope="col">Вес</th>
                        <th scope="col">Местонахождение</th>
                    </tr>
                    </thead>
                    <tbody>
        <tr>
            <td style="width: 5%; height: 45px;"><?php echo $row['name']; ?></td>
            <td style="width: 45%;"><?php echo $row['description']; ?></td>
            <td style="width: 15%;"><?php echo $row['material']; ?></td>
            <td style="width: 5%;"><?php echo $row['weight']; ?></td>
            <td style="width: 15%;"><?php echo $row['location']; ?></td>
        </tr>
                    </tbody>
                </table>
            </div>
       <?php }
        // Если данных нет
    } else {

    }
}
?>