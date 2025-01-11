<script>
    let { data } = $props();
</script>

<ul>
    {#each data.flashcards as { front, back }}
        <li>{front}: {back}</li>
    {/each}
</ul>