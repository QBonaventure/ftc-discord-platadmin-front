<template>
    <nav>
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <a v-if="!user" href="http://discord-oauth.fearthec.test/login">Login</a>

                <router-link v-else to="/logout">Logout</router-link>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
      data: function() {
        return {
          user: localStorage.getItem('user')
          }
        }
    })
</script>
