import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, MinLengthValidator } from '@angular/forms'
import { User } from 'src/app/Models/User';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  public formInscription: FormGroup;

  constructor(private _router: Router, private _formBuilder: FormBuilder, private _UserService: UserService) {

    this.formInscription = this._formBuilder.group({

      FirstName: new FormControl("", [
        Validators.required
      ]),

      LastName: new FormControl("", [
        Validators.required
      ]),

      email: new FormControl("", [
        Validators.email,
        Validators.required
      ]),

      Number: new FormControl("", [
        Validators.minLength(8),
        Validators.required
      ]),

      password: new FormControl("", [
        Validators.minLength(8),
        Validators.required
      ])
    });
  }




  get firstname() { return this.formInscription.get('FirstName'); }
  get lastname() { return this.formInscription.get('LastName'); }
  get Number() { return this.formInscription.get('Number'); }
  get email() { return this.formInscription.get('email'); }
  get motDePasse() { return this.formInscription.get('password'); }


  ngOnInit() {
  }

  Inscription() {
    //console.log('Inscrire');
    //console.log(this.formInscription.value);
    //recuperation des données
    let data = this.formInscription.value;
    let user = new User(data.firstname, data.lastname, data.Number, data.email, data.motDePasse);

    console.log(user);

    this._UserService.inscriptionUser(user).subscribe(
      (success) => {
        console.log(success);
        this._router.navigate(['/']);
      },
      (fail) => {
        console.log(fail);
      }
    );
    //this._router.navigate(['/user/todo-list']);
  }

 
}

