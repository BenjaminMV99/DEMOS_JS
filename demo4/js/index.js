var caja = document.getElementById("caja");
import demo1  from "./modules/demo1.js";
import demo2  from "./modules/demo2.js";

window.saludar = demo1.saludar;
window.calcular = demo2.calcular;

document.getElementById("demo1").addEventListener("click",() => {
    caja.innerHTML = demo1.data;
  });

  document.getElementById("demo1").addEventListener("click",() => {
    caja.innerHTML = demo2.data;
  });

  document.getElementById("demo3").addEventListener("click",() => {
    caja.innerHTML = demo3.data;
  });

