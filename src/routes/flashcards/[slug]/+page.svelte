<script>
    let { data } = $props();
</script>

<ul>
    {#each data.flashcards.forward as { front, back }}
        <li>{front}: {back}</li>
    {/each}
</ul>