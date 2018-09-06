<template>
    <div class="wrapper">
        <div id="header">
            <router-link to="/" id="logo">
                <img src="https://cdn.fearthec.io/ff491c85ad3e3aeb20723e6448ac2e2b/images/mark.png" />
            </router-link>
            <nav-bar />
        </div>
        <main>
            <slot />
        </main>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import NavBar from "./NavBar.vue";

    export default Vue.extend({
        components: {
            NavBar
        }
    })
</script>


<style lang="scss">
    @import 'var';

    main {
        width: 85%;
        min-height: calc(100% - #{$header-height});
        display: inline-block;
        height: auto;
        margin-top: 55px;
    }
</style>

<style lang="scss" scoped>
    div.wrapper {
        height: 100%;
    }
</style>


