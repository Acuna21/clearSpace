import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { FooterComponent } from '@components/footer/footer.component';
import { CreateAccountComponent } from '@pages/create-account/create-account.component';
import { LoginComponent } from '@pages/login/login.component';
import { AboutComponent } from '@pages/about/about.component';
import { ManageIncidentsComponent } from '@pages/manage-incidents/manage-incidents.component';
import { ListIncidentsComponent } from '@pages/manage-incidents/components/list-incidents/list-incidents.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyReportsComponent } from './pages/my-reports/my-reports.component';
import { AddEntityComponent } from './pages/add-entity/add-entity.component';
import { CitizenIncidentsComponent } from './pages/citizen-incidents/citizen-incidents.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CreateAccountComponent,
    LoginComponent,
    AboutComponent,
    ManageIncidentsComponent,
    ListIncidentsComponent,
    MyReportsComponent,
    AddEntityComponent,
    CitizenIncidentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
