import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/landing-page/home/home.component';
import { NavbarComponent } from './components/landing-page/navbar/navbar.component';
import { FooterComponent } from './components/landing-page/footer/footer.component';
import { TodoListComponent } from './components/user/todo-list/todo-list.component';
import { InscriptionComponent } from './components/landing-page/inscription/inscription.component';
import { AjoutComponent } from './components/user/ajout/ajout.component';
import { ModifComponent } from './components/user/modif/modif.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { GestionUsersComponent } from './components/admin/gestion-users/gestion-users.component';
import { ConnexionComponent } from './components/landing-page/connexion/connexion.component';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { UserService } from './services/user.service';
import {HttpClientModule}from '@angular/common/http';
import { TodoService} from './services/todo.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    TodoListComponent,
    InscriptionComponent,
    AjoutComponent,
    ModifComponent,
    ProfileComponent,
    GestionUsersComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
