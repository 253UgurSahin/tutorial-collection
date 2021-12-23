<template lang="">
    <nav class="w-full py-2 bg-gray-800 border-b-4 border-purple sticky top-0 z-10">
        <div class="max-w-screen-md mx-auto px-2">
            <div class="text-white flex flex-row gap-12">
               <a v-for="(link, i) in links" :key="i" @click="setCurrentPath(link.name)" :href="link.url">
                   {{ link.name }}
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    props: ["navItems", "customClass"],
    data() {
        return {
            currentPath: "",
            links: this.navItems,
        }
    },

    methods: {
        setCurrentPath(path) {
            this.currentPath = path;
        },
    },
}
</script>

// :class="{ 'text-lightgreen transition ease-in-out': currentPath == link.name }"