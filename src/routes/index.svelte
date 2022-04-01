<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { canzoniStore } from '../js/canzoni';

	$: titoli = $canzoniStore.map((canzone) => {
		let match = canzone.plain.match(/{title: ?(.+?)}/);
		return match !== null ? match[1] : canzone.plain.split("\n")[0] || "Ukendt titel";
	});
</script>

<svelte:head>
	<title>Canzoni</title>
</svelte:head>

<section>
	<h1>
		Chordspro
	</h1>

	{#each titoli as titolo, i}
		<a href={'/canzone/' + i}>{titolo}</a>
	{/each}
	{#if titoli.length < 1}
		<h2 style="font-weight: bold;">Ingen sange...</h2>
	{/if}
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
