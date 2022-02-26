import { SecaoView } from "../view/secao.js";

let botoes = document.querySelectorAll(".secaoDetalhesConta__itemTransacao");
let secoes = document.querySelectorAll(".opcaoTransacao");

const controler = new SecaoView(secoes);

botoes.forEach((el) =>
  el.addEventListener("click", () => {
    controler.setid(el.id);
    controler.mostrar();
  })
);
