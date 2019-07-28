import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/landing-page/home/home.component';
import { ConnexionComponent } from './components/landing-page/connexion/connexion.component';
import { InscriptionComponent } from './components/landing-page/inscription/inscription.component';
import { AjoutComponent } from './components/user/ajout/ajout.component';
import { ModifComponent } from './components/user/modif/modif.component';
import { TodoListComponent } from './components/user/todo-list/todo-list.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { GestionUsersComponent } from './components/admin/gestion-users/gestion-users.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,

  },
  {
    path: 'connexion',
    component: ConnexionComponent,
  },
  {
    path: 'inscription',
    component: InscriptionComponent,
  },
  {
    path: 'user/todo-list',
    component: TodoListComponent,
  },
  {
    path: 'user/todo-ajout',
    component: AjoutComponent,
  },
  {
    path: 'user/todo-modif',
    component: ModifComponent,
  },
  {
    path: 'user/profile',
    component: ProfileComponent,
  },
  {
    path: 'admin/gestion-users',
    component: GestionUsersComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
