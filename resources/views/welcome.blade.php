<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<title>Welcome!</title>

		<!-- Fonts -->
		<link href="https://fonts.googleapis.com/css2?family=Exo:wght@400;600;700&display=swap" rel="stylesheet">
		<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>

		<!-- Styles -->
		<style>
			body { font-family: 'Exo', sans-serif; }
		</style>

		<!-- Vue app style -->
		<link rel="stylesheet" href="{{ mix('css/app.css') }}">
	</head>
	<body>
		<div id="app">			
			<router-view></router-view>
		</div>
		<script src="{{ mix('js/app.js') }}"></script>
	</body>
</html>