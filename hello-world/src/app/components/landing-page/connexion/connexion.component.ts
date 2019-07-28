import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, MinLengthValidator } from '@angular/forms'
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/Models/User';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  public formConnexion: FormGroup;

  constructor(private _router: Router, private _formBuilder: FormBuilder, private _UserService: UserService) {

    this.formConnexion = this._formBuilder.group({

      email: new FormControl("", [
        Validators.email,
        Validators.required
      ]),

      password: new FormControl("", [
        Validators.minLength(8),
        Validators.required
      ])
    });
  }


  get email() { return this.formConnexion.get('email'); }
  get password() { return this.formConnexion.get('password'); }


  ngOnInit() {
    
  }

  connexion() {
    //console.log('se connecter');
    //console.log(this.formConnexion.value);
    //this._router.navigate(['/user/todo-list']);
    let data = this.formConnexion.value;
    let user = new User(null,null,data.email, data.motDePasse);

    console.log(user);

    this._UserService.connexionUser(user).subscribe(
      (success) => {
        console.log(success);
        localStorage.setItem("token", success.token);

        this._router.navigate(['/user/todo-list']);
      },
      (fail) => {
        console.log(fail);
      }
    );
    //this._router.navigate(['/user/todo-list']);
  }
}
