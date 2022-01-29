// Vue router
import { createRouter, createWebHistory } from 'vue-router'

import About from '../components/About.vue'
import UserProfil from '../components/UserProfil.vue'
import Welcome from '../components/Welcome.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
	{ path: '/', component: Welcome, name: 'home' },
	{ path: '/about', component: About, name: 'about' },
	{ path: '/users/:id', component: UserProfil, name: 'user.profil' },
	{ path: '/:catchAll(.*)', component: NotFound, name: 'error.page' },
];

export default createRouter({
	// history: VueRouter.createWebHashHistory(),
	history: createWebHistory(),
	routes,
	linkActiveClass: "link-active",
})