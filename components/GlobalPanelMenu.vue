<template>
    <div :class="classes">
        <wp-menu
            class="menu"
            :items="menuItems"
            @menu-interacted="menuClose"
        />
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
                    label: "Editors",
                    target: null,
                    cssClasses: [],
                    url: "/editors",
                    id: "cG9zdDo5MA==",
                },
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
    display: flex;
    align-items: center;
    justify-content: center;

    height: var(--unit-100vh);
    width: 100%;

    translate: 0 100%;

    background-color: var(--color-black);

    transition: translate 0.4s var(--easing-authentic-motion);

    .menu {
        list-style: none;
        padding: 0;
        margin: 0;

        ::v-deep {
            .menu-item {
                font-size: 36px;
                transition: opacity 0.4s var(--easing-authentic-motion);
            }
        }
    }

    // Is open
    &.is-open {
        translate: 0;
    }

    @media #{$has-hover} {
        .menu ::v-deep .menu-item :hover {
            opacity: 0.7;
        }
    }
}
</style>
