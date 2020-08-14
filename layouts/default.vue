<template>  
  <div id="app">
    <background />
    <identity />
    <navigation />
    <transition :name="transitionName" mode="in-out">
      <nuxt class="child-view" />
    </transition>
  </div>
</template>

<script>
  import Identity from '~/components/identity';
  import Navigation from '~/components/navigation';
  import Background from '~/components/background';
  export default {
    data () {
      return {
        transitionName: 'slide-fade'
      }
    },
    components: {
      Identity, Navigation, Background
    },
  }
</script>



<style lang="scss">

@font-face {
  font-family: FuturaStd-Book;
  src:url('../static/FuturaStd-Book.otf')
}

@import "~/assets/css/base.css";

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(-100vw);
  opacity: 0;
}

.view-enter-active, .view-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
}
.view-enter-active {
  transition-delay: 0.5s;
}
.view-enter {
  opacity: 0;
  transform: translateX(-100px);
}
.view-enter-to {
  opacity: 1;
  transform: translateX(0px);
}
.view-leave {
  opacity: 1;
  transform: translateX(0px);
}
.view-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
.child-view {
  position: absolute;
  transition: all .75s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, 
.slide-right-leave-active {
  transform: translate(-100vw, 0);
}
.slide-left-leave-active, 
.slide-right-enter {
  transform: translate(-100vw, 0);
}

</style>