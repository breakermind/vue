<template>
	<div class="content">
		<top-menu />

		<div class="info" v-bind:title="title">{{ title }} </div>
		<p>
			Happy day? {{ this.$store.getters.freshAnswer }} :)
		</p>

		<p>Counter: {{ counter }}</p>

		<p>Counter x 2: {{ multiplyCounter }}</p>
		
		<button @click="getCounter()">Display counter</button>
	</div>
</template>
<script>
import TopMenu from './forms/TopMenu.vue';

export default {
	components: {
		TopMenu
	},
	data() {
		return {
			counter: 0,
			title: 'Welcome component from Vue 3'
		}
	},
	mounted() {
		console.log("Welcome component mounted."),
		setInterval(() => {
			this.counter++
		}, 1000)
	},
	methods: {
		getCounter() {
			alert(this.counter)
		}
	},
	computed: {
		multiplyCounter () {
			return this.counter * 2
		}
	}
}
</script>
