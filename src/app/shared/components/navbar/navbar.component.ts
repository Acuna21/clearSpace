import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { Roles } from '@utils/enums';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isMenuOpen = false;
  
  readonly roles = Roles;
  myRole!:Roles;

  authServie = inject(AuthService);

  ngOnInit(): void {
    this.myRole = this.authServie.userLogin()?.role!;
  }

  toggleMenu(){
    console.log("aca")
    this.isMenuOpen = !this.isMenuOpen;
  }

}
