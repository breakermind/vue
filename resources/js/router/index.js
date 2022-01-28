// Vue router
import { createRouter, createWebHistory } from 'vue-router'

import About from '../components/About.vue'
import Welcome from '../components/Welcome.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: Welcome
	},
	{
		path: '/about',
		name: 'about',
		component: About
	}
	// , { path: '/:catchAll(.*)', component: NotFoundComponent, name: 'NotFound' }
];

export default createRouter({
	history: createWebHistory(),
	routes
})