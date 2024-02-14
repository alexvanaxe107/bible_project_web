<script>
    import { onMount } from 'svelte';
    export let data;

</script>

<h1>{data.versicles[0].books.name}</h1>
<h2>Chapter {data.versicles[0].chapter}</h2>

{#each data.versicles as versicle }
    <div>{versicle.verse}:
    {versicle.text}</div>
{/each}
