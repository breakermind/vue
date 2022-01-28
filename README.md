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
cd vue3
```

### Aktualizacja pakietów
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
# As root
su
sudo apt install npm
npm install -g @vue/cli
exit

# As user
composer create-project -prefer-dist laravel/laravel vue3

cd vue3
npm install vue@next --save
npm install vue-router@4 --save
npm install vuex@next --save
npm install vue-loader@next --save-dev

# Or
vue upgrade --next

# Set Vue in Laravel here ...

npm install
npm ci 
npm run dev
```