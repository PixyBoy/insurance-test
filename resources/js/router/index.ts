import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { unauthenticatedRoutes } from './unauthenticatedRoutes';
import { authGuard } from './guards/authGuard';

const routes: Array<RouteRecordRaw> = [
  ...unauthenticatedRoutes
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({ top: 0 }),
  routes
})
router.beforeEach(authGuard);
export default router
