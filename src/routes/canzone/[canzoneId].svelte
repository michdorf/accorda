<script>
import {page} from '$app/stores';
import Canzoni from '../../js/canzoni';
import ChordsViewer from "$lib/ChordsViewer.svelte";
import Autoscroll from '$lib/autoscroll.svelte';

let canzone = Canzoni.trova(parseInt($page.params.canzoneId));
</script>

{#if typeof canzone !== "undefined"}
<Autoscroll>
    <ChordsViewer canzone={canzone}></ChordsViewer>
</Autoscroll>
{/if}