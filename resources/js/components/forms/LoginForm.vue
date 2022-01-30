<template>
	<form
		id="loginForm"
		class="login-form"
		@submit.prevent="onSubmit"
	>
		<div class="form-title" :class="$attrs.class">{{ title }}</div>
		
		<error v-show="error != ''"> {{ error }} </error>

		<input v-model="email" placeholder="Email address">
		<input v-model="password" type="password" placeholder="Password">

		<input type="submit" value="Login">
	</form>
</template>
<script>
export default {
	props: ['title'],
	emits: ['login-submited'],
	data() {
		return {			
			email: '',
			password: '',
			error: '',
		}
	},
	methods: {
		onSubmit() {
			let credentials = {
				email: this.email,
				pass: this.password,
			}

			let form = document.getElementById('loginForm');
			let formData = new FormData(form);

			console.log("Form data onSubmit child component event", credentials)

			// Login not empty (sample)
			if(this.email != '' && this.pass != '') {
				// Emit event
				this.$emit('login-submited', credentials)
			} else {
				this.error = "Form can not be empty!"
			}
		},
		// Get store from component
		increment() {
			this.$store.commit('increment')
			console.log(this.$store.state.count)
		}
	}
}
</script>