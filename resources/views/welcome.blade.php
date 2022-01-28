<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<title>Vue - Landing Page</title>

		<!-- Fonts -->
		<link href="https://fonts.googleapis.com/css2?family=Exo:wght@400;600;700&display=swap" rel="stylesheet">

		<!-- Styles -->
		<style>
			body { font-family: 'Exo', sans-serif; }			
		</style>

		<!-- Vue app style -->
		<link rel="stylesheet" href="{{ mix('css/app.css') }}">

	</head>
	<body class="antialiased">

		<div id="app">			
			<hello-world/>
		</div>

		<script src="{{ mix('js/app.js') }}"></script>

	</body>
</html>