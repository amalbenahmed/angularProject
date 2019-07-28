import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt' ;

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos = [ //tableau des objets
    {// first element of table
      numero:1,
      titre:"Regarder video Angular",
      dateAjout:"15/07/2019"
    },
    {
      numero:2,
      titre:"regarder video html",
      dateAjout:"18/07/2019"
    },
    {
      numero:3,
      titre:"regarder video js",
      dateAjout:"20/07/2019"
    },
    {
      numero:4,
      titre:"lire article",
      dateAjout:"21/07/2019"
    },
    {
      numero:5,
      titre:"finir le projet",
      dateAjout:"23/07/2019"
    }
  ] ;//objet json
  
  dones = [ //tableau des objets
    {// first element of table
      numero:1,
      titre:"Regarder video Angular terminee",
      dateAjout:"15/07/2019",
      dateFin:"17/07/2019"
    },
    {
      numero:2,
      titre:"le video html terminee",
      dateAjout:"18/07/2019",
      dateFin:"20/07/2019"
    },
    {
      numero:3,
      titre:"regarder video js terminee",
      dateAjout:"20/07/2019",
      dateFin:"21/07/2019"
    }
  ] ;

  constructor(private _router: Router) { }

  ngOnInit() {
    let token = localStorage.getItem("token");
    console.log(token);
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    console.log(decodedToken);
  }
  terminer(todo) {
    console.log(todo);
    let indice = this.todos.indexOf(todo);
    this.todos.splice(indice,1);
    todo.dateFin="";
    this.dones.push(todo);

  }
  modifier() {
    console.log('modifer todo');
    this._router.navigate(['/user/todo-modif']);
  }
  supprimer(todo) {//elle prend les parametres de l'objet todo
    console.log(todo);
    let indice = this.todos.indexOf(todo);
    this.todos.splice(indice,1);
  }
  supprimer1(done) {
    console.log(done);
    let indice = this.dones.indexOf(done);
    this.dones.splice(indice,1);
  }
}

