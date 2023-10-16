<template>
    <div class="layout">
        <global-header
            class="header"
            :menu-opened="menuOpened"
            :breadcrumb="breadcrumb"
        />
        <nuxt class="page" />
        <global-panel-menu
            class="panel-menu"
            :menu-opened="menuOpened"
        />
    </div>
</template>
<script>
export default {
    head() {
        return {
            title: this.$store.state.siteMeta?.title || "",
            meta: [
                {
                    name: "description",
                    content: this.$store.state.siteMeta?.description || "",
                },
                {
                    name: "thumbnail",
                    content: this.$store.state.siteMeta?.thumbnail || "",
                },
            ],
        }
    },
    computed: {
        menuOpened() {
            return this.$store.state.menuOpened
        },
        breadcrumb() {
            let output = {}

            switch (this.$route.name) {
                case "index":
                    output = {
                        text: "Home",
                        to: "/",
                    }
                    break

                case "editors-editor-detail":
                    output = {
                        text: "Editors Detail",
                        to: "",
                    }
                    break

                case "editors":
                    output = {
                        text: "Editors",
                        to: "/editors",
                    }
                    break
            }

            this.$store.commit("SET_BREADCRUMB", output)
            return output
        },
    },
}
</script>
<style lang="scss" scoped>
.layout {
    background-color: var(--color-black);
    min-height: var(--unit-100vh);

    .header {
        position: fixed;
        top: 0;
        left: 0;
    }
    .panel-menu {
        position: fixed;
        bottom: 0;
    }
}
</style>
