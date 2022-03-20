<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Canzoni from '../js/canzoni';
</script>

<svelte:head>
	<title>Canzoni</title>
</svelte:head>

<section>
	<h1>
		Chordspro
	</h1>

	{#each Canzoni.canzoni as canzone, i}
		<a href={'/canzone/' + i}>{canzone.plain.substr(0,40)}</a>
	{/each}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}
</style>
