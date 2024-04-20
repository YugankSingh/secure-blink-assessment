<template>
	<div class="about-us">
		<img
			class="abstractImageLeft"
			src="../assets/images/abstract-image-website.svg"
		/>
		<div class="main">
			<p class="section-name">
				<img
					src="../assets/images/abstract-triangle-heading.png"
					alt=""
					height="38px"
				/>
				ABOUT US
			</p>
			<p class="section-heading">Great Digital Agency</p>
			<p class="section-para-main">
				Our products are fully custom-made, built with the latest technologies
				and cloud-architectures.
			</p>
			<p class="section-para">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex
				odio, turpis accumsan congue. Quisque blandit dui Pellentesque habitant
				morbi tristique senectus et netus et malesuada fames ac turpis egestas.
				In convallis porta mauris non aliquam.
			</p>
			<button class="button">
				Get Started
				<img
					src="../assets/images/arrow-down-sign-to-navigate-blue.svg"
					alt=""
				/>
				<img
					src="../assets/images/arrow-down-sign-to-navigate-blue.svg"
					alt=""
				/>
			</button>
		</div>
		<img
			class="abstractImageRightTop"
			src="../assets/images/abstract-imge-triangles.svg"
		/>
		<img
			class="abstractImageRightBottom"
			src="../assets/images/abstract-image-dots.svg"
		/>
	</div>
</template>

<script>
export default {
	name: "AboutUsSection",
	components: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.about-us {
	overflow-x: hidden;
	overflow-y: hidden;
	min-height: 110vh;
	position: relative;
	.abstractImageLeft {
		height: 100%;
		position: absolute;
		right: 50vw;
	}
	.abstractImageRightTop {
		width: max(33vw, 240px);
		position: absolute;
		right: -70px;
	}
	.abstractImageRightBottom {
		width: max(23vw, 300px);
		position: absolute;
		right: -70px;
		bottom: 0px;
		z-index: 0;
	}
	.main {
		z-index: 10;
		position: absolute;
		width: 50vw;
		height: 100%;
		right: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		padding: 30px;
		padding-right: 15vw;
		.button{
			border: 1px solid #0E77FF;
			color: #0E77FF;
		}
	}

	@media only screen and (max-width: 1300px) {
		.abstractImageLeft {
			right: 60vw;
		}

		.main {
			width: 60vw;
			padding: 30px;
			padding-right: 7vw;
		}
	}

	@media only screen and (max-width: 750px) {
		.abstractImageLeft {
			right: 70vw;
		}

		.main {
			width: 70vw;
			padding: 0;
			padding-right: 3vw;
		}
	}
}
</style>
