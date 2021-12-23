<script>
    import { createEventDispatcher } from 'svelte';
    export let scores= [];

    const dispatch = createEventDispatcher();

    const setScore = (chosenScore) => {
        dispatch('set-score', chosenScore);
    }

</script>

<div class="">
    <fieldset class="rating flex flex-row-reverse"> 
        {#each scores as score}
            <input on:click={() => setScore(score)} type="radio" id={`star${score}`} name="rating" value={score} /><label class="full" for={`star${score}`} title={score}></label>
            <input on:click={() => setScore(score-.5)} type="radio" id={`star${score}half`} name="rating" value={score-.5} /><label class="half" for={`star${score}half`} title={score-.5}></label> 
        {/each}
    </fieldset>
</div>

<style>
@import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);


.rating > input { display: none; } 
.rating > label:before { 
    margin: 5px;
    font-size: 3em;
    font-family: FontAwesome;
    display: inline-block;
    content: "\f005";
}

.rating > .half:before { 
    content: "\f089";
    position: absolute;
}

.rating > label { 
    color: #ddd; 
    float: right; 
}

/***** CSS Magic to Highlight Stars on Hover *****/

.rating > input:checked ~ label, /* show gold star when clicked */
.rating:not(:checked) > label:hover, /* hover current star */
.rating:not(:checked) > label:hover ~ label { color: #FFD700;  } /* hover previous stars in list */

.rating > input:checked + label:hover, /* hover current star when changing rating */
.rating > input:checked ~ label:hover,
.rating > label:hover ~ input:checked ~ label, /* lighten current selection */
.rating > input:checked ~ label:hover ~ label { color: #FFED85;  } 
</style>