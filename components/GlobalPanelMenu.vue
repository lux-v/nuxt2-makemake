<template >
    <div :class="classes">
        <div class="list-items">
            <li class="item">
                <nuxt-link to="/" class="item-link" @click.native="menuClose">
                    Directors
                </nuxt-link>
            </li>
            <li class="item"> 
                <nuxt-link to="/" class="item-link" @click.native="menuClose">
                    Work
                </nuxt-link>
            </li>
            <li class="item"> 
                <nuxt-link to="/" class="item-link" @click.native="menuClose">
                    About
                </nuxt-link>
            </li>
            <li class="item"> 
                <nuxt-link to="/" class="item-link" @click.native="menuClose">
                    Contact
                </nuxt-link>
            </li>
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
    },
    methods:{
        menuClose(){
            this.$store.commit("SET_MENU", false)
        }
    }    
}
</script>
<style lang="scss" scoped>
.global-panel-menu{
    height: var(--unit-100vh);
    width: 100%;
    translate: 0 100%;
    background-color: var(--color-black);
    transition: translate 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
    display: flex;
    align-items: center;
    justify-content: center;

    .list-items{
        list-style-type: none;
    }

    .item{
        margin: 30px 0;
        font: normal normal normal 38px/50px RM Neue;
        text-align: center;
    }

    .item-link{
        padding: 10px 0;
    }

    // Is open
    &.is-open{
        translate: 0;
    }
}
    
</style>