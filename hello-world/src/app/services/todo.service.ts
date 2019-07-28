import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/Models/Todo'


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private _http: HttpClient) { }
  inscriptionUser(todo: Todo) {
    return this._http.post<any>("http://localhost:3000/user/todo-list",Todo);
  }
  connexionUser(todo: Todo) {
    return this._http.post<any>("http://localhost:3000/user/todo-list",Todo);
  }
}