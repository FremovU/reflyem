<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>dataBase</title>
    <link rel="stylesheet" href="assets/style/dataBase.css">
    <link rel="stylesheet" href="assets/mdb/css/mdb.min.css">
    <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
            rel="stylesheet"
    />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <?php
    error_reporting(E_ALL);
    ini_set('display_errors', 'on');
    mb_internal_encoding('UTF-8');

    require __DIR__ . '/assets/php/Pagination.php';
    require __DIR__ . '/assets/php/db.php';
    require __DIR__ . '/assets/php/funcs.php';
    require __DIR__ . '/assets/php/search.php';

    $page = $_GET['page'] ?? 1;
    $per_page = 5;
    $total = get_count('wearon');
    $pagination = new Pagination((int)$page, $per_page, $total);
    $start = $pagination->get_start();
    $data = get_wearons($start, $per_page);
    ?>
</head>
<body>
<!-- Background image -->
<div
        class="bg-image"
        style="
    background-image: url('assets/image/Frem.png');
    height: 937px;
  "
>
    <h1 class="text-white d-flex mt-3 justify-content-center align-items-center">База знаний</h1>
    <div class="h-100">
        <!-- Pills navs -->
        <ul class="nav nav-pills mb-3 d-flex justify-content-center align-items-center" id="ex1" role="tablist">
            <li class="nav-item" role="presentation">
                <a
                        class="nav-link active "
                        id="ex1-tab-1"
                        data-mdb-toggle="pill"
                        href="#ex1-pills-1"
                        role="tab"
                        aria-controls="ex1-pills-1"
                        aria-selected="true"
                >Оружие</a
                >
            </li>

            <li class="nav-item" role="presentation">
                <a
                        class="nav-link"
                        id="ex1-tab-2"
                        data-mdb-toggle="pill"
                        href="#ex1-pills-2"
                        role="tab"
                        aria-controls="ex1-pills-2"
                        aria-selected="false"
                >Броня</a
                >
            </li>
            <li class="nav-item" role="presentation">
                <a
                        class="nav-link"
                        id="ex1-tab-3"
                        data-mdb-toggle="pill"
                        href="#ex1-pills-3"
                        role="tab"
                        aria-controls="ex1-pills-3"
                        aria-selected="false"
                >кольца</a
                >
            </li>
        </ul>

        <!-- Pills content -->
        <div class="tab-content d-flex justify-content-center align-items-center container-fluid" id="ex1-content" style="width: 100%">
            <div
                    class="tab-pane fade show active text-info fs-5 fw-bold"
                    id="ex1-pills-1"
                    role="tabpanel"
                    aria-labelledby="ex1-tab-1"
            >
                <!-- Pills navs поиск в 1 пилсе -->
                <div class="container-fluid d-flex h-100 justify-content-center mb-3" style="width: 350px;">
                <form action="<?= $_SERVER['SCRIPT_NAME'] ?>">
                    <div class="input-group rounded">
                        <input type="search" name="search" class="form-control rounded" placeholder="Поиск" aria-label="Search" aria-describedby="search-addon" />
                        <button type="submit" class="btn btn-outline-primary bg-primary text-white">Найти</button>
                    </div>
                </form>
                </div>
                <?php
                countPeople($res); // Функция вывода пользователей
                ?>

            <!--таблица в первом пилсе-->
                <div class="container-fluid d-flex justify-content-center h-100">
                <table class="table bg-black text-white table-bordered text-center justify-content-center align-items-center w-75 ms-auto" style="width: 1000px!important;">
                    <thead>
                    <tr>

                        <th class="text-start" scope="col">Название</th>
                        <th scope="col">Описание</th>
                        <th scope="col">Материал</th>
                        <th scope="col">Вес</th>
                        <th scope="col">Местонахождение</th>
                    </tr>
                    </thead>
                    <tbody>

                    <?php foreach ($data as $elem): ?>
                        <tr>
                            <td style="width: 5%; height: 45px;"><?php echo $elem['name']; ?></td>
                            <td style="width: 45%;"><?php echo $elem['description']; ?></td>
                            <td style="width: 15%;"><?php echo $elem['material']; ?></td>
                            <td style="width: 5%;"><?php echo $elem['weight']; ?></td>
                            <td style="width: 15%;"><?php echo $elem['location']; ?></td>
                        </tr>
                    <?php endforeach; ?>
                    </tbody>
                </table>


                    <div class="fw-bold text-white fs-5 shadow-5-strong container-fluid h-100 w-25 me-auto d-flex justify-content-center flex-column align-items-center ms-3" style="width: 250px!important;">
                        <div>
                            <!-- Default radio -->
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label class="form-check-label" for="flexRadioDefault1"> Кинжалы </label>
                                <script>
                                    let radio = document.getElementById('flexRadioDefault1');
                                    if (radio.chec)
                                </script>
                            </div>

                            <!-- Default checked radio -->
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                <label class="form-check-label" for="flexRadioDefault2"> Одноручные мечи </label>
                            </div>

                            <!-- Default checked radio -->
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked/>
                                <label class="form-check-label" for="flexRadioDefault3"> Двуручные мечи </label>
                            </div>

                            <!-- Default checked radio -->
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" checked/>
                                <label class="form-check-label" for="flexRadioDefault4"> Секиры </label>
                            </div>

                            <!-- Default checked radio -->
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" checked/>
                                <label class="form-check-label" for="flexRadioDefault5"> Булавы </label>
                            </div>


                        </div>
                        <!-- Default checkbox -->
                        <div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">Default checkbox</label>
                            </div>

                        </div>
                    </div>


                </div>

                <div class="container-fluid d-flex justify-content-center h-100">
                <?php echo $pagination;  ?>
                </div>


            </div>



            <div class="tab-pane fade " id="ex1-pills-2" role="tabpanel" aria-labelledby="ex1-tab-2">
                2
            </div>

            <div class="tab-pane fade" id="ex1-pills-3" role="tabpanel" aria-labelledby="ex1-tab-3">
                Tab 3 content
            </div>
        </div>

    </div>
</div>


<script src="assets/mdb/js/mdb.min.js"></script>
</body>
</html>