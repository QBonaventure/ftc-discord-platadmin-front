<template>
    <section class="guild-item" v-bind:id="guild.guild.id">
        <h1>{{guild.guild.name}}</h1>

    </section>
</template>

<script>
  export default {
    name: 'GuildItem',
    props: ['guild']
  }
</script>


<style lang="scss" scoped>
    $guilds-cards-per-row: 4;

    section.guild-item {
        border-bottom: 5px solid #f90;
        padding: 10px;
        box-shadow: 0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);
        background-color: #f9f9f6;
        float: left;
        width: calc(((100% - 10px) / #{$guilds-cards-per-row}) - 30px);

        min-width: 150px;
        min-height: 120px;
        margin: 10px 0 10px 10px;


        h1 {
            margin: 4px auto;
            padding: 0;
            text-align: center;
            color: #a20000;
            font-family: Roboto;
            background-color: transparent;
        }

        > span {
            display: inline-block;
            width: 100%;
        }

         span.joined-date {
            color: grey;
            font-size: 12px;
            text-align: center;
        }

        span.inactive-domain {

        }

        section {
            margin-top: 6px;

            h1 {
                display: inline;
            }

            .tag {
                color: grey;
            }
        }

        .active-domain {
          color: green;
        }

        .inactive-domain {
          color: red;
        }

    }
</style>
