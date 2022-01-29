export default {
	components: {
		//
	},
	data() {
		return {
			//
		}
	},
	mounted() {
		console.log('Application has been mounted!!!'),
		this.$store.dispatch("getAnswer")
		// Check is user authenticated here !!!
	},
	computed: {		
		userId() {
			// We will see what `params` is shortly
			return this.$route.params.id
		},
		username() {
			// We will see what `params` is shortly
			return this.$route.params.username
		}
	},
	methods: {
		//
	},
	filters: {
		currencyDecimal (value) {
			return value.toFixed(2)
		}
	}
}