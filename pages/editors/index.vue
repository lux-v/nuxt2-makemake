<template>
    <section class="page-work">
        <gallery-list
            :items="parsedData"
            class="list"
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

            const siteMeta = data?.siteMeta || {}
            store.commit("SET_SITE_META", siteMeta)
            return {
                pages: data?.pages || [],
                siteMeta: siteMeta,
            }
        } catch (error) {
            console.error(error)
            return {
                pages: [],
                siteMeta: siteMeta,
            }
        }
    },
    computed: {
        parsedData() {
            return (
                this.pages?.map((page) => {
                    return {
                        image: page?.featuredImage || {},
                        title: page?.title || "",
                        to:
                            `/editors/${_kebabCase(page?.title)}${page?.uri}` ||
                            "",
                    }
                }) || []
            )
        },
    },
}
</script>

<style></style>
