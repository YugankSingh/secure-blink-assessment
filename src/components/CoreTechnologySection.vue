<template>
	<div class="core-technology-section">
		<div class="padding-creator"></div>
		<img
			src="../assets/images/abstract-triangles-2.svg"
			class="top-left-abstract-image"
		/>
		<p class="section-heading">Core Technologies</p>
		<p class="section-para">
			Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex
			odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque
			habitant.
		</p>
		<div class="choose-technology-area-wrapper">
			<div
				v-for="(technologyArea, technologyKey) in technologyAreas"
				:key="technologyKey"
				class="choose-technology-area"
			>
				<div
					class="choose-technology-area-button"
					:class="{ 'active-technology' : technologyKey === selectedTechnologyKey }"
					@click="selectTechonology(technologyKey)"
				>
					{{ technologyArea.name }}
				</div>
				<div
					class="choose-technology-area-separator"
					v-if="technologyKey !== 'marketing'"
				></div>
			</div>
		</div>
		<div class="techology-area-images">
			<div
				v-for="(image, imageKey) in technologyAreas[selectedTechnologyKey]
					.images"
				:key="image + imageKey"
				class="technology-area-image"
			>
				<img :src="image" />
			</div>
		</div>
	</div>
</template>

<script>
import "../global.scss"
export default {
	name: "CoreTechnologySection",
	data() {
		return {
			selectedTechnologyKey: "design",
			technologyAreas: {
				design: {
					name: "Design",
					images: [
						"/public-images/technology-1.svg",
						"/public-images/technology-2.svg",
						"/public-images/technology-3.svg",
						"/public-images/technology-4.svg",
						"/public-images/technology-5.svg",
						"/public-images/technology-6.svg",
						"/public-images/technology-7.svg",
						"/public-images/technology-8.svg",
						"/public-images/technology-9.svg",
						"/public-images/technology-10.svg",
						"/public-images/technology-11.svg",
					],
				},
				development: {
					name: "Development",
					images: [
						"/public-images/technology-12.svg",
						"/public-images/technology-11.svg",

						"/public-images/technology-9.svg",
						"/public-images/technology-8.svg",
						"/public-images/technology-7.svg",
						"/public-images/technology-6.svg",
						"/public-images/technology-5.svg",
						"/public-images/technology-4.svg",
						"/public-images/technology-3.svg",
						"/public-images/technology-2.svg",
						"/public-images/technology-1.svg",
					],
				},
				marketing: {
					name: "Marketing",
					images: [
						"/public-images/technology-9.svg",
						"/public-images/technology-3.svg",
						"/public-images/technology-5.svg",
						"/public-images/technology-2.svg",
						"/public-images/technology-11.svg",
						"/public-images/technology-1.svg",
						"/public-images/technology-6.svg",

						"/public-images/technology-10.svg",
						"/public-images/technology-12.svg",
						"/public-images/technology-7.svg",
						"/public-images/technology-8.svg",
					],
				},
			},
		}
	},

	methods: {
		selectTechonology: function (technologyKey) {
			this.selectedTechnologyKey = technologyKey
		},
	},
}
</script>
<style scoped lang="scss">
.core-technology-section {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	position: relative;
	text-align: center;
	padding: 0 40px;
	overflow-x: hidden;

	.padding-creator {
		height: 300px;
	}

	background-color: #fafcff;
	.top-left-abstract-image {
		position: absolute;
		width: max(500px, 20vw);
		left: -100px;
		top: 0;
	}
	& > .section-para {
		max-width: 800px;
	}
	.choose-technology-area-wrapper {
		display: flex;
		flex-direction: row;
		column-gap: 20px;
		row-gap: 10px;

		padding: 20px 55px;
		border-radius: 230px;
		-webkit-box-shadow: 0px 14px 105px 11px rgba(150, 179, 212, 0.54);
		-moz-box-shadow: 0px 14px 105px 11px rgba(150, 179, 212, 0.54);
		box-shadow: 0px 14px 105px 11px rgba(150, 179, 212, 0.54);
		.choose-technology-area {
			font-size: 18px;
			display: flex;
			flex-direction: row;
			column-gap: 20px;
			row-gap: 10px;
			.choose-technology-area-button {
				cursor: pointer;
				&.active-technology{
					color: #0e77ff;
				}
			}
			.choose-technology-area-separator {
				display: inline-block;
				width: 2px;
				height: 100%;
				background-color: black;
			}
		}

		@media only screen and (max-width: 500px) {
			border-radius: 10px;
			flex-direction: column;
			.choose-technology-area {
				flex-direction: column;
				.choose-technology-area-separator {
					height: 2px;
					width: 100%;
				}
			}
		}
	}
	.techology-area-images {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		max-width: 900px;
		column-gap: 13px;
		row-gap: 13px;
		margin-top: 70px;
		margin-bottom: 140px;
		justify-content: center;
		.technology-area-image {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			border: 1px solid #0e77ff;
			padding: 20px;
			background-color: white;
			border-radius: 9px;
			img {
				height: 50px;
				width: 50px;
				object-fit: contain;
			}
		}
	}
}
</style>
