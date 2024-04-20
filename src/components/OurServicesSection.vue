<template>
	<div class="our-services-section">
		<div class="services-selector-wrapper">
			<p class="section-name">
				<img
					src="../assets/images/abstract-triangle-heading.png"
					alt=""
					height="38px"
				/>
				OUR SERVICES
			</p>
			<p class="section-heading">Transforming your ideas into Reality</p>
			<div class="services-selectors">
				<div
					v-for="(service, serviceKey) in services"
					:key="serviceKey"
					:class="{ selected: serviceKey === selectedService }"
					class="service-selector"
				>
					<button @click="selectService(serviceKey)">
						{{ service.heading }}
					</button>
				</div>
			</div>
		</div>
		<div class="services-preview-wrapper">
			<div class="services-preview-card">
				<div class="services-preview">
					<h2>
						<img src="../assets/images/services-heading.svg" />
						<p>{{ services[selectedService].heading }}</p>
					</h2>
					<p class="section-para">
						{{ services[selectedService].description }}
					</p>
					<ul>
						<li
							v-for="(keyPoint, keyPointKey) in services[selectedService]
								.keyPoints"
							:key="selectService + keyPointKey"
						>
							<img src="../assets/images/tick-mark.svg" alt="" />
							<p class="section-para">
								{{ keyPoint }}
							</p>
						</li>
					</ul>
				</div>
			</div>
			<div class="services-preview-blue-bg"></div>
		</div>
	</div>
</template>

<script>
import "../global.scss"
export default {
	name: "OurServicesSection",
	data() {
		return {
			selectedService: "web-dev",
			services: {
				"web-dev": {
					heading: "Web Development",
					description:
						"Web development involves building websites and web applications using various technologies such as HTML, CSS, and JavaScript.",
					keyPoints: [
						"Responsive design ensures that websites work well on all devices.",
						"Optimizing performance is crucial for user experience.",
						"Accessibility standards should be followed for inclusive design.",
					],
				},
				"mobile-dev": {
					heading: "Mobile Development",
					description:
						"Mobile development focuses on creating applications for smartphones and tablets, including both iOS and Android platforms.",
					keyPoints: [
						"Native apps provide the best performance and user experience.",
						"Cross-platform frameworks like React Native allow for code reuse across platforms.",
						"Mobile apps often require integration with backend services for data storage and retrieval.",
					],
				},
				"ui-ux": {
					heading: "UI/UX",
					description:
						"UI/UX design is about creating intuitive interfaces and enhancing user satisfaction by improving the usability and accessibility of products.",
					keyPoints: [
						"User research helps understand the needs and preferences of the target audience.",
						"Wireframing and prototyping are essential for visualizing and testing design ideas.",
						"Usability testing helps identify usability issues and gather feedback for improvements.",
					],
				},
				branding: {
					heading: "Branding",
					description:
						"Branding involves creating a unique identity for a product or company through branding strategies, logos, and visual elements.",
					keyPoints: [
						"Brand consistency across all touchpoints helps build brand recognition and trust.",
						"A strong brand story resonates with customers and differentiates the brand from competitors.",
						"Branding guidelines ensure consistent use of brand elements and maintain brand integrity.",
					],
				},
				"cloud-technology": {
					heading: "Cloud Technology",
					description:
						"Cloud technology enables access to computing resources such as storage, servers, and databases over the internet, providing scalability and flexibility.",
					keyPoints: [
						"Public cloud services like AWS and Azure offer infrastructure on a pay-as-you-go basis.",
						"Hybrid cloud solutions combine on-premises infrastructure with cloud services for greater flexibility.",
						"Cloud security measures such as encryption and access controls protect data and applications from unauthorized access.",
					],
				},
			},
		}
	},

	methods: {
		selectService: function (serviceKey) {
			this.selectedService = serviceKey
		},
	},
}
</script>
<style scoped lang="scss">
.our-services-section {
	background-color: #fafcff;
	display: flex;
	flex-direction: row;

	.services-selector-wrapper {
		margin: 140px 0 30px 0;
		width: 50vw;
		padding: 0 2vw 0 8vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		.services-selectors {
			display: flex;
			flex-direction: row;
			column-gap: 10px;
			row-gap: 20px;
			flex-wrap: wrap;

			.service-selector {
				& > button {
					all: unset;
					cursor: pointer;
					background-repeat: 16px;
					font-size: 17px;
					font-weight: normal;
					padding: 13px 22px;
					background-color: #e5f5ff;
					color: #0e77ff;
					border-radius: 16px;
				}
				&.selected > button {
					background-color: #0e77ff;
					color: white;
				}
			}
		}
	}
	.services-preview-wrapper {
		min-height: 115vh;
		width: 50vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 50px 3vw;
		position: relative;

		.services-preview-card {
			-webkit-box-shadow: -25px 14px 84px -15px rgba(159, 184, 214, 1);
			-moz-box-shadow: -25px 14px 84px -15px rgba(159, 184, 214, 1);
			box-shadow: -25px 14px 84px -15px rgba(159, 184, 214, 1);
			border-radius: 5px;

			padding: 30px 4vw;
			padding-right: 0vw;
			.services-preview {
				h2 {
					display: flex;
					flex-direction: row;
					align-items: center;
					column-gap: 10px;
					position: relative;
					z-index: 10;
					font-size: 40px;
					img {
						height: 100px;
					}
					@media only screen and (max-width: 450px) {
						font-size: 30px;
						img {
							height: 60px;
						}
					}
				}
				p {
					position: relative;
					z-index: 10;
				}

				ul {
					list-style: none;
					padding: 0;
					li {
						position: relative;
						z-index: 10;
						margin-bottom: 10px;
						display: flex;
						flex-direction: row;
						align-items: center;
						column-gap: 10px;
						p {
							padding: 0;
							margin: 0;
						}
					}
				}
			}
		}
		.services-preview-blue-bg {
			display: inline-block;
			width: 50%;
			height: 100% !important;
			position: absolute;
			background: #0e77ff;
			right: 0;
			z-index: 5;
		}
	}

	@media only screen and (max-width: 1000px) {
		flex-direction: column;
		.services-selector-wrapper {
			width: 100%;
		}
		.services-preview-wrapper {
			width: 100%;
			min-height: 20px;
		}
	}
}
</style>
