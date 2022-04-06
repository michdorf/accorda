<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import '../css/chordsheet.css';
</script>

<div class="layout">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		
	</footer>
</div>

<style>
	div.layout {
		height: 100vh;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
	}
	main {
		flex: 1;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
	}
</style>
