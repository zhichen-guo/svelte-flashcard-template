<script>
    let { data } = $props();
</script>

<h1>Sets</h1>
<ul>
    {#each data.sets as { name, slug }}
        <li><a href="/flashcards/{slug}">{name}</a></li>
    {/each}
</ul>