import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SingleView from "../views/SingleView.vue";
import LoginView from "../views/LoginView.vue";
import SectionView from "../views/SectionView.vue";
import AdminLanding from "../views/AdminLanding.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/single",
		name: "single",
		component: SingleView,
	},
	{
		path: "/section",
		name: "section",
		component: SectionView,
	},
	{
		path: "/admin/login",
		name: "login",
		component: LoginView,
	},
	{
		path: "/admin/landing",
		name: "admin",
		component: AdminLanding,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
