// Vue router
import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/index.js'

import About from '../components/About.vue'
import Dashboard from '../components/panel/Dashboard.vue'
import Login from '../components/Login.vue'
import UserProfil from '../components/UserProfil.vue'
import Welcome from '../components/Welcome.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
	{ path: '/', component: Welcome, name: 'home' },
	{ path: '/about', component: About, name: 'about' },
	{ path: '/login', component: Login, name: 'login' },
	{ path: '/users/:id', component: UserProfil, name: 'user.profil' },
	// Authenticated only
	{ path: '/panel', component: Dashboard, name: 'panel', meta: { requiresAuth: true }},
	// Fallback
	{ path: '/:catchAll(.*)', component: NotFound, name: 'error.page' },
];

let router = createRouter({
	// history: VueRouter.createWebHashHistory(),
	history: createWebHistory(),
	routes,
	linkActiveClass: "rlink-active",
})

router.beforeEach((to, from) => {
	// to.meta.requiresAuth && !store.AuthModuleName.state.isAuthenticated
	if (to.meta.requiresAuth && !store.state.isAuthenticated) {
		// this route requires auth, check if logged in if not, redirect to login page.
		return {
			// Redirect to
			path: '/login',
			// add to query string, save the location we were at to come back later
			query: { redirected_from: to.fullPath },
		}
	}
})

export default router