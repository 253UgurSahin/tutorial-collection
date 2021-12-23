<script>
    import FeedBackItem from './FeedBackItem.svelte';
    export let feedback = [];

</script>

{#each feedback as fb (fb.id)}
    <FeedBackItem item={fb} on:delete-feedback />
{/each}