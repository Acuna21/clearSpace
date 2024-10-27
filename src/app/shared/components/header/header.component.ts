import { Component, computed, inject, OnInit } from '@angular/core';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  isMenuOpen = false; 
  
  authService = inject(AuthService);

  userActive = computed<string | null>(() => {
    const email = this.authService.userActive()?.email;
    return email?.split('@')[0] || null;
  });

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout(){
    this.authService.logout();
  }

}
