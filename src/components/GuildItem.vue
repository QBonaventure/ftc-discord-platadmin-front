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
        border-color: blue;
        float: left;
        width: 150px;
    }
</style>