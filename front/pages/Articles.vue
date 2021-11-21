<template>
<div class="app">

 <h1>Articles page</h1>
</div>
</template>

<script>
export default {
  layout: "default",
  data() {
    return {
    }
  },
  created() {
  },
  destroyed() {
  },
  mounted() {
    window.addEventListener('resize', this.selectLayout);
    this.selectLayout();
  },
  methods: {
    selectLayout() {
      if (window.innerWidth > 1280){//PC
        this.$nuxt.setLayout("pc");
      }else{
        this.$nuxt.setLayout("default");
      }
    },
  }
}
</script>

<style>
</style>