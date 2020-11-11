
<template>
  <section class="mm">
    <VueSlickCarousel v-bind="settings">
		  <div class=" p1">

		  </div>
	      <div class=" p1">
  	
	      </div>
	      <div class=" p1">
  	
	      </div>
	      <div class=" p1">
      	
	      </div>
    </VueSlickCarousel>
  </section>
</template>

<style lang="scss">

	@import '~/static/css/slick-all.css';
	$path: '/';

	.mm { 
		height: calc(100vh); 
		background-color: transparent;	
	}

	 .p1 { 
	 	width: calc(768px - 0px); 
	 	height: calc(100vh - 0px); 
	 	background-image: url('#{$path}images/3-1.jpg') }

	.product-box {
		width: 400px;
		height: 100vh;
		background-size: cover;
		background-repeat: no-repeat;
	}
/*
	.product-title {
		position: relative;
		top: calc(50% - 40px);
		right: 0px;
		padding: 10px;
		background: black;
		color: white;
		opacity: .7;
		width: auto;
	}

	.product-price {
		position: relative;
		top: 50%;
		right: 0px;
		padding: 10px;
		background: orange;
		color: black;
	}*/

</style>
 
<script>

  import VueSlickCarousel from 'vue-slick-carousel'

  export default {
	data() {
		return {
			settings: {
			  infinite: false,
			  speed: 300,
			  slidesToShow: 4,
			  slidesToScroll: 4,
			  arrows: true,
			  dots: true,
			  prevArrow: '<button type=\"button\" class=\"slick-prev\"> &lsaquo;</button>',
			  nextArrow: '<button type=\"button\" class=\"slick-next\"> &rsaquo;</button>',
			  responsive: [
			    {
			      breakpoint: 2800,
			      settings: {
			        slidesToShow: 4,
			        slidesToScroll: 4,
			        infinite: false
			      }
			    },  
			    {
			      breakpoint: 2100,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 3,
			        infinite: false
			      }
			    },
			    {
			      breakpoint: 1400,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2,
			        infinite: false
			      }
			    },    
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        infinite: false
			      }
			    }
			  ]
			},	
		}
	},
 	
    components: { VueSlickCarousel },  
	mounted: function() {
		document.querySelector('button.slick-arrow.slick-prev').textContent="";
		document.querySelector('button.slick-arrow.slick-next').textContent="";
	}
  }
</script>