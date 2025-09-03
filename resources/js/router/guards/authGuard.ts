import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

export async function authGuard(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  return next();
}
