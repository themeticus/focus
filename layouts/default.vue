<template>  
  <div id="app">
    <background />
    <identity />
    <navigation />
    <transition name="slide">
      <nuxt />
    </transition>
  </div>
</template>

<script>
  import Identity from '~/components/identity';
  import Navigation from '~/components/navigation';
  import Background from '~/components/background';
  export default {
    components: {
      Identity, Navigation, Background
    }
  }
</script>

<style>

@import "~/assets/css/base.css";

</style>