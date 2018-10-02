<template>
  <div id="save-bar">
    <div v-if="diff.length > 0">
      <button id="save-diff" @click="save">Save</button>
    <button id="cancel-diff" @click="reset">Cancel</button>
    </div>
  </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
      props: {
        save: Function,
        reset: Function,
        diff: {
          type: Array,
          required: true,
          default: []
        }
      },
      created() {
      },
      methods: {
        hideBar() {
          console.log("klll")
        }
      }
    })
</script>


<style lang="scss">
    @import 'var';

    #save-bar {
      div {
        position: fixed;
        float: left;
        bottom: 0;
        width: 85%;
        height: 46px;
        background-color: lightgrey;
        border-top: 1px solid grey
      }

      button {
        font-size: 16px;
        font-weight: bold;
        float: right;
        border: none;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        padding: 6px;
        margin: 8px;
      }

      #save-diff {
        color: white;
        background-color: green;
      }

      #cancel-diff {

      }
    }
</style>
