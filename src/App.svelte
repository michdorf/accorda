<script lang="ts">
	import Header from "./comps/header/Header.svelte";
	import Percorsatore, {percorsoStore} from './js/percorsi';
	import Canzoni, { CanzoneInterfaccia, canzoniStore } from "./js/canzoni";
	import Aggiungi from "./comps/aggiungi.svelte";
	import ChordsViewer from "./comps/ChordsViewer.svelte";

	import Db from './js/db';

	$: titoli = $canzoniStore.map((canzone) => {
		let match = canzone.plain.match(/{title: ?(.+?)}/);
		return match !== null ? match[1] : canzone.plain.split("\n")[0] || "Ukendt titel";
	});

	let canzoneCorrente: CanzoneInterfaccia = null;
	$: uri = $percorsoStore.uri;
	$: params = $percorsoStore.params;
	$: {
		if (uri == 'canzone') {
			canzoneCorrente = Canzoni.trova(params.canzoneId);
		} else {
			canzoneCorrente = null;
		}
	}

	function selezionaCanzone(i: number) {
		Percorsatore.naviga('canzone', {canzoneId: i});
	}
	// export let name: string;
</script>

<svelte:head>
	<title>Canzoni</title>
</svelte:head>

<Header></Header>

<main>
	<h1>Accorda</h1>
	{#if uri === 'home' || uri === 'canzoni'}
		{#if titoli.length > 0}
			{#each titoli as titolo, i}
				<button on:click={() => selezionaCanzone(i)}>{titolo}</button><br/>
			{/each}
		{:else}
			<h2 style="font-weight: bold;">Ingen sange...</h2>
		{/if}
	{:else if uri === 'aggiungi'}
		<Aggiungi></Aggiungi>
	{:else if uri === 'canzone' && canzoneCorrente !== null}
		<ChordsViewer canzone={canzoneCorrente}></ChordsViewer>
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>