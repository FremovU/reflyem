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
</head>
<body>
<!-- Background image -->
<div
        class="bg-image"
        style="
    background-image: url('assets/image/Frem.png');
    height: 1500px;
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
        <!-- Pills navs -->

        <!--Search-->
        <div class="input-group d-flex ms-auto w-100 justify-content-end me-5 mb-5" style="width: 400px!important; left: -140px">
            <div class="form-outline">
                <input type="search" id="form1" class="form-control" />
                <label class="form-label text-white" for="form1">Search</label>
            </div>
            <button type="submit" class="btn btn-primary">
                <i class="fas fa-search"></i>
            </button>
        </div>


        <!-- Pills content -->
        <div class="tab-content d-flex justify-content-center align-items-center container-fluid" id="ex1-content" style="width: 100%">
            <div
                    class="tab-pane fade show active text-info fs-5 fw-bold"
                    id="ex1-pills-1"
                    role="tabpanel"
                    aria-labelledby="ex1-tab-1"
            >

                <?php
                error_reporting(E_ALL);
                ini_set('display_errors', 'on');
                mb_internal_encoding('UTF-8');

                $host = 'localhost';
                $user = 'root';
                $pass = '';
                $name = 'Items';

                $link = mysqli_connect($host, $user, $pass, $name);
                $query_all_from_WEARON = 'SELECT * FROM `WEARON`';
                $query_all_where_material = 'SELECT * FROM `WEARON` WHERE material = `Стальной`';
                $result = mysqli_query($link, $query_all_from_WEARON) or die(mysqli_error($link));

                for ($data = []; $row = mysqli_fetch_assoc($result); $data[] = $row);

                $per_page = 6;
                $total = count($data);
                $count_pages = ceil($total / $per_page);
                $page = $_GET['page'] ?? 1;
                $page = (int)$page;
                if (!$page || $page < 1) {
                    $page = 1;
                }
                if ($page > $count_pages) {
                    $page = $count_pages;
                }
                $start = ($page - 1) * $per_page;



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
                ?>

                <nav aria-label="Page navigation example" class="justify-content-center d-flex">
                    <ul class="pagination">
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span class="text-white" aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li class="page-item"><a class="page-link text-white" href="#">1</a></li>
                        <li class="page-item"><a class="page-link text-white" href="#">2</a></li>
                        <li class="page-item"><a class="page-link text-white" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                                <span class="text-white" aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
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