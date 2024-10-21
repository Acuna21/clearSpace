import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from '@pages/create-account/create-account.component';
import { LoginComponent } from '@pages/login/login.component';
import { AboutComponent } from '@pages/about/about.component';
import { ManageIncidentsComponent } from '@pages/manage-incidents/manage-incidents.component';
import { loggedInGuard } from './shared/guards/logged-in.guard';

const routes: Routes = [
  // { path: 'tasks', component: ''},  // Ruta para la lista de tareas
  { path: 'create-account', component: CreateAccountComponent },  // Ruta para crear una tarea
  { path: 'login', component: LoginComponent },  // Ruta para crear una tarea
  { path: 'about', component: AboutComponent },  // Ruta para crear una 
  { path: 'incidents', component: ManageIncidentsComponent, canActivate: [loggedInGuard] },  // Ruta para crear una tarea
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // Redirige a la lista de tareas por defecto
  { path: '**', redirectTo: '/login' }  // Cualquier ruta no definida redirige a la lista de tareas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
