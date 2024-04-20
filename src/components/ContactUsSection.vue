<template>
	<div class="contact-us-section">
		<img
			src="../assets/images/contact-us-bg-3.svg"
			class="abstract-top-left-image"
		/>
		<img
			src="../assets/images/contact-us-bg-1.svg"
			class="abstract-bottom-left-image"
		/>

		<img
			src="../assets/images/contact-us-bg-2.svg"
			class="abstract-bottom-image"
		/>
		<form @submit.prevent="submitForm">
			<h2 class="section-heading">Send Us message</h2>
			<input
				v-model="email"
				type="email"
				placeholder="Your Email*"
				required
				name="email"
			/>
			<input
				v-model="name"
				type="text"
				placeholder="Your Name*"
				required
				name="name"
			/>
			<input
				v-model="phoneNumber"
				type="tel"
				placeholder="Phone Number*"
				required
				name="phone"
			/>
			<input
				v-model="subject"
				type="text"
				placeholder="Subject"
				name="subject"
			/>
			<textarea
				v-model="message"
				placeholder="Your Message"
				required
				name="message"
			></textarea>
			<div class="accept-terms">
				<input
					v-model="acceptedTerms"
					type="checkbox"
					required
					name="agree-to-terms"
					id="agree-to-terms"
				/>
				<label for="agree-to-terms">
					By sending this message, you confirm that you have read and agreed to
					our privacy-policy.
				</label>
			</div>
			<button class="button">
				Get Started
				<img
					src="../assets/images/arrow-down-sign-to-navigate-white.svg"
					alt=""
				/>
				<img
					src="../assets/images/arrow-down-sign-to-navigate-white.svg"
					alt=""
				/>
			</button>
		</form>
		<div class="extra-space"></div>
	</div>
</template>

<script>
import "../global.scss"
import notify from "../util/notify"
import delay from "../util/delay"
export default {
	name: "ContactUsSection",
	data() {
		return {
			email: "",
			name: "",
			phoneNumber: "",
			subject: "",
			message: "",
			acceptedTerms: false,
		}
	},
	methods: {
		async submitForm() {
			const toast = notify({ type: "loading", message: "Sending Your Message" })
			await delay(1000)
			toast.hideToast()
			notify({ type: "success", message: "Message sent" })
			this.email = ""
			this.name = ""
			this.phoneNumber = ""
			this.subject = ""
			this.message = ""
			this.acceptedTerms = false
		},
	},
}
</script>
<style scoped lang="scss">
.contact-us-section {
	overflow-y: hidden;
	overflow-x: hidden;
	position: relative;

	padding-top: max(14vw, 120px);
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-end;
	.abstract-top-left-image {
		position: absolute;
		top: 0;
		left: 12vw;
		width: max(13vw, 100px);
	}
	.abstract-bottom-left-image {
		position: absolute;
		bottom: 100px;
		left: 0vw;
		width: max(50vw, 600px);
	}
	.abstract-bottom-image {
		width: 100vw;
		position: absolute;
		bottom: calc(100px + calc(-0.67362700228833 * 34vw));
	}
	form {
		@media only screen and (max-width: 600px) {
			margin: auto;
		}
		position: relative;
		z-index: 100;
		width: max(35vw, 400px);

		margin-right: 10vw;
		background: white;
		display: flex;
		flex-direction: column;
		padding: 60px 40px;
		align-items: flex-start;

		-webkit-box-shadow: 0px 14px 105px 11px rgba(150, 179, 212, 0.54);
		-moz-box-shadow: 0px 14px 105px 11px rgba(150, 179, 212, 0.54);
		box-shadow: 0px 14px 105px 11px rgba(150, 179, 212, 0.54);
		input,
		textarea {
			border: none;
			border-bottom: 1px solid black;
			font-size: 19px;
			padding: 10px 20px 10px 0;
			margin: 10px 0;
			font-family: "Poppins", sans-serif;
			width: 100%;
		}
		.button {
			border: 1px solid #c9c9c9;
			background-color: #0e77ff;
			color: white;
		}
		.accept-terms {
			& > input {
				height: 30px;
				width: 30px;
			}
			label {
				display: flex;
				justify-content: center;
				align-items: center;
			}
			display: flex;
			flex-direction: row;
			column-gap: 10px;
			font-size: 10px;
			margin: 30px 0;
		}
	}

	.extra-space {
		height: 100px !important;
		width: 100%;

		background-color: #0e77ff;
	}

	@media only screen and (max-width: 600px) {
		.abstract-bottom-image {
			display: none;
		}
	}
}
</style>
