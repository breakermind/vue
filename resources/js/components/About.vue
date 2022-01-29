<template>
	<div class="content">		
		<div class="info" v-bind:title="title">{{ title }}</div>
		<p>
			Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
		</p>

		<router-link to="/" class="rlink">Back to Home</router-link>		
	</div>
</template>
<script>
export default {
	data() {
		return {			
			title: 'About component from Vue 3'
		}
	},
	mounted() {	
		console.log("About component mounted.")
	},
	methods: {
		//
	},
	computed: {
		//
	}
}
</script>
