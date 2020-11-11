<template>
  <section>
    <h1>Shop</h1>

    <div class="product-box" style="background-image: url(images/3-1.jpg);">

    	<div class="product-price">R299</div>
		<div class="product-title">ECRU KNITTED TOP</div>
		  
    </div>

  </section>
</template>
<script>
	export default {
	data() {
		return {
			heading: '',
		}
	},
	mounted() { 
		if(document.querySelector('#menuToggle>input').checked === true) {	
			setTimeout(function() {
				if (document.getElementsByTagName('h1')[0] !== undefined ) {
					this.heading = document.getElementsByTagName('h1')[0];	
					this.heading.style.top='calc(100vh - 64px)';
					this.heading.style.left='0px';
				}
			}, 3000);
		}
	},
}
</script>
<style lang="scss">
	.product-box {
		width: 100vw;
		height: 100vh;
		background-size: contain;
		background: white;
		background-repeat: no-repeat;
	}

	.product-title {
		position: absolute;
		top: calc(50% - 40px);
		right: 0px;
		padding: 10px;
		background: black;
		color: white;
		opacity: .7;
	}

	.product-price {
		position: absolute;
		top: 50%;
		right: 0px;
		padding: 10px;
		background: orange;
		color: black;
	}

</style>