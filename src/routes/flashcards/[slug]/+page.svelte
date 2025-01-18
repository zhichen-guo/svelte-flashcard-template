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
<!-- <div class="flex flex-wrap justify-around gap-10 px-10">
    {#each data.set.cards as { front, back }}
        <div class="h-56 max-w-md min-w-96 basis-1/4 group [perspective:1000px]">
            <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0 h-full w-full rounded-xl bg-gray-100 [backface-visibility:hidden]">
                    <div class="relative h-full w-full">
                        <h1 class="h-full flex items-center justify-center text-5xl text-center">{front}</h1>
                    </div>
                </div>

                <div class="absolute inset-0 h-full w-full rounded-xl bg-gray-100 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div class="relative h-full w-full">
                        <h1 class="h-full flex items-center justify-center text-5xl text-center">{back}</h1>
                    </div>
                </div>
            </div>
        </div>
    {/each}
</div> -->

<!-- <div class="h-56 max-w-md min-w-96 basis-1/4 group [perspective:1000px]">
    <div class="relative h-full w-full bg-gray-100 rounded-lg drop-shadow-md transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <h1 class="h-full flex items-center justify-center [backface-visibility:hidden]">{front}</h1>
        <h1 class="h-full flex items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">{back}</h1>
    </div>
</div>

<ul>
    {#each data.set.cards as { front, back }}
        <li>{front}: {back}</li>
    {/each}
</ul> -->