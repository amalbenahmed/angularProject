export class User {
    constructor(
        private _firstname? :string,
        private _lastname? :string,
        private _email?:string,
        private _motDePasse? :string,
        private _Number?:number
    ){}
get firstname () :string {
    return this._firstname;
}
get lastname() :string {
    return this._lastname;
}
get email() :string {
    return this._email;
}
get motDePasse() :string {
    return this._motDePasse;
}

get Number() :string {
    return this.Number;
}

set firstname( firstname:string) {
    this._firstname;
}
set lastname(lastname:string)  {
    this._lastname;
}
set email(email:string)  {
    this._email;
}
set motDePasse(motDePasse:string)  {
    this._motDePasse;
}

set Number(Number:string)  {
    this.Number;
}
}