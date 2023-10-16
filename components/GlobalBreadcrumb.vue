<template>
    <nuxt-link
        class="global-breadcrumb"
        :to="to"
    >
        {{ text }}
    </nuxt-link>
</template>
<script>
export default {
    props: {
        to: {
            type: String,
            default: "",
        },
        text: {
            type: String,
            default: "",
        },
    },
}
</script>
<style lang="scss" scoped></style>
