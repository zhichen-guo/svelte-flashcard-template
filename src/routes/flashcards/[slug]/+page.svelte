<script>
    let { data } = $props();
</script>

<h1 class="text-3xl font-bold text-center pt-8 pb-10">{data.set.name}</h1>
<div class="flex flex-wrap justify-around gap-10 px-10">
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
</div>

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