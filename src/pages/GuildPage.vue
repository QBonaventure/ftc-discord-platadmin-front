<template>
  <section>
    <h1>Guilds List</h1>

  </section>
</template>

<script lang="ts">
  import axios from "axios";
  import Vue from 'vue';
  import { GUILD_EDITION_QUERY } from '../constants/graphql';
  import GuildEdition from '../components/GuildEdition.vue';

  export default Vue.extend({
      data() {
          return {
            guild: []
          }
      },
      components: {
        GuildEdition
      },
      mounted() {
          axios.post("http://graphql.fearthec.test/graphql",
            {query: GUILD_EDITION_QUERY}
          ).then(result => {
              this.guild = result.data.data.allGuilds.edges;
          }, error => {
              console.error(error);
          });
      }
  })
</script>


<style lang="scss">

</style>
