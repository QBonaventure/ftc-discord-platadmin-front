<template>
    <section class="guild-item" v-bind:id="guild.node.id">
        <h1>{{guild.node.name}}</h1>
        <input type="checkbox" name="isActive" v-model="guild.node.isActive">
        <label for="isActive">Active</label>
    </section>
</template>

<script>
  export default {
    name: 'GuildItem',
    props: ['guild']
  }
</script>

<style>
    section.guild-item {
        border: 1px solid lightgrey;
        border-bottom: 5px solid #f90;
        box-shadow: 0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);
        background-color: #f9f9f6;
        float: left;
        width: calc(440px + ((100% - 1320px) / 2.75 * 1));
        min-width: 150px;
        height: 150px;
        margin: 10px;
    }
    section.guild-item h1 {
        margin: 4px auto;
        text-align: center;
        color: #a20000;
        font-family: Roboto;
    }
</style>