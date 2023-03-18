<?php

function debug($data)
{
    echo "<pre>" . print_r($data, 1) . "</pre>";
}

function get_count($table): int
{
    global $pdo;
    $res = $pdo->query("SELECT COUNT(*) FROM {$table}");
    return $res->fetchColumn();
}

function get_wearons($start, $per_page): array
{
    global $pdo;
    $res = $pdo->query("SELECT * FROM wearon order by type LIMIT $start, $per_page");
    return $res->fetchAll();
}

function get_daggers($start, $per_page): array
{
    global $pdo;
    $res = $pdo->query("SELECT * FROM `wearon` WHERE type = 'dagger' LIMIT $start, $per_page");
    return $res->fetchAll();
}

function get_spears($start, $per_page): array
{
    global $pdo;
    $res = $pdo->query("SELECT * FROM `wearon` WHERE type = 'spear' LIMIT $start, $per_page");
    return $res->fetchAll();
}
function get_axes($start, $per_page): array
{
    global $pdo;
    $res = $pdo->query("SELECT * FROM `wearon` WHERE type = 'axe' LIMIT $start, $per_page");
    return $res->fetchAll();
}

