<?php
	$arr = array(
		array(
			'id'=>'1',
			'name'=>'孙悟空',
			'age'=> 600,
			'sex' => '男',
			'tel' => '花果山'
		),
		array(
			'id'=>'2',
			'name'=>'猪八戒',
			'age'=> 1000,
			'sex' => '男',
			'tel' => '天庭'
		),
		array(
			'id'=>'3',
			'name'=>'沙悟净',
			'age'=> 1000,
			'sex' => '男',
			'tel' => '流沙河'
		),
		array(
			'id'=>'4',
			'name'=>'唐僧',
			'age'=> 30,
			'sex' => '男',
			'tel' => '大唐'
		)	
	);
	$data = json_encode($arr);
	echo $data;
?>