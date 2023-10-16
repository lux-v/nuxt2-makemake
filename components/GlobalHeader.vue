<template>
    <header class="global-header">
        <nuxt-link
            to="/"
            @click.native="menuClose"
        >
            <svg-logo-makemake class="svg-logo-make-make" />
        </nuxt-link>
        <global-breadcrumb
            :to="breadcrumb.to"
            :text="breadcrumb.text"
        />
        <div class="svg-wrapper">
            <svg-logo-rps class="svg-logo-rps" />
            <global-hamburger
                :is-open="menuOpened"
                class="hamburger"
            />
        </div>
    </header>
</template>

<script>
import SvgLogoMakemake from "~/assets/svgs/logo-makemake.svg"
import SvgLogoRps from "~/assets/svgs/logo-rps.svg"

export default {
    components: {
        SvgLogoMakemake,
        SvgLogoRps,
    },
    props: {
        menuOpened: {
            type: Boolean,
            default: false,
        },
        breadcrumb: {
            type: Object,
            default: () => ({}),
        },
    },
    methods: {
        // this checks if menu is opened before commiting to store
        menuClose() {
            this.$store.state.menuOpened &&
                this.$store.commit("SET_MENU", false)
        },
    },
}
</script>

<style lang="scss" scoped>
.global-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    width: 100%;
    margin: 30px 0;
    padding: 20px 50px;
    box-sizing: border-box;

    color: var(--color-yellow);

    .svg-logo-make-make {
        width: 150px;
        height: auto;

        cursor: pointer;
    }

    .title {
        color: var(--color-yellow);
        text-align: center;
        font-size: 18px;
        font-weight: normal;
        letter-spacing: 0px;
    }

    .svg-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 28px;
    }
    .svg-logo-rps {
        width: 150px;
        height: auto;

        color: var(--color-black);
    }

    .hamburger {
        padding: 10px;
    }

    @media #{$lt-phone} {
        padding: 20px 20px;
        margin-top: 0;

        background-color: var(--color-black);

        .svg-logo-make-make {
            width: 100px;
        }
        .title {
            font-size: 16px;
        }
        .svg-logo-rps {
            display: none;
        }
    }
}
</style>
