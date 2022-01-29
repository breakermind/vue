<template>
	<div class="content">		
		<top-menu />

		<div class="info">{{ title }}</div>
		<p>
			Page does not exists.
		</p>
	</div>
</template>
<script>
import TopMenu from './forms/TopMenu.vue';

export default {
	components: {
		TopMenu
	},
	setup: () => ({
		title: 'Eror page 404'
	})
}
</script>