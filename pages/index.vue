<template>
  <section class="page-landing">
    <gallery-list :items="parsedData" class="list"/>
</section>
</template>

<script>
export default {
  head(){
    return{
      title: this.siteMeta?.title,
      meta: [
        {
            name: "description",
            content: this.siteMeta?.description,
        },
        {
            name: "thumbnail",
            content: this.siteMeta?.thumbnail,
        },
    ],
    }
  },
  async asyncData({store}) {
    try {
      const res1 =  await fetch("https://raw.githubusercontent.com/funkhaus/technical-assessment/master/db.json")
      const res2 =  await fetch("https://raw.githubusercontent.com/funkhaus/technical-assessment/master/db.json")

      const data1 = await res1.json()
      const data2 = await res2.json()

      const siteMeta = data2.siteMeta || {}
      store.commit("SET_SITE_META", siteMeta)

      return {
          pages: data1.pages || [],
          siteMeta: siteMeta
      }
    } catch (error) {
      console.error(error)

      return{
        pages: [],
      }
    }
  },
  computed:{
    parsedData(){
      return this.pages?.map((page)=>{
        return{
          image: page.featuredImage || {},
          title: page.title || "",
          to: page.uri || "",
        } 
      })
    }
  }
}
</script>

<style>

</style>
