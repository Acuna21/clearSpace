import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { RoleManagementService } from '@services/role-management.service';
import { LocalStorage } from '@utils/local-storage';
import { User } from '@models/accounts';

export const publicGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const user = LocalStorage.getItem<User>('user', true);
  if (user) {
    const roleManagementService = inject(RoleManagementService);
    const redirectUrl = roleManagementService.getRedirectUrl()
    router.navigateByUrl(redirectUrl);
    return false
  }
  return true;
};
