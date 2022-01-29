<template>
	<div class="top-menu">
		<router-link to="/" class="rlink">Home</router-link>
		<router-link to="/about" class="rlink">About</router-link>
		<router-link to="/users/123" class="rlink">User profil</router-link>
		
		<span v-if="!this.$store.state.isAuthenticated">
			<router-link to="/login" class="rlink">Login</router-link>
		</span>

		<span v-if="this.$store.state.isAuthenticated">
			<router-link to="/panel" class="rlink">Panel</router-link>
		</span>

		<span v-if="this.$store.state.isAuthenticated">
			<button @click="logout" class="rlink logout-btn">Logout</button>
		</span>
		
	</div>
</template>
<script>
export default {
	data() {
		return {}
	},
	methods: {		
		// Logout user
		logout() {
			// Logged user (state mutation)
			this.$store.commit('setNotAuthenticated')
			// Redirect to /panel
			this.$store.dispatch('isLoggedIn')
		}
	},	
}
</script>