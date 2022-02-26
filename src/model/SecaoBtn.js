export class ModelSecao {
  constructor(secoes) {
    if (this.constructor == ModelSecao) {
      throw new Error (`você não deveria instanciar um objeto tipo seção diretamente`);
     }
    this._secoes = secoes;
    this._id;
  }
  setid(value) {
    this._id = value;
  }
  get secoes() {
    return this._secoes;
  }
}
