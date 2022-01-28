// Import axios
require('./bootstrap');

// Vue without router
import { createApp } from 'vue'
// Component template
import HelloWorld from './components/Welcome.vue';
// App
const app = createApp({
	data() {
		return {
			counter: 0,
			info: null,
			loading: true,
			errored: false,
			isAuthenticated: false,
		}
	}
});
// Create component
app.component('hello-world', HelloWorld)
// Mount
app.mount('#app')