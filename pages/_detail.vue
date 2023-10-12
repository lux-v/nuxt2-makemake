<template>
    <section class="page-detail">
        <video-stage
            :src="videoUrl"
            class="video"
        />
    
    </section>
</template>
<script>
export default {
    data() {
        return {
          videoUrl:"https://vimeo.com/538517463"
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
    @media #{$lt-phone} {
        .video{
            left: 20px;
            right: 20px;
        }
    }
}

</style>