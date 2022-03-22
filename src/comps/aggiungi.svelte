<script lang="ts">
	import Percorsatore from '../js/percorsi';
	import Canzoni from "../js/canzoni";
	import type { CanzoneInterfaccia } from "../js/canzoni";

	let canzone: CanzoneInterfaccia = {
		formato: 'chords-pro',
		plain: '',
		creato: new Date()
	};

	function salva() {
		canzone.creato = new Date();
		Canzoni.agg(canzone);
		Percorsatore.naviga('home');
	}
</script>

<svelte:head>
	<title>Aggiungi canzone</title>
</svelte:head>

<div class="content">
	<textarea bind:value={canzone.plain}></textarea>
	<button on:click={salva}>Salva</button>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
