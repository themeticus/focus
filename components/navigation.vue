<template>  	
  <div id="menuToggle">  
      <input type="checkbox"> 
      <span ></span> 
      <span ></span> 
      <span ></span>                     
      <ul class="menu">
    	<li><nuxt-link to="/journal">Journal</nuxt-link></li>
    	<li><nuxt-link to="/listen">Listen</nuxt-link></li>
    	<li><nuxt-link to="/watch">Watch</nuxt-link></li>
    	<li><nuxt-link to="/shop">Shop</nuxt-link></li>
    	<li><nuxt-link to="/events">Events</nuxt-link></li>
    	<li><nuxt-link to="/connect">Connect</nuxt-link></li>                         
      </ul>
  </div>
</template>

<script>
	if (process.client) {
		window.document.addEventListener('click', function (event) {
		    if (!event.target.closest('#menuToggle')) {
		        document.querySelector('#menuToggle>input').checked=false
		    }
		}, false);
	}
</script>

<style lang="scss">

#omninav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #000000;
    box-shadow: 0px 1px 2px 0px rgba(60,64,67,0.3), 0px 2px 6px 2px rgba(60,64,67,0.15);
    color: #3C4043;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
    padding: 0 36px 0 16px;
    -webkit-font-smoothing: antialiased;
    z-index: 1000;
}

/* menu transition */

#menuToggle {
	display: block;
	position: fixed;
	top: -3px;
	right: 0px;
	z-index: 6679;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	    user-select: none;
	padding: 0px;
	width: 75px;
	height: 73px;
	-webkit-transition: 1s all ease;
	transition: 1s all ease;
	opacity: 0.9;
	@media screen and (max-width: 400px) {
  		top: -14px;
  		left: 0px;
  		width: 64px;	
  		height: 53px;	
  	}
}
#menuToggle:hover {
	opacity: 1;
	-webkit-transition: 1s all ease;
	transition: 1s all ease;
	background: rgba(0, 0, 0, 0.5) none repeat scroll 0% 0%;
}
#menuToggle input {
	display: block;
	width: 75px;
	height: 73px;
	position: absolute;
	cursor: pointer;
	opacity: 0;
	z-index: 2;
	-webkit-touch-callout: none;	
	@media screen and (max-width: 400px) {
  		width: 64px;		
  	}
}
#menuToggle span {
	display: block;
	width: 45px;
	height: 2px;
	margin: 24px 0px -16px 16px;
	position: relative;
	background: #555;
	border-radius: 3px;
	z-index: 1;
	-webkit-transform-origin: 4px 0px;
	        transform-origin: 4px 0px;
	-webkit-transition: background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease, -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
	transition: background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease, -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
	transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
	transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease, -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
}
#menuToggle span:hover {
	background: #fff;
	text-decoration: none;
}
#menuToggle span:first-child {
	-webkit-transform-origin: 0% 0%;
	        transform-origin: 0% 0%;
}
#menuToggle span:nth-last-child(2) {
	-webkit-transform-origin: 0% 100%;
	        transform-origin: 0% 100%;
}
#menuToggle input:checked ~ span {
	opacity: 1;
	-webkit-transform: rotate(45deg) translate(2px, -5px);
	        transform: rotate(45deg) translate(2px, -5px);
	background: white;
}
#menuToggle input:checked ~ span:nth-last-child(3) {
	opacity: 0;
	-webkit-transform: rotate(0deg) scale(0.2, 0.2);
	        transform: rotate(0deg) scale(0.2, 0.2);
}
#menuToggle input:checked ~ span:nth-last-child(2) {
	-webkit-transform: rotate(-45deg) translate(0px, 8px);
	        transform: rotate(-45deg) translate(0px, 8px);
}
.menu {
	position: fixed;
	top: 0px;
	right: -2px;
	margin: 0 0 0;
	background-color: black;
	list-style-type: none;
	-webkit-font-smoothing: antialiased;
	-webkit-transform-origin: 0% 0%;
	        transform-origin: 0% 0%;
	-webkit-transform: translate(0, -500%);
	        transform: translate(0, -500%);
	-webkit-transition: -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
	transition: -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
	transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
	transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
	 opacity: 0.8;
	width: 160px;
	padding-top: 62px;
	height: 100vh;
	@media screen and (max-width: 400px) {
  		top: 0px;
  		left: 0px
	}
}
.menu li {
  font-size: 2rem;
  display: block;
  background: rgba(0, 0, 0, 0.5) none repeat scroll 0% 0%;
  float: right;
  clear: both;               
  padding: 5px 20px 5px 10px;
  margin: 0 2px 2px;
  color: white;
  width: 155px;
  transition: 1s all ease;
}
.menu li a {
	text-decoration: none;
	text-align: left;
	font-family: Lato, sans-serif;
	padding: 11px 10px;
	font-size: 20px;
	display: inline-block;
	float: right;
	color: wheat;
	clear: both;
	text-transform: uppercase;
}
.menu li .active {
	border-right: 5px solid black;
	background: black !important;
	color: white !important;
}
.menu li:hover,
.menu li a:hover  {
	background-color: #515151;
	color: #fff;
}
#menuToggle input:checked ~ ul {
	-webkit-transform: none;
	        transform: none;
}
.menu li small {
  font-size: 14px;
  text-transform: uppercase;
}

/* page transition */

.slide-leave-active,
.slide-enter-active { 
	transition: transform .6s cubic-bezier(0.77, 0.2, 0.05, 1)
	/**/
}
.slide-enter { 
	transform: translateX(100%) 
	/* */
}
.slide-leave-to { 
	transform: translateX(0)
	/* */
}

</style>