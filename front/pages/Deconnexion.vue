<template>

</template>

<script>

export default {
  beforeMount(){
    this.$cookiz.remove('bearer');
    this.$store.commit("setHeaderKey", (this.$store.state.headerkey + 1));
    this.$store.commit("setAuthState", false);
    this.$router.push('/');
  }
}
</script>