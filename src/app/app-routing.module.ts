import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loggedInGuard } from './shared/guards/logged-in.guard';
import { LoginComponent } from '@pages/login/login.component';
import { AboutComponent } from '@pages/about/about.component';
import { ManageIncidentsComponent } from '@pages/manage-incidents/manage-incidents.component';
import { MyReportsComponent } from '@pages/my-reports/my-reports.component';
import { AddEntityComponent } from '@pages/add-entity/add-entity.component';
import { CitizenIncidentsComponent } from '@pages/citizen-incidents/citizen-incidents.component';
import { publicGuard } from '@guards/public.guard';
import { CreateAccountComponent } from '@pages/create-account/create-account.component';
import { rolesGuard } from '@guards/roles.guard';
import { Roles } from '@utils/enums';

const routes: Routes = [

  { 
    path: 'create-account', 
    component: CreateAccountComponent,
    canActivate: [publicGuard]
  },
  { 
    path: 'login', 
    component: LoginComponent,
    canActivate: [publicGuard]
  },
  { 
    path: 'about',
    component: AboutComponent,
    canActivate: []
  },
  { 
    path: 'incidents', 
    component: ManageIncidentsComponent, 
    canActivate: [loggedInGuard, rolesGuard],
    data: { roles: [Roles.admin, Roles.citizen] }
  },
  { 
    path: 'my-reports', 
    component:MyReportsComponent,
    canActivate: [loggedInGuard, rolesGuard],
    data: { roles: [Roles.citizen] }
  },
  {
    path: 'add-entity',
    component:AddEntityComponent,
    canActivate: [loggedInGuard],
    data: { roles: [Roles.admin] }
  },
  {
    path: 'citizen-incidents',
    component: CitizenIncidentsComponent,
    canActivate: [loggedInGuard],
    data: { roles: [Roles.admin, Roles.operative, Roles.governmental] }
  },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
