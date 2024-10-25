import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@models/accounts';
import { ServiceResponse } from '@models/services-response';
import { LocalStorage } from '@utils/local-storage';
import { accounts } from 'src/app/dummy/accounts';
import { RoleManagementService } from './role-management.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  router = inject(Router);
  roleManagementService = inject(RoleManagementService);

  constructor() { }

  isLoggin():boolean {
    return !!this.userLogin();
  }

  userLogin():User | null {
    const user = LocalStorage.getItem<User>('user', true);
    return user || null;
  }

  login(email: string, password: string): ServiceResponse<User>{
    const error = { message: 'Credenciales invalidas', code: 'INVALID_CREDENTIALS' }
    const account = accounts.find( account => account.email === email);
    if (!account) return { error };
    if (account.password !== password) return { error };
    const user = {
      id: account.id,
      email: account.email,
      role: account.role
    };
    LocalStorage.setItem('user', user);
    const urlRedirect = this.roleManagementService.getRedirectUrl();
    console.log('URL Redirect: ', urlRedirect)
    this.router.navigateByUrl(urlRedirect);
    return { data: user } as ServiceResponse<User>
  }

  logout(): void{
    LocalStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  
}
