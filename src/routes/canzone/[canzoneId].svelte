<script>
import {page} from '$app/stores';
import Canzoni from '../../js/canzoni';
import ChordsViewer from "$lib/ChordsViewer.svelte";

let canzone = Canzoni.trova(parseInt($page.params.canzoneId));
</script>

{#if typeof canzone !== "undefined"}
<ChordsViewer canzone={canzone}></ChordsViewer>
{/if}