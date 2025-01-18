<script>
    import { fly, fade } from "svelte/transition";
    import Card from "$lib/components/card.svelte";
    const { data } = $props();
    const set_size = data.set.cards.length - 1;
    let card_index = $state(0);
    let card = $derived(data.set.cards[card_index]);
    let flip = $state(false);
    let translate_in = $state(-200);

    function forward() {
        flip = false;
        translate_in = -200;
        card_index = (card_index == set_size) ? 0 : card_index + 1;
    }

    function backward() {
        flip = false;
        translate_in = 200;
        card_index = (card_index == 0) ? set_size : card_index - 1;
    }

    function onkeydown(event) {
        switch(event.keyCode) {
            case 37:
                backward();
                break;
            case 39:
                forward();
                break;
            case 32:
                flip = !flip;
                break;
        }
    }    
</script>

<h1 class="text-3xl font-bold text-center pt-8 pb-10">{data.set.name}</h1>
<div class="flex items-center justify-center py-8">
    <div>
        <div class="relative h-60 w-96 my-5">
            {#key card}
                <div class="absolute top-0" onclick={() => {flip = !flip}} in:fly={{ x: translate_in }} out:fly={{ x: -translate_in }}>
                    <Card flip={flip} card={card} />
                </div>
            {/key}
        </div>

        <div class="grid grid-cols-3 gap-x-3">
            <button onclick={backward} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                &lt;
            </button>
            <button onclick={() => {flip = !flip}} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                { flip ? "show" : "hide" }
            </button>
            <button onclick={forward} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                &gt;
            </button>
        </div>
    </div>
</div>

<svelte:window {onkeydown} />
