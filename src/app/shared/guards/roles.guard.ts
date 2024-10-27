import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { Roles } from '@utils/enums';

export const rolesGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const expectedRoles = route.data['roles'] as Roles[];
  const user = authService.userActive();
  if (user && expectedRoles.includes(user.role)) {
    return true;
  }
  router.navigateByUrl('/login');
  return false;
};
