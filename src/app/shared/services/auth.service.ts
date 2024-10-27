import { inject, Injectable, signal } from '@angular/core';
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

  userActive = signal<User | null>(null);

  router = inject(Router);
  roleManagementService = inject(RoleManagementService);

  constructor() { }

  isLoggin():boolean {
    return !!this.userActive();
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
    this.userActive.set(user);
    LocalStorage.setItem('user', user);
    const urlRedirect = this.roleManagementService.getRedirectUrl();
    this.router.navigateByUrl(urlRedirect);
    return { data: user } as ServiceResponse<User>
  }

  logout(): void{
    LocalStorage.removeItem('user');
    this.userActive.set(null);
    this.router.navigate(['/login']);
  }

  validateLogin():void{
    const user = LocalStorage.getItem<User>('user', true);
    if (user) this.userActive.set(user);
  }

  
}
