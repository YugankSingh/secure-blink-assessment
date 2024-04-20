<template>
	<div class="footer-section">
		<div class="footer-left">
			<p>
				Lorem Finaldream rure dolor in reprehenderit in voluptate velit esse
				cillum dolore e uis nostrud exercitation isi ut aliquip ex ea commodo
				consequat.
			</p>
			<div class="socials">
				<a href=""><img src="../assets/images/facebook.svg" alt="" /></a>
				<a href=""><img src="../assets/images/twitter.svg" alt="" /></a>
				<a href=""><img src="../assets/images/instagram.svg" alt="" /></a>
			</div>
		</div>
		<div class="footer-right">
			<div class="section">
				<p class="section-heading">Our Services</p>
				<div class="services-separator"></div>
				<a href="">Web development</a>
				<a href="">Mobile development</a>
				<a href="">Cloud Technologies</a>
				<a href="">UI/UX Designs</a>
			</div>
			<div class="section">
				<p class="section-heading">Our Links</p>
				<div class="services-separator"></div>
				<a href="">Terms and Conditions</a>
				<a href="">Privacy Policy</a>
				<a href="">Imprint</a>
				<a href="">Legal</a>
			</div>
			<div class="section">
				<p class="section-heading">Contact Us</p>
				<div class="services-separator"></div>
				<a href=""
					><img src="../assets/images/location-marker.svg" alt="" />Al. Dummyodl
					124/23 floor 123 Banswara Street, 02-577 India.</a
				>
				<a href=""
					><img src="../assets/images/phone-icon.svg" alt="" />00 1800 245
					453</a
				>
				<a href=""
					><img src="../assets/images/mail-icon.svg" alt="" />hello@inkyy.com</a
				>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "FooterSection",
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer-section {
	background-color: #0e77ff;
	color: white;
	display: flex;
	flex-direction: row;
	font-size: 15px;
	font-weight: 300;
	padding: 0 60px 100px 60px;
	flex-wrap: wrap;
	column-gap: 80px;
	row-gap: 60px;
	.footer-left {
		display: flex;
		flex-direction: column;
		max-width: 600px;
		.socials {
			display: flex;
			flex-direction: row;
			align-items: center;
			column-gap: 13px;
			a {
				height: 45px;
				width: 45px;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 23px;
				border: 2px solid white;
				img {
				}
			}
		}
	}
	.footer-right {
		display: flex;
		flex-direction: row;

		column-gap: 50px;
		row-gap: 50px;
		flex-wrap: wrap;
		.section {
			display: flex;
			flex-direction: column;
			row-gap: 12px;
			max-width: 250px;
			.section-heading {
				color: white;
				font-size: 18px;
				font-weight: 500;
			}
			.services-separator {
				display: inline-block;
				height: 2px;
				width: 40px;
				background: #21b3ff;
			}
			a {
				display: flex;
				flex-direction: row;
				align-items: center;
				column-gap: 10px;
			}
		}
	}
	a {
		text-decoration: none;
		font-size: 15px;
		font-weight: 300;
		color: white;
	}
}
</style>
