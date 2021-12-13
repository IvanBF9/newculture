<template>

</template>

<script>

export default {
  beforeMount(){
    //Here we remove all the data of connected user and we redirect to home page !
    this.$cookiz.remove('bearer');
    this.$store.commit("setHeaderKey", (this.$store.state.headerkey + 1));
    this.$store.commit("setAuthState", false);
    this.$store.commit("setUserName", "");
    this.$store.commit("setProfilePic", "");
    this.onLogout().then(() => {
      this.$router.push('/');
    })
  },
  methods: {
    async onLogout () {
      await this.$apolloHelpers.onLogout()
    },
  }
}
</script>