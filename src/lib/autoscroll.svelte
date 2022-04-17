<script lang='ts'>
import { onDestroy } from "svelte";

let durationStr = '03:00';
let minDuration = 20; // minimum seconds
let duration = minDuration;
$: {
    const nums = durationStr.split(':').map((n) => parseInt(n));
    duration = nums[0] * 60 + nums[1];
}

let parentEl;
const smoothness = 200;
let paused = true;
let scrollpos = 0;
let userScrolls = false;
$: step = duration > minDuration ? Math.round((document.body.scrollHeight / (duration / (smoothness/1000))) * 100) / 100 : 2;
let h;

function scroller() {
    if (paused) {
        return;
    }
    
    if (!userScrolls) {
        scrollpos = window.scrollY + step;
        window.scrollTo({top: scrollpos});
        let bottomReached = (scrollpos + window.innerHeight) >= document.body.scrollHeight;
        if (bottomReached) {
            alert("Sluuut!");
            paused = true;
            return;
        }
    }

    h = setTimeout(scroller, smoothness);
}

let sh;
function onScroll() {
    const debounce = 300;
    clearTimeout(sh);
    userScrolls = true;
    sh = setTimeout(() => {
        userScrolls = false;
    }, debounce);
}

window.addEventListener('scroll', onScroll);

scroller();
function riprendi() {
    paused = !paused;
    if (paused) {
        clearTimeout(h);
    } else {
        scroller();
    }
}
function increment(amount) {
    let nums = durationStr.split(':').map((n) => parseInt(n));
    nums[1] = nums[1] + amount;
    if (nums[1] > 59) {
        nums[0] = nums[0] + amount;
        nums[1] = nums[1] - 60;
    }
    if (nums[0] > 23) {
        nums[0] = 0;
    }
    if ((nums[0] * 60 + nums[1]) <= minDuration) {
        nums[0] = Math.round(minDuration / 60);
        nums[1] = minDuration % 60;
    }
    durationStr = addZero(nums[0]) + ':' + addZero(nums[1]);
}

function addZero(num: number): string {
    return (num < 10 ? '0' : '') + num;
}

onDestroy(() => {
    clearTimeout(h);
    window.removeEventListener('scroll', onScroll);
})
</script>
<div bind:this={parentEl}>
    <div class='controls'>
        <input type="button" value="-" on:click={() => increment(-1)}/>
        <input type="time" placeholder="duration" bind:value={durationStr} on:blur={() => increment(0)}/>
        <input type="button" value="+" on:click={() => increment(1)}/>
        <button on:click={riprendi}>{paused ? 'Play' : 'Pause'}</button>
    </div>
    <slot></slot>
</div>
<style>
    .controls {
        position: sticky;
        top: 10px;
    }
</style>