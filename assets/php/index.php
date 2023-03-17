<?php

require __DIR__ . '/Pagination.php';
require __DIR__ . '/db.php';
require __DIR__ . '/funcs.php';

$page = $_GET['page'] ?? 1;
$per_page = 6;
$total = get_count('wearon');
$pagination = new Pagination((int)$page, $per_page, $total);
$start = $pagination->get_start();


$data = get_cities($start, $per_page);
?>
<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Hello, world!</title>
</head>
<body>

<div class="container mt-5">

    <?php
    foreach ($data as $elem): ?>
        <table class="table bg-black text-white table-bordered text-center table-sm justify-content-center align-items-center">
            <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col">Название</th>
                <th scope="col">Описание</th>
                <th scope="col">Материал</th>
                <th scope="col">Вес</th>
                <th scope="col">Местонахождение</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th style="width: 7%;"><img src="<?=$elem['image']?>" alt="dagger"></th>
                <td style="width: 15%;"><?=$elem['name']?></td>
                <td class="text-start" style="width: 35%;"><?=$elem['description']?></td>
                <td style="width: 5%;"><?=$elem['material']?></td>
                <td style="width: 5%;"><?=$elem['weight']?> кг</td>
                <td style="width: 15%;"><?=$elem['location']?></td>
            </tr>
            </tbody>
        </table>
    <?php endforeach;

    echo $pagination;
    ?>

</div>


</body>
</html>
