// Import axios
require('./bootstrap');

// Vue with router and store
import { createApp } from 'vue'
import options from './options.js'
import store from './store/index.js'
import router from './router/index.js'

// Import component
// import HelloWorld from './components/Welcome.vue';

// App options
const app = createApp(options);

// Add component
// app.component('hello-world', HelloWorld)

// App mount
app.use(store)
app.use(router)
app.mount('#app')