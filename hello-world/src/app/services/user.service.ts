import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/Models/User';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }
  inscriptionUser(user: User) {
    return this._http.post<any>("http://localhost:3000/user/inscription",User);
  }
  connexionUser(user: User) {
    return this._http.post<any>("http://localhost:3000/user/connexion",User);
  }
}
