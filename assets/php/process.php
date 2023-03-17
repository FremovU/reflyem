<?php

require_once 'class.search.php';

$config = array('localhost','root','','items');
$table = 'wearon';
$key = 'id';
$fields = array('name');

$keyword = $_POST['keyword'].' '.$_POST['location'];

$found = new search_engine($config);
$found->set_table($table);
$found->set_primarykey($key);
$found->set_keyword($keyword);
$found->set_fields($fields);

$result = $found->set_result();
print_r($result);

// Display the results
$data = join( ",", $result);
$sql = "SELECT * FROM `wearon` WHERE id IN ($data) ";
$process = mysqli_query($sql);
echo "<br><pre><table border=1>";
while ($row = mysqli_fetch_object($process))
{
    echo "<tr>";
    echo "<td>".$row->id."</td>";
    echo "<td>".$row->name."</td>";
    echo "</tr>";
}
echo "</table>"

?>


