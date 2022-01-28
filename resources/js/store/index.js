import Vuex from 'vuex'

export default createStore({
	state () {
		return {
			count: 0,
			answer: '',
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
		}
	},
	actions: {
		async getAnswer(context) {
			const res = await fetch("https://yesno.wtf/api");
			const answer = await res.json();
			context.commit("setAnswer", answer);
		}
	}
})