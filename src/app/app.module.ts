import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CreateAccountComponent } from './page/create-account/create-account.component';
import { LoginComponent } from './page/login/login.component';
import { AboutComponent } from './page/about/about.component';
import { ManageIncidentsComponent } from './page/manage-incidents/manage-incidents.component';
import { ListIncidentsComponent } from './page/manage-incidents/components/list-incidents/list-incidents.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CreateAccountComponent,
    LoginComponent,
    AboutComponent,
    ManageIncidentsComponent,
    ListIncidentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
