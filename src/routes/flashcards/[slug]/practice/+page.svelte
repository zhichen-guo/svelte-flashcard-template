<script>
    let { data } = $props();

    function shuffle(array) {
        var m = array.length, t, i;

        // While there remain elements to shuffle…
        while (m) {

            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }

        return array;
    }

    const shiffled_set = shuffle(data.set.cards);
</script>

<ul>
    {#each data.set.cards as { front, back }}
        <li>{front}: {back}</li>
    {/each}
</ul>