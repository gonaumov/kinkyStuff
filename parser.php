<?php
$result = array();
$prepared = array();
$str = file_get_contents("source.txt");
if(preg_match_all("#\n([^\n]+)([0-9])#",$str,$result) !== false) {	
	for($i = 0 ; $i < count($result[0]) ; $i++) {
	    $prepared[] = array(
			"description" =>  utf8_encode(trim(preg_replace("#-.*$#", "", $result[1][$i]))),
			"value" => $result[2][$i]
	    );
	}
	file_put_contents("data.json", str_replace('\\u0000', "", json_encode($prepared, JSON_PRETTY_PRINT)));
	echo "\nAll done!\n";
}
