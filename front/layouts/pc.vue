<template>
<div>
    <component :key="headerkey" :is="header"></component>
    <Nuxt />
</div>
</template>

<script>
export default {
    middleware: ['checkState'],
    data() {
        return {
            header: "HeaderMobile",
            headerkey: this.$store.state.headerkey
        }
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.selectHeader);
    },
    mounted(){
        //Changing header !
        this.selectHeader()
        window.addEventListener('resize', this.selectHeader);
    },
    watch: {
        $route(){
            if(this.headerkey !== this.$store.state.headerkey) this.headerkey = this.$store.state.headerkey;
        }
    },
    methods: {
        selectHeader(){
            if (window.innerWidth > 1124){//PC
                this.header = "Header";
            }else{
                this.header = "HeaderMobile";
            }
            console.log(this.header);
        },
    }
}
</script>