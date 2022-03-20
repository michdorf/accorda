<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Canzoni from '../js/canzoni';

	$: titoli = Canzoni.canzoni.map((canzone) => {
		let match = canzone.plain.match(/{title: ?(.+?)}/);
		return match.length >= 1 ? match[1] : "Ukendt titel";
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
