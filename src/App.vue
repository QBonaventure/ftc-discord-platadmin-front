<!-- src/App.vue -->
<template>
  <div id="app">
    
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>


<script lang="ts">
    import Vue from "vue";
    const default_layout = "default";

    export default Vue.extend({
        computed: {
            layout() {
              console.log(this);
                return (this.$route.meta.layout || default_layout) + '-layout';
                
            }
        },
        created() {
          // nothing defined here (when this.$route.path is other than "/")
          console.log(this.$route, this.$route.meta.layout);
        },
        updated() {
          // something defined here whatever the this.$route.path
          console.log(this.$route, this.$route.meta.layout);
        }
    });
</script>


<style lang="scss">
    @import 'layouts/var.scss';
    
    h1 {
      color: $ftc-red;
    }
</style>
