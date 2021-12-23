<template>
    <div class="div">
        <button @click="val++">+1</button>
        <button @click="val--">-1</button>
        <p>current value: {{ val }}</p>
    </div>
</template>

<script>
export default {
    name: 'Jos',

    data() {
        return {
            val: 0
        }
    }
}
</script>

<style lang="scss" scoped>
.div {
    display: flex;
    flex-direction: column;
}
</style>