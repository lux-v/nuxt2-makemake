<template >
    <div class="layout">
        <global-header :menu-opened="menuOpened" class="header" />
        <div class="breadcrumb">
            {{breadcrumbInfo}}
        </div>
        <nuxt class="page"/>
         <global-panel-menu :menu-opened="menuOpened" class="panel-menu"/>
    </div> 
</template>
<script>
export default {
    mounted(){
        this.defineBreadcrumb()
    },
    methods:{
         defineBreadcrumb(){
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

            this.$store.commit("SET_BREADCRUMB", output)
        }
    },
    computed: {
        menuOpened(){
            return this.$store.state.menuOpened
        },
        breadcrumbInfo(){
            return this.$store.state.breadcrumb.text 
        },
    },
    watch: {
        $route (){
            this.defineBreadcrumb()
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
    @media #{$lt-phone} {
        .breadcrumb {
            top: 100px;
            right: 20px;
        }
    }
}
    
</style>