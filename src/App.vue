<!-- src/App.vue -->
<template>
  <div id="app">
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import GuildsList from "./components/GuildsList.vue";

export default Vue.extend({
    name: 'app',
    components: {
      GuildsList
    }
});
</script>