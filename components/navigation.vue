<template>
  <div class="nav">
  	<nav>
  		<nuxt-link to="/">Home</nuxt-link>
    	<nuxt-link to="/journal">Journal</nuxt-link>
    	<nuxt-link to="/listen">Listen</nuxt-link>
    	<nuxt-link to="/watch">Watch</nuxt-link>
    	<nuxt-link to="/shop">Shop</nuxt-link>
    	<nuxt-link to="/events">Events</nuxt-link>
    	<nuxt-link to="/connect">Connect</nuxt-link>
	</nav>
  </div>
</template>

<style>

.nav {
	position: fixed;
	top: 0;
	right: 0;
}

.slide-leave-active,
.slide-enter-active { transition: .3s transform 200ms ease-in-out;}
.slide-enter { transform: translateX(100%) }
.slide-leave-to { transform: translateX(0) }

</style>