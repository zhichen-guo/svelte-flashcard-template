<script>
    let { flip, card } = $props();
</script>


<div class="h-60 w-96 my-5 [perspective:1000px]">
    <div class="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] {flip ? "[transform:rotateX(180deg)]" : ""}">
        <div class="absolute w-full h-full rounded-xl bg-gray-100 shadow-lg [backface-visibility:hidden]">
            <h1 class="h-full flex items-center justify-center">{card.front}</h1>
        </div>
        <div class="absolute w-full h-full rounded-xl bg-blue-200 shadow-lg [backface-visibility:hidden] [transform:rotateX(-180deg)]">
            <h1 class="h-full flex items-center justify-center">{card.back}</h1>
        </div>
    </div>
</div>