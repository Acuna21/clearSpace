import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loggedInGuard } from './shared/guards/logged-in.guard';
import { LoginComponent } from '@pages/login/login.component';
import { AboutComponent } from '@pages/about/about.component';
import { ManageIncidentsComponent } from '@pages/manage-incidents/manage-incidents.component';
import { MyReportsComponent } from '@pages/my-reports/my-reports.component';
import { AddEntityComponent } from '@pages/add-entity/add-entity.component';
import { CitizenIncidentsComponent } from '@pages/citizen-incidents/citizen-incidents.component';

const routes: Routes = [

  { 
    path: 'create-account', 
    loadComponent: () => import('@pages/create-account/create-account.component').then( c => c.CreateAccountComponent ),
    canActivate: []
  },
  { 
    path: 'login', 
    component: LoginComponent,
    canActivate: []
  },
  { 
    path: 'about',
    component: AboutComponent,
    canActivate: []
  },
  { 
    path: 'incidents', 
    component: ManageIncidentsComponent, 
    canActivate: [loggedInGuard] },
  { 
    path: 'my-reports', 
    component:MyReportsComponent,
    canActivate: [loggedInGuard],
  },
  {
    path: 'add-entity',
    component:AddEntityComponent,
    canActivate: [loggedInGuard],
  },
  {
    path: 'citizen-incidents',
    component: CitizenIncidentsComponent,
    canActivate: [loggedInGuard]
  },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
