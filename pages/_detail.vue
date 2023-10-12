<template>
    <section class="page-detail">
        <video 
            :src="videoUrl"
            controls 
            class="video"
        > 
    The browser does not support videos. 
  </video> 
    </section>
</template>
<script>
export default {
    data() {
        return {
          videoUrl:"https://media.geeksforgeeks.org/wp-content/uploads/20210314115545/sample-video.mp4"
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
        width:60%;
    }

    // Breakpoint
    @media only screen and (max-width: 768px) {
        .video{
            width: 80%; 
        }
    }
}

</style>