<template>
  <section>
    <h1>Guilds List</h1>

    <guild-item
      v-for="guild in allGuilds"
      :key="guild.id"
      :name="guild.name"
      :guild="guild">
    </guild-item>
  </section>
</template>

<script lang="ts">
import axios from "axios";
import Vue from 'vue';
import { ALL_GUILDS_QUERY } from '../constants/graphql';
import GuildItem from '../components/GuildItem.vue';

export default Vue.extend({
    // name: 'GuildsHome',
    data() {
        return {
          allGuilds: []
        }
    },
    components: {
      GuildItem
    },
        mounted() {
            axios.post("https://graphql.fearthec.io/graphql",
              {query: ALL_GUILDS_QUERY}
            ).then(result => {
                this.allGuilds = result.data.data.allGuilds.edges;
                result.data.data.allGuilds.edges
            }, error => {
                console.error(error);
            });
        }
})
</script>


<style lang="scss">
$blah: #ece5e5;

  body {
    margin: 0;
  }

  h1 {
    text-align: center;
    background-color: #222222;
    color: #ece5e5;
    margin: 0 0 10px;
    padding: 15px 0;
    color: $blah;
  }
</style>