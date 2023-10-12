<template>
    <section class="page-detail">
        <video 
        :src="videoUrl"
        controls 
        autoplay
        :width="parsedWidth"
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
    computed:{
        parsedWidth(){
            return "80%"
        },
    }
}
</script>
<style lang="scss" scoped>
.page-detail{
    height: var(--unit-100vh);
    display:flex;
    align-items: center;
    justify-content: center;
}

</style>