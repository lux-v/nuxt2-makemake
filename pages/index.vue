<template>
    <section class="page-landing">
        <h2
            class="title"
            v-html="title"
        />
        <wp-image
            class="image"
            :image="image"
            mode="cover"
        />
    </section>
</template>

<script>
import _kebabCase from "lodash/kebabCase"

export default {
    async asyncData({ store }) {
        try {
            const res = await fetch(
                "https://raw.githubusercontent.com/funkhaus/technical-assessment/master/db.json"
            )
            const data = await res.json()

            store.commit("SET_SITE_META", data?.siteMeta || {})
            return {
                title: data.siteMeta?.title || "",
                image: data.images?.[0] || {},
            }
        } catch (error) {
            console.error(error)
            return {
                title: "",
                image: {},
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.page-landing {
    height: 100vh;

    .title {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 10;

        translate: -50% -50%;

        width: 100%;
        margin: 0;
        padding: var(--unit-gap);
        box-sizing: border-box;

        color: var(--color-yellow);
        font-size: 36px;
        text-align: center;
    }

    .image {
        z-index: 0;

        width: 100%;
        height: 100%;
    }
}
</style>
