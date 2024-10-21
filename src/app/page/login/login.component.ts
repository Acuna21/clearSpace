import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage } from 'src/app/shared/utils/local-storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  router = inject(Router);

  login(){
    LocalStorage.setItem('isLogged', true);
    this.router.navigate(['/incidents']);
  }

}
