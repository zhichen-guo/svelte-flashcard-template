<script>
    let { data } = $props();
</script>

<h1 class="text-3xl font-bold underline">Sets</h1>
<ul class="list-disc list-inside">
    {#each data.sets as { name, slug }}
        <li><a href="/flashcards/{slug}">{name}</a></li>
    {/each}
</ul>