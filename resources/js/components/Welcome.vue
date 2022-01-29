<template>
	<div class="content">
		<div class="info" v-bind:title="title">{{ title }}</div>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		</p>

		<p>Counter: {{ counter }}</p>

		<p>Counter x 2: {{ multiplyCounter }}</p>
		
		<button @click="getCounter()">Display counter</button>
	</div>
</template>
<script>
export default {
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
