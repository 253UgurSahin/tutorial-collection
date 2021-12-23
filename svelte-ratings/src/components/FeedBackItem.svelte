<script>
    import { createEventDispatcher } from 'svelte';
    export let item;

    const dispatch = createEventDispatcher();

    const handleDelete = (itemId) => {
        dispatch('delete-feedback', itemId);
    }

</script>

<div class="relative pl-2 pt-1">    
    <span class="absolute left-0 top-0 flex rounded-full bg-indigo-500 uppercase w-10 h-10 text-md font-bold mr-3 flex justify-center items-center z-10 text-white">{item.rating}</span>
    <div class="w-full relative pl-10 pr-6 p-2 bg-indigo-800 items-center text-indigo-100 leading-none rounded-xl flex flex-wrap">
        <span class="absolute right-0 top-0 p-2 font-semibold cursor-pointer" on:click={() => handleDelete(item.id)}>X</span>
        <span class="font-semibold mr-2 text-left flex-auto">{item.text}</span>
    </div>
</div>