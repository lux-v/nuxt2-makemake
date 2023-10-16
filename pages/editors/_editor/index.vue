<template>
    <section class="page-editor">
        <h2 class="title">
            This is editor landing page
        </h2>
    </section>
</template>
<script>
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
}
</script>
<style lang="scss" scoped>
.page-editor {
    height: var(--unit-100vh);

    display: flex;
    align-items: center;
    justify-content: center;

    .title {
        margin: 0;

        color: var(--color-yellow);
        font-size: 36px;
    }
}
</style>
