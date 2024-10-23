import { Injectable } from '@angular/core';
import { User } from '@models/accounts';
import { Roles } from '@utils/enums';
import { LocalStorage } from '@utils/local-storage';

@Injectable({
  providedIn: 'root'
})
export class RoleManagementService {

  constructor() { }

  getRedirectUrl():string{
    const user = LocalStorage.getItem<User>('user', true);
    console.log(user);
    const role = user.role;
    console.log('Role: ', role);
    switch(role){
      case Roles.citizen:
      case Roles.admin:
        return '/incidents';
      case Roles.governmental:
      case Roles.operative:
        return '/citizen-incidents';
      default:
        return '/login';
    }
  }
}
