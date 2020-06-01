<template>
  <div id="app">
    <navigation />
    <transition name="slide">
      <nuxt />
    </transition>
  </div>
</template>

<script>
  import Navigation from '~/components/navigation.vue'
  export default {
    components: {
      Navigation
    }
  }
</script>

<style lang="scss">

body {
  margin: 0; border: 0; padding: 0;
  background: #555
}

#app {
  overflow: hidden;
}

section {
  background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
  width: 100vw;
  height: 100vh;
}

</style>