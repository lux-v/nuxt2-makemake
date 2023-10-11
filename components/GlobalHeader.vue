<template>
	<header class="global-header">
		<!-- <svg-logo-make-make class="svg-logo-make-make" /> -->
		<h2 class="title">Editors </h2>
		<div class="svg-wrapper">
			<!-- <svg-logo-rps class="svg-logo-rps" /> -->
			<global-hamburger
				:is-open="menuOpened"
			/>
		</div>
	</header>
</template>

<script>
import SvgLogoMakeMake from "~/assets/svg/logo-makemake.svg"
import SvgLogoRps from "~/assets/svg/logo-rps.svg"

export default {
    props:{
        menuOpened:{
            type: Boolean,
            default:false
        }
    },
    components:{
        SvgLogoMakeMake,
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
	padding: 0 50px;
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
    }

    .svg-logo-make-make {
        width: 149px;
        height: 20px;
    }

    .svg-logo-rps {
        color: #000000;
        width: 149px;
        height: 50px;
    }

    @media (max-width: 768px) {
        .global-header {
            flex-direction: column;
            padding: 0 20px;
        }
    }
}


</style>