<!-- src/components/GuildsList.vue -->
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
import Api from '../services/Api';
import Vue from 'vue';
import { ALL_GUILDS_QUERY } from '../constants/graphql.js';
import GuildItem from './GuildItem.vue';
import GuildService from '../services/GuildService.js';

export default Vue.extend({
    name: 'GuildsList',
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
              {query: "query AllGuilds { allGuilds { edges { node { id name isActive } } } }"}
            ).then(result => {
              console.log(result.data.data.allGuilds.edges)
                this.allGuilds = result.data.data.allGuilds.edges;
                result.data.data.allGuilds.edges
            }, error => {
                console.error(error);
            });
        },
    methods: {
      async getGuilds () {
        var response = await GuildService.getGuilds()
        console.log(response)
        this.allGuilds = response.data
      }
    }
})
</script>
