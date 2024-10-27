import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'clearSpace';

  private authService = inject(AuthService);

  ngOnInit(): void {
    this.authService.validateLogin();
  };


}
