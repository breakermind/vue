<template>
	<div class="content">
		<div class="info" v-bind:title="title">{{ title }}</div>
		<p>
			Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>

		<p>User (:id) route param: {{ $route.params.id }} </p>
	</div>
</template>
<script>
export default {
	data() {
		return {
			title: 'Profil component from Vue 3'
		}
	},
	mounted() {
		console.log('UserProfil component mounted.')
	},
	methods: {
		//
	},
	computed: {
		//
	}
}
</script>