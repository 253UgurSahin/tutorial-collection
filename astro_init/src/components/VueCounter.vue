<template lang="">
     <div className="container flex justify-center gap-3 items-center mt-10">
        <p :class="btnClass" @click="val -= 1">-</p>
        <p :class="valClass">{{ val }}</p>
        <p :class="btnClass" @click="val += 1">+</p>
    </div>
</template>

<script>
export default {
    name: "vue counter",

    data() {
        return {
            val: 0,
            btnClass: "bg-blue-600 text-white text-2xl py-3 px-5 rounded cursor-pointer select-none",
            valClass: "text-2xl font-bold px-5 select-none"
        }
    },
}
</script>

<style lang="scss" scoped>
    .container {
        background: purple;
    }
</style>