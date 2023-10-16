<template>
    <div
        :class="classes"
        @click="openMenu"
    >
        <div class="line line-one" />
        <div class="line line-two" />
    </div>
</template>

<script>
export default {
    props: {
        isOpen: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        classes() {
            return ["global-hamburger", { "is-open": this.isOpen }]
        },
    },
    methods: {
        openMenu() {
            this.$store.commit("SET_MENU", !this.isOpen)
        },
    },
}
</script>

<style lang="scss" scoped>
.global-hamburger {
    cursor: pointer;
    .line {
        height: 2px;
        width: 30px;
        margin-bottom: 10px;

        background-color: var(--color-yellow);

        transition: rotate 0.4s ease, translate 0.4s ease;

        &:last-child {
            margin-bottom: 0;
        }
    }

    @media #{$has-hover} {
        &:hover .line {
            background-color: var(--color-white);
        }
    }

    &.is-open {
        .line-one {
            rotate: -45deg;
            translate: 0 6px;
        }
        .line-two {
            rotate: 45deg;
            translate: 0 -6px;
        }
    }
}
</style>
