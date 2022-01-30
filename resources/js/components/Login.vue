<template>
	<div class="content">
		<top-menu />

		<!-- Component with event -->
		<login-form @login-submited="onLoginUser" :title="title"/>
	</div>
</template>
<script>
import { defineAsyncComponent } from 'vue'
// import TopMenu from './forms/TopMenu.vue';
// import LoginForm from './forms/LoginForm.vue';

export default {
	components: {
		TopMenu: defineAsyncComponent(() =>
      		import('./forms/TopMenu.vue')
    	),
		LoginForm: defineAsyncComponent(() =>
      		import('./forms/LoginForm.vue')
    	)
	},
	data() {
		return {
			title: 'Sign In'
		}
	},
	methods: {
		onLoginUser(data) {
			alert("Parent catch event from child component: " + JSON.stringify(data))
			console.log("Parent catch data from child component", data)
			// Logged user (state mutation)
			this.$store.commit('setAuthenticated')
			// Redirect to /panel
			this.$store.dispatch('isLoggedIn')
		},
	}
}
</script>