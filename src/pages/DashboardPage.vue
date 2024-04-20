<template>
	<main>
		<div class="left">
			<div class="left-top">
				<li class="dashboard-tab active">
					<img src="../assets/images/dashboard-tab-1.svg" alt="Dashboard" />
					<p>Dashboard</p>
				</li>
				<li class="dashboard-tab">
					<img src="../assets/images/dashboard-tab-2.svg" alt="Analytics" />
					<p>Analytics</p>
				</li>
				<li class="dashboard-tab">
					<img src="../assets/images/dashboard-tab-3.svg" alt="Trading" />
					<p>Trading</p>
				</li>
				<li class="dashboard-tab">
					<img src="../assets/images/dashboard-tab-4.svg" alt="Notifications" />
					<p>Notifications</p>
				</li>
			</div>
			<div class="left-bottom">
				<li class="dashboard-tab">
					<img src="../assets/images/dashboard-tab-5.svg" alt="Logout" />
					<p>Logout</p>
				</li>
			</div>
		</div>
		<div class="details">
			<div class="details-heading">
				<div class="left">
					<h1>Dashboard</h1>
					<p>Welcome back, {{ profile.name.first }}</p>
				</div>
				<div class="right">
					<button class="button">
						<img src="../assets/images/add-icon.svg" alt="+" />
						<p>Add Unit</p>
					</button>
					<div class="profile">
						<img :src="profile.image.url" alt="" />
						<p>{{ profile.name.first + " " + profile.name.last }}</p>
					</div>
				</div>
			</div>
			<div class="details-overview">
				<div
					class="overview-part"
					v-for="(details, key) in overview"
					:key="key"
				>
					<h3 class="heading">{{ key.toUpperCase() }}</h3>
					<p class="detail">
						<span class="detail-value">
							{{ selectedCurrency + details.value }}
						</span>
						{{ " " }}
						<span class="detail-change up" v-if="details.change > 0">
							<svg width="20" height="10">
								<polygon points="1,10 19,10 10,0" />
							</svg>

							{{ (details.change * 100).toFixed(2) }} %
						</span>
						<span class="detail-change down" v-if="details.change < 0">
							<svg width="20" height="10">
								<polygon points="1,0 19,0 10,10" />
							</svg>
							{{ (details.change * -100).toFixed(2) }} %
						</span>
					</p>
				</div>

				<div class="overview-part">
					<h3 class="heading">CURRENCIES</h3>
					<div class="curencies-wrapper">
						<div
							class="currency"
							v-for="(details, key) in currencies"
							:key="key"
						>
							<img :alt="key" :src="details.imageUrl" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	name: "DashboardPage",
	data() {
		return {
			profile: {
				name: {
					first: "Andrew",
					last: "Johnstons",
				},
				image: {
					url: "/public-images/profile-image-1.jpg",
				},
			},
			overview: {
				balance: { value: 5900.0, change: 0.0 },
				profits: { value: 950.0, change: 0.56 },
				loses: { value: 450.0, change: -0.26 },
			},
			currencies: {
				USD: { imageUrl: "/public-images/currency-dollar.svg" },
				EUR: { imageUrl: "/public-images/currency-euro.svg" },
				YEN: { imageUrl: "/public-images/currency-yen.svg" },
				BTC: { imageUrl: "/public-images/bitcoin-2.svg" },
			},
			selectedCurrency: "$",
		}
	},
}
</script>

<style lang="scss" scoped>
main {
	font-family: sans-serif;
	width: 100%;
	height: 100vh;
	display: grid;
	grid-template-columns: 180px 1fr;
	grid-template-rows: 1fr;

	& > .left {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 30px 20px;
		box-shadow: 0px 3px 26px #00000017;
		z-index: 10;
		.dashboard-tab {
			cursor: pointer;
			padding: 30px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			img {
				height: 42px;
				width: 42px;
				object-fit: contain;
			}
			p {
				margin: 0;
				font-size: 12px;
			}
			&.active {
				box-shadow: 0px 3px 26px #0000001c;
			}
		}
		.left-top {
		}
		.left-bottom {
		}
	}
	.details {
		padding: 50px;
		height: 100%;
		width: 100%;
		flex-grow: 1;
		background-color: #fcfcfc;
		.details-heading {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			flex-wrap: wrap;
			row-gap: 30px;
			.left {
				h1 {
					font-size: 45px;
					font-weight: 500;
					margin: 0;
				}
				p {
					font-size: 18px;
					font-weight: normal;

					color: #8990ad;
				}
			}
			.right {
				display: flex;
				flex-direction: row;

				align-items: center;
				column-gap: 30px;
				row-gap: 30px;
				flex-wrap: wrap;
				.button {
					background-color: #0f77fa;
					font-size: 18px;
					color: white;
					padding: 18px 24px;
					border-radius: 5px;
					display: flex;
					justify-content: center;
					align-items: center;
					column-gap: 10px;
					p {
						margin: 0;
						padding: 0;
						padding-top: 2px;
					}
					img {
						width: 22px;
						height: 22px;
					}
				}
				.profile {
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
					column-gap: 10px;
					color: #8990ad;
					img {
						height: 58px;
						width: 58px;
						object-fit: cover;
						border-radius: 40px;
					}
				}
			}
		}
		.details-overview {
			padding: 50px 0;
			display: flex;
			flex-direction: row;
			column-gap: 40px;
			justify-content: space-between;
			flex-wrap: wrap;
			.overview-part {
				flex-grow: 1;

				border-right: 1px solid #c5c9d7;
				&:last-child {
					// border-right: none;
				}
				.heading {
					font-size: 16px;
					font-weight: 200;
				}
				.detail {
					display: flex;
					flex-direction: row;
					align-items: center;
					column-gap: 20px;
					.detail-value {
						font-size: 35px;
						font-weight: 300;
					}
					.detail-change {
						&.up {
							color: #0f77fa;
							svg {
								fill: #0f77fa;
							}
						}
						&.down {
							color: #ff4b75;

							svg {
								fill: #ff4b75;
							}
						}
					}
				}
				.curencies-wrapper {
					display: flex;
					flex-direction: row;
					column-gap: 8px;
					.currency {
						cursor: pointer;
						padding: 8px;
						background-color: #e6ecfc;
						height: 40px;
						width: 40px;
						border-radius: 20px;
						img {
							height: 100%;
							width: 100%;
							object-fit: contain;
						}
					}
					img {
					}
				}
			}
		}
	}
}
</style>
