<script>
    import { writable } from 'svelte/store';
    import StarRating from './StarRating.svelte';

    let rating = 0;
    let scores = [10,9,8,7,6,5,4,3,2,1];

    const setScore = (e) => {
        let score = e.detail;
        rating = score;
    }

    
</script>


<div class="w-full flex flex-nowrap justify-center">
    <StarRating {scores} on:set-score={setScore}/>
</div>