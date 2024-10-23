import { CanActivateFn, Router } from '@angular/router';
import { LocalStorage } from '../utils/local-storage';
import { inject } from '@angular/core';

export const loggedInGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const user = LocalStorage.getItem('user');
  if (!user) {
    router.navigateByUrl('/login');
    return false
  }
  return true;
};
