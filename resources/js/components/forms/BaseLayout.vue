<template>
	<div class="container">
		<header>
			<slot name="header"></slot>
		</header>
		<div class="content">
			<slot></slot>
		</div>
		<footer>
			<slot name="footer"></slot>
		</footer>
	</div>
</template>

<!--
<base-layout>
	<template v-slot:header>
		<h1>Here might be a page title</h1>
		<MenuComponent />
	</template>

	<template v-slot:default>
		<p>A paragraph for the main content.</p>
		<PageComponent />
	</template>

	<template v-slot:footer>
		<p>Here's some contact info</p>
		<FooterComponent />
	</template>
</base-layout>
-->
