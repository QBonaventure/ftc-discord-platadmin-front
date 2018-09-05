<template>
    <div>
        <nav-bar />
        <slot />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import NavBar from "./NavBar.vue";

    export default Vue.extend({
        components: {
            NavBar,
        }
    })
</script>
