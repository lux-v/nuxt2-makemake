<template >
    <div :class="classes">
        <div>
            This is menu
        </div>
    </div>
</template>
<script>
export default {
    props:{
        menuOpened:{
            type:Boolean,
            default: false
        }
    },
    computed:{
        classes(){
            return [
                "global-panel-menu",
                {"is-open": this.menuOpened}
            ]
        }
    }
    
}
</script>
<style lang="scss" scoped>
.global-panel-menu{
    height: var(--unit-100vh);
    width: 100%;
    translate: 0 100%;
    background-color: firebrick;
    transition: translate 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

    &.is-open{
        translate: 0;
    }
}
    
</style>