<template>
  <section>
    <h1>{{guild.name}}</h1>

    <section class="guild-owner">
      <h1>Owner</h1>
      <span>Name: {{guild.owner.username}}</span>
      <span>Id: {{guild.owner.id}}</span>
      <span>Joined date: {{guild.joinedDate  | formatDate }}</span>
    </section>

    <section class="guild-domain">
      <h1>Domain</h1>
      <span v-if="guild.guildDomain">URI: <input type="text" v-model="guild.guildDomain.domain" /></span>
      <span v-else>URI: -</span>
      <span v-if="guild.guildDomain">Activated: <toggle-button :sync="true" v-model="guild.guildDomain.isActive" @change="activationUpdate" /></span>

    </section>

    <section id="guild-edition">

    </section>
    <save-bar v-bind:save="save" v-bind:reset="reset" v-bind:diff="changes" />

  </section>
</template>

<script lang="ts">
  import axios from "axios";
  import Vue from 'vue';
  import ToggleButton from 'vue-js-toggle-button';
  import SaveBar from '../layouts/SaveBar.vue';
  import diff from 'deep-diff';
  import { GUILD_EDITION_QUERY, GUILD_EDITION_UPDATE } from '../constants/graphql';
  import GuildEdition from '../components/GuildEdition.vue';

  Vue.use(ToggleButton);

  type GuildDomain = {
    domain: string
    isActive: boolean
  }

  type GuildOwner = {
    id: number
    username: string
    tag: string
    email: string
  }

  type Guild = {
    id: number
    name: string
    joinedDate: string
    guildDomain: GuildDomain
    owner: GuildOwner
  }

  export default Vue.extend({
    computed: {
      changes: function() {
        return diff(this.guild, this.originalGuild) || [];
      }
    },
    data() {
        return {
          guild: <Guild> {},
          originalGuild: <Guild> {},
        }
    },
    components: {
      GuildEdition,
      SaveBar
    },
    created() {
      axios.post("http://graphql.fearthec.test/graphql", {
        query: GUILD_EDITION_QUERY,
        variables: { guildId: this.$route.params.id }
      }).then(result => {
        this.guild = result.data.data.guildById;
        this.updateOriginalGuildValues();
      }, error => {
        console.error(error);
      });
    },
    methods: {
      activationUpdate: function(event) {
        this.guild.guildDomain.isActive = event.value;
      },
      save(event) {
        axios.post("http://graphql.fearthec.test/graphql",
          {
            query: GUILD_EDITION_UPDATE,
            variables: {
              guildId: this.guild.id,
              guildDomainPatch: {
                isActive: this.guild.guildDomain.isActive,
                domain: this.guild.guildDomain.domain
              }
            }
          }
        ).then(result => {
          console.log(result);
          this.updateOriginalGuildValues();
        }, error => {
          console.error(error)
        });
      },
      reset() { this.resetGuildValues(); },
      updateOriginalGuildValues() { this.originalGuild = { ...this.guild, guildDomain: { ...this.guild.guildDomain}, owner: { ...this.guild.owner}}; },
      resetGuildValues() { this.guild = { ...this.originalGuild, guildDomain: { ...this.originalGuild.guildDomain}, owner: { ...this.originalGuild.owner}}; },
    }
  })
</script>


<style lang="scss" scoped>
  @import '../layouts/var';

  h1 {
    color: $ftc-red;
  }

  section section {
    width : 46%;
    float: left;
    margin: 2%;
    background-color: $section-white;
    box-shadow: $box-shadow;

    span {
      float: left;
      clear: both;
    }
  }

</style>
