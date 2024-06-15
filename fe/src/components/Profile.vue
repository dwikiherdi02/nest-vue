<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{currentUser.name}}</strong> Profile ({{currentUser.username}})
      </h3>
    </header>    
  </div>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    currentUser() {
      if (!this.$store.state.auth.user) {
        return {};
      }
      return this.$store.state.auth.user.data;
    },
  },
  mounted() {
    if (!this.loggedIn) {
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped> </style>