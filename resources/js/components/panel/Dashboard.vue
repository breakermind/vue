<template>
	<div class="content">
		<top-menu />

		<div class="info" v-bind:title="title">{{ title }}</div>		
		
		<p>User route id: {{ $route.params.id }} </p>
		<p>Store counter {{ $store.state.count }} x 2 = {{ getMultipleCount }}</p>

		<button @click="getCounter()">Display store counter</button>
		<button @click="incraseCounter()">Incrase store counter</button>

		<!-- <span v-if="this.$store.state.isAuthenticated">
			<button @click="logout" class="logout-btn">Logout</button>
		</span> -->

	</div>
</template>
<script>
import TopMenu from '../forms/TopMenu.vue';

export default {
	components: {
		TopMenu
	},
	data() {
		return {
			title: 'User Dashboard'
		}
	},
	mounted() {
		this.$store.dispatch('isLoggedIn')
	},
	methods: {
		// Get store from component
		getCounter() {
			alert(this.$store.state.count)
		},
		// Commit method from store
		incraseCounter() {
			this.$store.commit('increment')
		},
		// Logout user
		logout() {
			// Logged user (state mutation)
			this.$store.commit('setNotAuthenticated')
			// Redirect to /panel
			this.$store.dispatch('isLoggedIn')
		}
	},	
	computed: {
		getMultipleCount () {
			return this.$store.state.count * 2
		},
	}
}
</script>