import Home from "@/views/Home.vue";
import type { RouteRecordRaw } from "vue-router";

export const unauthenticatedRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Home,
        meta: { requiresAuth: false },
    }
];
