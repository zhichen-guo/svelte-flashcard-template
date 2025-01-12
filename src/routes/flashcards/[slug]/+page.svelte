<script>
    let { data } = $props();
</script>

<ul>
    {#each data.set.cards as { front, back }}
        <li>{front}: {back}</li>
    {/each}
</ul>