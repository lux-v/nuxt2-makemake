<template>
    <section class="page-detail">
        <video-stage
            :src="videoUrl"
            class="video"
            :autoplay="false"
        />
    
    </section>
</template>
<script>
export default {
    data() {
        return {
          videoUrl:"https://vimeo.com/278003111"
        }
    },
}
</script>
<style lang="scss" scoped>
.page-detail{
    height: var(--unit-100vh);
    display:flex;
    align-items: center;
    justify-content: center;

    .video{
        position:fixed;
        top: 200px;
        bottom: 200px;
        left: 80px;
        right: 80px;
    }

    // Breakpoint
    @media only screen and (max-width: 768px) {
        .video{
            top: 200px;
            bottom: 200px;
            left: 20px;
            right: 20px;
        }
    }
}

</style>