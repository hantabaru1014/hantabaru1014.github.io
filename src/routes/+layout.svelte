<script lang="ts">
	import '../app.css';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
</script>

<div class="flex min-h-screen flex-col">
	<Header />

	<!-- メインコンテンツ -->
	<main class="mx-auto my-3 max-w-6xl flex-grow px-2">
		<slot></slot>
	</main>

	<Footer />
</div>
