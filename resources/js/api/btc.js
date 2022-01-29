// Sample data
axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
.then(response => {
	this.info = response.data.bpi
})
.catch(error => {
	console.log(error)
	this.errored = true
})
.finally(() => this.loading = false)