import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-users',
  templateUrl: './gestion-users.component.html',
  styleUrls: ['./gestion-users.component.css']
})
export class GestionUsersComponent implements OnInit {
  confirm = [ //tableau des objets
    {// first element of table
      utilisateur:"amalbenahmed",
      password:2501489
    },
    {
      utilisateur:"hediaouini",
      password:7412589
    },
    {
      utilisateur:"chaimataleb",
      password:97425863
    },
    {
      utilisateur:"hejerabidi",
      password:78541265
    }
  ] ;//objet json
  

  constructor() { }

  ngOnInit() {
  }

}
