<template>
    <div>
        <router-link to="/" id="logo">
            <img src="https://cdn.fearthec.io/ff491c85ad3e3aeb20723e6448ac2e2b/images/mark.png" />
        </router-link>
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
