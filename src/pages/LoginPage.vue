<template>
	<div class="login-page">
		<img
			class="abstractImageLeft"
			src="../assets/images/abstract-image-website.svg"
		/>
		<form class="main" @submit.prevent="submitForm">
			<p class="section-heading">Login To Access Dashboard</p>

			<div class="input-wrapper">
				<div class="input-label-wrapper">
					<label for="email">Email<span class="red">*</span></label>
				</div>
				<input
					v-model="username"
					type="email"
					name="email"
					id="email"
					required
				/>
			</div>

			<div class="input-wrapper">
				<div class="input-label-wrapper">
					<label for="password">Password<span class="red">*</span></label>
					<a href="" class="red">Forgot Password?</a>
				</div>
				<input
					v-model="password"
					type="password"
					name="password"
					id="password"
					required
				/>
			</div>

			<button class="button">
				Login
				<img
					src="../assets/images/arrow-down-sign-to-navigate-blue.svg"
					alt=""
				/>
				<img
					src="../assets/images/arrow-down-sign-to-navigate-blue.svg"
					alt=""
				/>
			</button>
		</form>
	</div>
</template>

<script>
import notify from "../util/notify"
import delay from "../util/delay"
export default {
	name: "LoginPage",
	data() {
		return {
			username: "",
			password: "",
		}
	},
	components: {},
	methods: {
		async submitForm() {
			const toast = notify({ type: "loading", message: "Logging In..." })
			await delay(1000)
			toast.hideToast()
			const success = Math.random() < 0.49
			if (!success) {
				notify({ type: "error", message: "Invalid Username or Password." })
				return
			}
			notify({ type: "success", message: "Logged In." })
			this.$router.push('/dashboard');
		},
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.login-page {
	overflow-x: hidden;
	overflow-y: hidden;
	min-height: 100vh;
	position: relative;
	.abstractImageLeft {
		height: 100%;
		position: absolute;
		right: calc(450px + 8vw);
	}
	.main {
		z-index: 10;
		position: absolute;
		width: calc(450px + 8vw);
		height: 100%;
		right: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		padding: 30px;
		padding-right: 8vw;
		.button {
			border: 1px solid #0e77ff;
			color: #0e77ff;
		}
		.input-wrapper,
		.button {
			margin-top: 50px;
		}
		.input-wrapper {
			width: 100%;
			.input-label-wrapper {
				width: 100%;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				.red {
					color: #ea1010;
					text-decoration: none;
				}
			}
			input {
				width: 100%;
				font-size: 20px;
				padding: 10px;
			}
		}
	}

	@media only screen and (max-width: 500px) {
		.main {
			width: 100%;
			padding: 30px;
			margin: auto;
		}
	}

	@media only screen and (max-width: 750px) {
		// .abstractImageLeft {
		// 	right: 70vw;
		// }

		// .main {
		// 	width: 70vw;
		// 	padding: 0;
		// 	padding-right: 3vw;
		// }
	}
}
</style>
