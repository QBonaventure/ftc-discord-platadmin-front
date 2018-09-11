<!-- src/App.vue -->
<template>
  <div id="app">
    
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>


<script lang="ts">
    import Vue from "vue";
    import VueSession from 'vue-session';
    const default_layout = "default";

    Vue.use(VueSession);

    export default Vue.extend({
        computed: {
            layout() {
                return default_layout + '-layout';
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
    @import 'layouts/var';

    html, body, main, div#app {
      height: 100%;
      width: 100%;
      margin: 0;
    }
    
    div#app > div.wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
      }


    div#header {
      background-color: $ftc-white;
        width: 100%;
        height: $header-height;
        float: left;
        position: absolute;

        a, nav {
          font-size: 20px;
          float: left;
          color: $ftc-red;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }

          &:visited {
            color: $ftc-red;
          }

          ul {
              list-style-type: none;
              height: calc(#{$header-height} - 10px);
              padding: 5px;
              margin: 0;

              li {
                float: left;
                height: calc(100% - 20px);
                padding: 10px;
                border-left: 1px solid $ftc-light-grey;
             }
          }
        }
    }

    a#logo {
        img {
            width: 150px;
        }
    }

    

    h1 {
      text-align: center;
      color: $ftc-dark-grey;
      margin: 0 0 10px;
      padding: 15px 0;
    }
</style>
