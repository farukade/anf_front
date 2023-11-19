import {
	createRouter,
	createWebHashHistory,
	createWebHistory,
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import SingleView from "../views/SingleView.vue";
import SectionView from "../views/SectionView.vue";
import AdminLanding from "../views/AdminLanding.vue";
import NotFoundComponent from "../views/NotFoundComponent.vue";

const routes = [
	{
		path: "/",
		component: HomeView,
	},
	{
		path: "/single",
		component: SingleView,
	},
	{
		path: "/section",
		component: SectionView,
	},
	{
		path: "/admin",
		component: AdminLanding,
	},
	{
		path: "/admin",
		component: AdminLanding,
	},
	{
		path: "/:pathMatch(.*)",
		component: NotFoundComponent,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	// history: createWebHistory(),
	routes,
});

export default router;
