<script>
    import PlaceFeedback from '../components/PlaceFeedback.svelte';
    import FeedBackList from '../components/FeedBackList.svelte';

    let feedback = [
        {
            id: 1,
            rating: 8,
            text: "lorem ipsum je kent me niet fuck it works! Does it though?, lorem ipsum je kent me niet fuck it works! Does it though?, lorem ipsum je kent me niet fuck it works! Does it though?, lorem ipsum je kent me niet fuck it works! Does it though?,lorem ipsum je kent me niet fuck it works! Does it though?"
        },
        {
            id: 2,
            rating: 6.6,
            text: "lorem ipsum je kent me niet fuck it works! Does it though?"
        },
        {
            id: 3,
            rating: 4,
            text: "lorem ipsum je kent me niet fuck it works! Does it though?"
        },
        {
            id: 4,
            rating: 9,
            text: "lorem ipsum je kent me niet fuck it works! Does it though?"
        },
    ];

    const deleteFeedback = (e) => {
        const itemId = e.detail;

        feedback = feedback.filter((item) => item.id != itemId);
    }

    $: fbCount = feedback.length;
    $: fbAverage = feedback.reduce((a,b) => a + b.rating, 0) / feedback.length;
</script>

<div class="w-full min-h-screen bg-gray-900 px-2">
    <div class="w-full max-w-screen-sm pt-4 mx-auto flex flex-col gap-y-6">
        <PlaceFeedback />

        <div class="py-2 flex flex-row justify-between">
            <span class="px-3 rounded-full bg-indigo-500 uppercase text-md font-semibold text-white">{fbCount}</span>
            <span class="px-3 rounded-full bg-indigo-500 uppercase text-md font-semibold text-white">
                {#if (feedback.length > 0)} {fbAverage.toFixed(1)} {:else} - {/if}
            </span>
        </div>

        <FeedBackList {feedback} on:delete-feedback={deleteFeedback} />
    </div>
</div>