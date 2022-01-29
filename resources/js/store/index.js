import { createStore, createLogger } from 'vuex'
import router from '../router/index.js'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
	state () {
		return {
			count: 0,
			answer: '',
			isAuthenticated: false,
		}
	},
	mutations: {
		increment (state) {
			state.count++
		},
		incrementAmount (state, amount) {
			state.count += amount
		},
		setAnswer(state, answer) {
			state.answer = answer;
		},
		setAuthenticated(state) {
			state.isAuthenticated = true
		},
		setNotAuthenticated(state) {
			state.isAuthenticated = false
		}
	},
	// Actions in component:
	// this.$store.dispatch('isLoggedIn')
	actions: {
		async getAnswer(context) {
			const res = await fetch("https://yesno.wtf/api");
			const answer = await res.json();
			context.commit("setAnswer", answer);
		},
		isLoggedIn(context) {
			if (context.state.isAuthenticated) {
				console.log("Logged user")
				router.push('/panel')
			} else {
				console.log("Not logged user")
				router.push('/login')
			}
		}
	},
	getters: {
		freshAnswer: state => {
			return state.answer.answer
		},
		doneTodos: state => {
			// return state.todos.filter(todo => todo.done)
		},
		doneTodosCount: (state, getters) => {
			// return getters.doneTodos.length
		},
		doneTodosNotId: state => (id) => {
			// return state.todos.filter((t) => { return t.id !== id })
		},
	},
	// Plugins, logs
	plugins: debug ? [createLogger()] : [],
	// Modules
	modules: {},
	// Debug mode
	strict: debug
})