<template>
    <div :class="classes">
        <wp-menu
            name="menu"
            :items="menuItems"
            @menu-interacted="menuClose"
        >
            <template slot="before">
                <div class="list-items">
                    <li class="item">
                        <nuxt-link
                            to="/"
                            class="item-link"
                            @click.native="menuClose"
                        >
                            Directors
                        </nuxt-link>
                    </li>
                    <li class="item">
                        <nuxt-link
                            to="/"
                            class="item-link"
                            @click.native="menuClose"
                        >
                            Work
                        </nuxt-link>
                    </li>
                    <li class="item">
                        <nuxt-link
                            to="/"
                            class="item-link"
                            @click.native="menuClose"
                        >
                            About
                        </nuxt-link>
                    </li>
                    <li class="item">
                        <nuxt-link
                            to="/"
                            class="item-link"
                            @click.native="menuClose"
                        >
                            Contact
                        </nuxt-link>
                    </li>
                </div>
            </template>
            <template slot="after">
                <div class="menu-description">
                    This is a description for wp-menu slot="after"
                </div>
            </template>
        </wp-menu>
    </div>
</template>
<script>
export default {
    props: {
        menuOpened: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            menuItems: [
                {
                    label: "item1",
                    url: "/",
                    childItems: {
                        nodes: [{ label: "item1 child1", url: "/" }],
                    },
                },
                { label: "item2", url: "/" },
            ],
        }
    },
    computed: {
        classes() {
            return ["global-panel-menu", { "is-open": this.menuOpened }]
        },
    },
    methods: {
        menuClose() {
            this.$store.commit("SET_MENU", false)
        },
    },
}
</script>
<style lang="scss" scoped>
.global-panel-menu {
    height: var(--unit-100vh);
    width: 100%;
    translate: 0 100%;
    background-color: var(--color-black);
    transition: translate 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
    display: flex;
    align-items: center;
    justify-content: center;

    .list-items {
        list-style-type: none;
    }

    .item {
        margin: 30px 0px;
        text-align: center;
    }

    .item-link {
        padding: 10px 0;
        font-size: 50px;
        font-weight: normal;
    }

    .menu-description {
        position: absolute;
        width: 100%;
        bottom: 50px;
        right: 50%;
        transform: translate(50%);
        text-align: center;
        color: var(--color-primary);
        font-size: 24px;
    }

    // Is open
    &.is-open {
        translate: 0;
    }

    // Hovers
    @media #{$has-hover} {
        .item-link:hover {
            opacity: 0.7;
        }
    }
}
</style>
