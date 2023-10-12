<template>
  <section class="page-landing">
    <gallery-list :items="parsedData" class="list"/>
</section>
</template>

<script>
export default {
  head(){

  },
  async asyncData() {
    try {
      const res =  await fetch("https://raw.githubusercontent.com/funkhaus/technical-assessment/master/db.json")
      const data = await res.json()
    
      return {
          pages: data.pages || [],
      }
    } catch (error) {
      console.error(error)

      return{
        pages: []
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
