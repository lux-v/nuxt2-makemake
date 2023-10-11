<template>
  <div :class="classes" @click="openMenu">
    <div class="line line-one" />
    <div class="line line-two"/>
  </div>
</template>

<script>
export default {
  props:{
    isOpen:{
      type: Boolean,
      default: false
    }
  },
  computed:{
    classes(){
      return [
        "global-hamburger",
        {"is-open": this.isOpen}
      ]
    }
  },
  methods: {
        openMenu() {
            this.$store.commit("SET_MENU", !this.isOpen)
        }
    }
}
</script>

<style lang="scss" scoped>
.global-hamburger{

  cursor:pointer;
  
  .line{ 
    height: 2px;
    width: 30px;
    background-color: var(--color-yellow);
    margin-bottom: 10px;
    transition: rotate 0.3s cubic-bezier(0.075, 0.82, 0.165, 1), translate 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:last-child{
      margin-bottom: 0;
    }
  }
  
  &:hover{
    .line-one{
      rotate: -45deg;
      translate: 0 6px;
    }
    .line-two{
      rotate: 45deg;
      translate: 0 -6px;

    }
  }

  &.is-open{
    .line-one{
      rotate: -45deg;
      translate: 0 6px;
    }
    .line-two{
      rotate: 45deg;
      translate: 0 -6px;
    }
  }
}

</style>