<template>
<div class="app">
  <h1>Page Dons</h1>
</div>
</template>

<script>
export default {
  layout({ store }){
    return store.state.layout
  },
  /*data({store}) {
  },*/
  created() {
  },
  destroyed() {
  },
  mounted(){
    window.addEventListener('resize', this.selectHeader);
    this.selectHeader();
  },
  methods: {
    selectHeader(){
    if (window.innerWidth > 1079){//PC
      this.$store.commit("setLayout", "pc")
    }else{
      this.$store.commit("setLayout", "default");
    }
    $nuxt.setLayout(this.$store.state.layout)
    }
  }
}
</script>

<style>

</style>