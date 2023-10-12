<template>
	<header class="global-header">
        <nuxt-link to="/">
		<svg-logo-makemake class="svg-logo-make-make" />
        </nuxt-link>
		<h2 class="title">Editors </h2>
		<div class="svg-wrapper">
			<svg-logo-rps class="svg-logo-rps" />
			<global-hamburger
				:is-open="menuOpened"
                class="hamburger"
			/>
        </div> 
	 </header>
</template>

<script>
import SvgLogoMakemake from '~/assets/svgs/logo-makemake.svg';
import SvgLogoRps from '~/assets/svgs/logo-rps.svg';

export default {
    props:{
        menuOpened:{
            type: Boolean,
            default:false
        }
    },
    components:{
        SvgLogoMakemake,
        SvgLogoRps
    }
}
 </script>

<style lang="scss" scoped>
.global-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 20px;
	margin: 30px 0;
	padding: 20px 50px;
    box-sizing: border-box;
	color: var(--color-yellow);
    width: 100%;

    .title {
        color: var(--color-yellow);
        text-align: center;
        font: normal normal normal 18px/22px;
        letter-spacing: 0px;
    }

    .svg-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap:28px;
    }

    .svg-logo-make-make {
        width: 150px;
        height: auto;
        cursor:pointer;
    }

    .svg-logo-rps {
        color: #000000;
        width: 150px;
        height: auto;
    }

    @media only screen and (max-width: 768px) {
        padding: 20px 20px;
        margin-top: 0;
        background-color: #000000;
        
        .svg-logo-make-make {
            width: 100px;
        }

        .title{
            font-size:16px;
        }

        .svg-logo-rps { 
            display:none;
        }

    }
}


</style>