<template>
    <section class="guild-item" v-bind:id="guild.guild.id">
        <h1>{{guild.guild.name}}</h1>
        <span class="joined-date">{{guild.guild.joinedDate | formatDate }}</span>
        <section class="guild-domain">
            <h1>Domain</h1>
        </section>
        <input type="checkbox" name="isActive" v-model="guild.guild.isActive">
        <label for="isActive">Active</label>
        <section v-bind:id="guild.guild.owner.id" class="guild-owner">
            <h1>Owner</h1>
            <span>{{guild.guild.owner.username}}<span class="tag">#{{guild.guild.owner.tag}}</span></span>
            <span>{{guild.guild.owner.email}}</span>
        </section>
    </section>
</template>

<script>
  export default {
    name: 'GuildItem',
    props: ['guild']
  }
</script>


<style lang="scss" scoped>
    section.guild-item {
        border-bottom: 5px solid #f90;
        padding: 10px;
        box-shadow: 0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);
        background-color: #f9f9f6;
        float: left;
        width: calc(440px + ((100% - 1320px) / 2.75 * 1));
        min-width: 150px;
        height: auto;
        margin: 10px;


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

        section {
            margin-top: 6px;

            h1 {
                display: inline;
            }

            .tag {
                color: grey;
            }
        }

    }
</style>