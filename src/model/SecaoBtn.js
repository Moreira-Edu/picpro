export class SecaoBtn {
  constructor(secoes) {
    this._secoes = secoes;
    this._id;
  }
  setid(value) {
    this._id = value;
  }
  get secoes() {
    return this._secoes;
  }
  mostrar() {
    this._secoes.forEach((el) =>
      el.id.toLowerCase().match(this._id)
        ? el.classList.remove("invisivel")
        : el.classList.add("invisivel")
    );
  }
}
