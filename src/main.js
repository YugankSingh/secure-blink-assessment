import { createApp } from "vue"
import App from "./App.vue"
import HomePage from "./pages/HomePage.vue"
import LoginPage from "./pages/LoginPage.vue"
import DashboardPage from "./pages/DashboardPage.vue"
import { createWebHistory, createRouter } from "vue-router"

const routes = [
	{ path: "/", component: HomePage },
	{ path: "/login", component: LoginPage },
	{ path: "/dashboard", component: DashboardPage },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

createApp(App).use(router).mount("#app")
