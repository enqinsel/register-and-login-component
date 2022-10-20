import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path : "/",
        name : "HomePage",
        component : () => import("./pages/HomePage.vue")
    },
    {
        path : "/profile",
        name : "ProfilePage",
        component : () => import("./pages/ProfilePage.vue")
    },
    {
        path: "/:pathMatch(.*)*",
        name : "NotFound",
        component : () => import("./pages/NotFound.vue")
    }
] 

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router