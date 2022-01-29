// Import axios
require('./bootstrap');

import { createApp } from 'vue'
import options from './options.js'
import router from './router/index.js'

// Options
const app = createApp(options);

// App mount
app.use(router)
app.mount('#app')

// Component template
// import HelloWorld from './components/Welcome.vue';
// Add component
// app.component('hello-world', HelloWorld)