<template>
  <section class="page-landing">
    <gallery-list :items="parsedData" class="list"/>
</section>
</template>

<script>
export default {
  name: 'IndexPage',
  head(){

  },
  async asyncData() {
      const res =  await fetch("https://raw.githubusercontent.com/funkhaus/technical-assessment/master/db.json")
      const data = await res.json()
    
      return {
          pages: data.pages || [],
      }
  },
  computed:{
    parsedData(){
      return this.pages.map((page)=>{
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
.page-landing{

}

</style>
