<?php

return array(
	'default' => 'mysql',
	'prefix' => 'blog_',
	'connections' => array(
		'mysql' => array(
			'driver' => 'mysql',
			'hostname' => '127.0.0.1',
			'port' => 3306,
			'username' => 'root',
			'password' => 'root',
			'database' => 'blog',
			'charset' => 'utf8'
		)
	)
);