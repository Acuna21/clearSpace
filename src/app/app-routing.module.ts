import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './page/create-account/create-account.component';

const routes: Routes = [
  // { path: 'tasks', component: ''},  // Ruta para la lista de tareas
  { path: 'create-account', component: CreateAccountComponent },  // Ruta para crear una tarea
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },  // Redirige a la lista de tareas por defecto
  { path: '**', redirectTo: '/tasks' }  // Cualquier ruta no definida redirige a la lista de tareas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
