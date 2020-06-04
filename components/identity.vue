
<template>
    <div class="identity">
    	<img src="~/assets/img/bakedonline-lght.svg" />
    </div>
</template>


<style lang="scss">

.identity {
    display: block;
    background: black;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    padding: 13px 20px 7px;
    width:200px;
    z-index: 9999 !important;
    transition: left .6s ease;
 
    @media (max-width: 400px) {
        left: 64px
    }
 }

</style>