<template>
    <div>LOGIN</div>
</template>


<script lang="ts">
    import axios from "axios";
    import Vue from 'vue';

    const querystring = require('query-string');
    let jwt = require('jsonwebtoken');

    const CLIENT_ID = '459649271566958593';
    const REDIRECT = 'http://localhost:3030/login';

    let $tokenUrl = 'https://discordapp.com/api/oauth2/token';
    let $loginUrl = 'https://discordapp.com/api/oauth2/authorize?client_id='+CLIENT_ID+'&scope=identify&response_type=code&redirect_uri='+encodeURIComponent(REDIRECT);
    let $resourceOwnerUrl = 'https://discordapp.com/api/users/@me';




  export default Vue.extend({
    created () {
        //     this.logIn()
        // },
        // methods: {
        //     router.get('/login', (req, res) => {
        //         res.redirect(`https://discordapp.com/oauth2/authorize?client_id=${CLIENT_ID}&scope=identify&response_type=code&redirect_uri=${redirect}`);
        //         });
        }
    });
</script>
