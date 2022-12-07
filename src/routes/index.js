import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from "./Home"
import About from "./About"
import LogIn from "./LogIn"


export default createRouter({
	// history: createWebHashHistory(),
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			component: Home
		},
		{
			path: "/about",
			component: About,
			meta:{
				requiresAuth: true
			}
		},
		{
			path:"/login",
			component: LogIn,
		},
	]
})