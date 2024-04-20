<template>
	<div class="hero-section">
		<nav>
			<div class="nav-left"><h2>Logo</h2></div>
			<div class="nav-right">
				<ul>
					<router-link class="nav-item-remove-on-small" to="">About</router-link>
					<router-link class="nav-item-remove-on-small" to="">Services</router-link>
					<router-link class="nav-item-remove-on-small" to="">Case Study</router-link>
					<router-link class="nav-item-remove-on-small" to="">Testimonials</router-link>
					<router-link to="">Contact</router-link>
					<router-link to="/login" class="nav-action-important">Login</router-link>
				</ul>
			</div>
		</nav>
		<div class="hero-main">
			<h1>Lorem Ipsum is simply dummy text of the printing and typesetting.</h1>
			<p>
				Our products are fully custom-made, built with the latest technologies
				and cloud-architectures.
			</p>
			<button class="button">
				Get Started
				<img src="../assets/images/arrow-down-sign-to-navigate.svg" alt="" />
				<img src="../assets/images/arrow-down-sign-to-navigate.svg" alt="" />
			</button>
		</div>
	</div>
</template>

<script>
import "../global.scss"
export default {
	name: "HeroSection",
}
</script>
<style scoped lang="scss">
nav {
	background-color: #0e77ff;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 30px 15vw;
	overflow-x: hidden;
	.nav-left {
	}
	.nav-right {
		ul {
			list-style: none;
			display: flex;
			flex-direction: row;
			column-gap: 30px;
			align-items: center;

			a {
				color: white;
				text-decoration: none;
				font: normal normal normal 18px/27px Poppins;
				letter-spacing: 0px;
			}
			a.nav-action-important {
				padding: 14px 55px;
				border-radius: 5px;
				background-color: white;
				color: black;
			}
		}
	}

	@media only screen and (max-width: 1300px) {
		padding: 30px 7vw;
	}
	@media only screen and (max-width: 1000px) {
		.nav-item-remove-on-small {
			display: none;
		}
	}
	@media only screen and (max-width: 440px) {
		a {
			display: none;
		}
		a.nav-action-important {
			display: inline-block;
		}
	}
}
.hero-section {
	margin-bottom: 40px;
	min-height: 100vh;
	width: 100%;
	background-image: url("../assets/images/hero-bg.svg");

	background-position: right 1px bottom -1vh;
	background-size: 101vw auto;
	background-repeat: no-repeat;
	color: white;
	display: flex;
	flex-direction: column;

	background-color: #0e77ff;
	@media only screen and (max-width: 570px) {
		background-position: right -14vh bottom -0vh;
		background-size: auto 50vh;
		min-height: calc(100vh + 100px);
	}
}
.hero-main {
	flex-grow: 1;
	width: 60vw;
	padding: 30px 10vw;
	height: 100%;
	& > * {
		margin: 0;
		margin-top: 40px;
	}
	h1 {
		font-size: 3.1vw;
		font-weight: 600;
		line-height: 1em;
	}
	p {
		color: #9abfff;
		font-size: 17px;
		font-weight: 400;
	}

	@media only screen and (max-width: 1300px) {
		width: 70vw;
		h1 {
			font-size: 40px;
		}
	}
	@media only screen and (max-width: 800px) {
		width: 85vw;
	}
	@media only screen and (max-width: 570px) {
		width: 100vw;

		& > * {
			margin: 0;

			margin-top: 30px;
		}
		h1 {
			font-size: 35px;
		}
	}
}
</style>
