import { SecaoBtn } from "../model/SecaoBtn.js";

let botoes = document.querySelectorAll(".secaoDetalhesConta__itemTransacao");
let secoes = document.querySelectorAll(".opcaoTransacao");

const controler = new SecaoBtn(secoes);
botoes.forEach((el) =>
  el.addEventListener("click", () => {
    controler.setid(el.id);
    controler.mostrar();
  })
);
