import { ModelSecao } from "../model/SecaoBtn.js";
export class SecaoView extends ModelSecao {
  constructor(secoes) {
    super(secoes);
  }
  mostrar() {
    this.secoes.forEach((el) =>
      el.id.toLowerCase().match(this._id)
        ? el.classList.remove("invisivel")
        : el.classList.add("invisivel")
    );
  }
}
