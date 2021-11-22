<template>
<div class="app">

 <h1>Articles id</h1>
</div>
</template>

<script>
export default {
  layout({ store }){
    return store.state.layout
  },
  /*data({store}) {
  },*/
  asyncData ({ params }) {
    return {
      id: params.id
    }
  },
  created() {
  },
  destroyed() {
  },
  mounted(){
    console.log(this.id);

    window.addEventListener('resize', this.selectHeader);
    this.selectHeader();
  },
  methods: {
    selectHeader(){
    if (window.innerWidth > 1280){//PC
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