<template>
    <transition
        :name="transitionName"
        @after-leave="afterLeave"
    >
        <div :class="classes">
            <menu-company-cards
                :items="frozenData.companies || companies"
                class="company-cards"
                :slim-mode="slimMode"
                @selected="companySelected"
                @opened="toggleCards"
            />

            <div class="right-menus">
                <wp-menu
                    :key="frozenData.mainMenuLocation || mainMenuLocation"
                    :location="frozenData.mainMenuLocation || mainMenuLocation"
                    class="menu main-menu"
                    @click.native="$emit('clicked')"
                />

                <h2 class="menu-title">
                    Social
                </h2>
                <wp-menu
                    :key="frozenData.socialMenuLocation || socialMenuLocation"
                    :location="
                        frozenData.socialMenuLocation || socialMenuLocation
                    "
                    class="menu social-menu"
                />
            </div>

            <div class="background" />
        </div>
    </transition>
</template>

<script>
// Helpers
import _get from "lodash/get"
import _remove from "lodash/remove"

// Components
import MenuCompanyCards from "~/components/menu/CompanyCards"

// TODO Make the animations work like this: https://www.dropbox.com/s/j39kxlbs4s4zu82/MakeMake%20-%20Desktop%20-%20Round%202%20-%20Menu%20Demo.mp4?dl=0

export default {
    components: {
        MenuCompanyCards,
    },
    props: {
        mainMenuLocation: {
            type: String,
            default: "Makemake - Main Menu",
        },
        socialMenuLocation: {
            type: String,
            default: "Makemake - Social Menu",
        },
        companies: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            activeIndex: -1,
            transitionName: "menu-panel",
            frozenData: {},
            cardsOpened: false,
        }
    },
    computed: {
        classes() {
            return ["panel-menu", { "cards-opened": this.cardsOpened }]
        },
        companiesTransition() {
            return "company-slide"
        },
        slimMode() {
            return this.$store.state.winWidth < 750
        },
    },
    watch: {
        "$store.state.menuOpened"(newVal, oldVal) {
            if (newVal) {
                this.freezeData()
            }
            this.cardsOpened = false
        },
    },
    created() {
        this.$nuxt.$on("page-mounted", this.onPageMounted)
    },
    methods: {
        onPageMounted(routeName) {
            // Instantly turn off the menu-panel.
            const event = new Event("transitionend")
            this.$el.dispatchEvent(event)
            this.$store.commit("SET_MENU_TAKEOVER", false)
        },
        companySelected(uri) {
            // Don't do anything if current route picked
            if (this.$route.fullPath == uri) {
                return
            }

            this.transitionName = "company-selected"
            this.$router.push(uri)

            this.$nextTick(() => {
                this.$store.commit("SET_MENU_TAKEOVER", true)
                this.$store.commit("SET_MENU", false)
            })
        },
        afterLeave() {
            // After transition is finsihed, reset to opening transitionName
            if (this.transitionName == "company-selected") {
                this.transitionName = "menu-panel"

                // Reset data so template uses reactive props
                this.frozenData = {}
            }
        },
        freezeData() {
            // Freeze all the data (otherwise on route change the props would all update)
            this.frozenData = {
                title: this.title,
                companies: this.companies,
                mainMenuLocation: this.mainMenuLocation,
                socialMenuLocation: this.socialMenuLocation,
            }
        },
        toggleCards(val) {
            this.cardsOpened = val
        },
    },
}
</script>

<style lang="scss">
.panel-menu {
    position: fixed;
    top: 0;
    left: 0;
    height: var(--unit-100vh);
    width: 100%;
    color: var(--color-company);
    overflow: hidden;
    display: flex;
    align-items: center;

    .company-cards {
        z-index: 10;
    }
    .right-menus {
        margin: 50px 110px 0 auto;
        line-height: 1.2;
        position: relative;
        z-index: 20;
        transition: transform 0.4s $authenticMotion,
            opacity 0.4s $authenticMotion;
    }
    .menu {
        list-style: none;
        margin: 0;
        padding: 0;
        text-align: right;
    }
    .menu-item {
        margin-left: auto;
    }
    .menu-link {
        display: inline-block;
        transition: transform 0.4s $authenticMotion;
    }
    .menu-title {
        margin: 0 0 10px;
        font-weight: 300;
        text-align: right;
        font-size: 16px;
    }
    .main-menu {
        font-size: 50px;
        font-weight: 300;
        margin-bottom: 35px;
    }
    .social-menu {
        font-size: 14px;

        .menu-item {
            margin: 5px 0 5px auto;
        }
    }
    > .background {
        @include fill;
        z-index: 0;
        background-color: rgba(#000000, 0.7);
    }

    // Hovers
    @media #{$has-hover} {
        .menu-link:hover {
            transform: translateX(-20px);
        }
    }

    // Breakpoints
    @media #{$lt-tablet} {
        &.cards-opened {
            .right-menus {
                opacity: 0;
                transform: translateY(-50px);
                pointer-events: none;
            }
        }
    }
    @media #{$lt-phone} {
        ::v-deep .logo {
            height: 1px;
            width: auto;
        }
        .right-menus {
            margin-right: var(--unit-gutter);
        }
        .main-menu {
            margin-top: 50px;
            margin-bottom: 50px;
            font-size: 30px;

            .menu-link {
                padding: 5px 0;
            }
        }
    }
}
</style>
