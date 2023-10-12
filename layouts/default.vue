<template >
    <div class="layout">
        <global-header :menu-opened="menuOpened" class="header"/>
        <nuxt class="page"/>
         <global-panel-menu :menu-opened="menuOpened" class="panel-menu"/>
    </div> 
</template>


<script>
 
   export default {
    computed: {
        menuOpened(){
            return this.$store.state.menuOpened
        }
    }
}
</script>
<style lang="scss" scoped>
.layout{
    background-color: #000000;
    min-height: var(--unit-100vh);

    .header{
        position:absolute;
        top:0;
        left:0;
        z-index: 200;
    }
    .panel-menu{
        position:fixed;
        bottom:0;
        z-index: 100;
    }
}
    
</style>