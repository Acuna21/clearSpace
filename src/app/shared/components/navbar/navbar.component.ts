import { Component, computed, inject, OnInit } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { Roles } from '@utils/enums';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isMenuOpen = false;
  
  readonly roles = Roles;
  myRole = computed(() => {
    return this.authServie.userActive()?.role!;
  })

  authServie = inject(AuthService);

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }

}
