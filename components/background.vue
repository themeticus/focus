<template>
	<div>
		<div class="bg"></div>
		<div class="bg bg2"></div>
		<div class="bg bg3"></div>
	</div>	
</template>

<style>

.bg {
  animation:slides 3s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, #9E9E9E 50%, #607D8B 50%);
  bottom:0;
  left:-50%;
  opacity:.5;
  position:fixed;
  right:-50%;
  top:0;
  z-index:-1;
}

.bg2 {
  animation-direction:alternate-reverse;
  animation-duration:4s;
}

.bg3 {
  animation-duration:5s;
}

@keyframes slides {
  0% {
    transform:translateX(-25%);
  }
  100% {
    transform:translateX(25%);
  }
}

</style>
