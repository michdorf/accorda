<script lang="ts">
import Canzoni from "../js/canzoni";
import type { CanzoneInterfaccia } from "../js/canzoni";

	let canzone: CanzoneInterfaccia = {
		formato: 'chords-pro',
		contenuto: '',
		creato: new Date()
	};

	function salva() {
		canzone.creato = new Date();
		Canzoni.agg(canzone);
		alert("Done!");
	}
</script>

<svelte:head>
	<title>Aggiungi canzone</title>
</svelte:head>

<div class="content">
	<textarea bind:value={canzone.contenuto}></textarea>
	<button on:click={salva}>Salva</button>
</div>

<style>
	.content {
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	textarea {
		flex: 1;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
	}
</style>
