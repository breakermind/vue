# Vue 3

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