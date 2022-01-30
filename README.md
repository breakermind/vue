# Vue 3
Spa Vue 3 z Vuex 4 i routerem w Laravel 8.

### Instalacja npm i cli dla vue (root)
```sh
su
sudo apt install npm
npm install -g @vue/cli
exit
```

### Sklonuj repo (user)
```sh
git clone https://github.com/breakermind/vue.git vue3
```

### Konfiguracja Laravel
```sh
cd vue3
composer update
```

### Konfiguracja Vue
```sh
vue upgrade --next
```

### Kompilacja
```sh
npm install --production
npm ci
npm run prod
```

### Uruchom server www
```sh
php artisan serve
```

# Vue3 Laravel (Dev)

### Konfiguracja
```sh
# Jako root
su
sudo apt install npm
npm install -g @vue/cli
exit

# Jako user
composer create-project -prefer-dist laravel/laravel vue3

cd vue3
composer update

php artisan migrate:fresh --seed
php artisan migrate:fresh --seed --env=testing

npm install vue@next --save
npm install vue-router@4 --save
npm install vuex@next --save
npm install vue-loader@next --save-dev

# Aktualizacja
vue upgrade --next

# Ustawienia Vue w Laravel tutaj ...

# Kompilacja vue npm
npm install
npm ci
npm run dev
npm run watch

# Lokalny server
php artisan serve
```

### Webpack.mix.js
```js
const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
	.vue()	
	.postCss('resources/css/app.css', 'public/css', [])

mix.sass('resources/sass/app.scss', 'public/css').options({
	// processCssUrls: false
});

if (mix.inProduction()) {
	mix.version();
}

// mix.js('resources/js/app.js', 'public/js')
// 	.vue().postCss('resources/css/app.css', 'public/css', [])
// 	.extract(['vue'])
```

### Plik app.js
```js
// Import axios
require('./bootstrap');

// Vue with router and store
import { createApp } from 'vue'
import options from './options.js'
import router from './router/index.js'
import store from './store/index.js'

// Import component
import HelloWorld from './components/Welcome.vue';

// App options
const app = createApp(options);

// Add component
app.component('hello-world', HelloWorld)

// App mount
app.use(store)
app.use(router)
app.mount('#app')
```

### Blade template
```php
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<title>Welcome!</title>

		<!-- Fonts -->
		<link href="https://fonts.googleapis.com/css2?family=Exo:wght@400;600;700&display=swap" rel="stylesheet">

		<!-- Styles -->
		<style>
			body { font-family: 'Exo', sans-serif; }
		</style>

		<!-- Vue app style -->
		<link rel="stylesheet" href="{{ mix('css/app.css') }}">
	</head>
	<body>
	
		<div id="app">
			<!-- Component -->
			<hello-world />

			<!-- Router view -->
			<router-view></router-view>
		</div>

		<script src="{{ mix('js/app.js') }}"></script>
	</body>
</html>
```