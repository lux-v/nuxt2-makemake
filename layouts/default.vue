<template >
    <div class="layout">
        <global-header :menu-opened="menuOpened" class="header" />
        <div class="breadcrumb">
            {{breadcrumb.text}}
        </div>
        <nuxt class="page"/>
         <global-panel-menu :menu-opened="menuOpened" class="panel-menu"/>
    </div> 
</template>
<script>
export default {
    computed: {
        menuOpened(){
            return this.$store.state.menuOpened
        },
        breadcrumb(){
            let output = {}
            switch (this.$route.name) {
                case 'index':
                    output={
                        text: "Home",
                        to: "/"
                    }
                    break;
            
            case 'detail':
                output={
                    text: "Work Detail",
                }
                break;
            }
            return output
        }
    }
}
</script>
<style lang="scss" scoped>
.layout{
    background-color: var(--color-black);
    min-height: var(--unit-100vh);

    .header{
        position: fixed;
        top:0;
        left:0;
    }
    .breadcrumb{
        position: fixed;
        top: 150px;
        right: 50px;
        color: var(--color-yellow);
    }
    .panel-menu{
        position:fixed;
        bottom:0;
    }

    // Breakpoint
    @media only screen and (max-width: 768px) {
        .breadcrumb {
            top: 100px;
            right: 20px;
        }
    }
}
    
</style>