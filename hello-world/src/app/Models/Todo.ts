export class Todo {
    constructor(
        private _titre? :string,
        private _description? :string,
        private _dateAjout?:string,
        private _dateFin? :string,
    ){}
get titre () :string {
    return this._titre;
}
get description() :string {
    return this._description;
}
get dateAjout() :string {
    return this._dateAjout;
}
get dateFin() :string {
    return this._dateFin;
}

set titre( firstname:string) {
    this._titre;
}
set description(lastname:string)  {
    this._description;
}
set dateAjout(email:string)  {
    this._dateAjout;
}
set dateFin(motDePasse:string)  {
    this._dateFin;
}
}