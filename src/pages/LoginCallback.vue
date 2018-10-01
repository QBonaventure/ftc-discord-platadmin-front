<template>
    <div>LOGIN</div>
</template>


<script lang="ts">
    import Vue from 'vue';
    import axios from "axios";
    var jwt = require('jsonwebtoken');


  export default Vue.extend({
    created () {
      let token = jwt.decode(this.$route.query.token);
      let user = token.user;
      user.token = this.$route.query.token;

      localStorage.setItem('user', JSON.stringify(user));
      window.location.href = this.$route.query.redirect_uri;
    },
  });
</script>
