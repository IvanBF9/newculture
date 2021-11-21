<template>
<div class="app">
  <h1>Page accueil</h1>
</div>
</template>

<script>
export default {
  //layout: "default", //"default",
  layout({ store }){
    return store.state.layout
  },
  data() {
    return {
    }
  },
  created() {
  },
  destroyed() {
  },
  mounted({ store }){
    function setLayout() {
      if (window.innerWidth > 1280){//PC
        store.commit('setLayout', 'pc');
        //this.setLayout(store.state.layout);
      }else{
       // store.commit('setLayout', 'default');
        //this.setLayout(store.state.layout);
      }
    }
   // window.addEventListener('resize', this.selectLayout);
   // this.selectLayout();
    window.addEventListener('resize', setLayout);
    setLayout();
  },
  methods: {
  }
}
</script>

<style>

</style>