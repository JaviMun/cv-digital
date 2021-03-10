function date(){
  let año = new Date();
  let elemento = document.getElementById("fecha");
  let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
  let mes = meses[año.getMonth()]
  elemento.textContent = año.getDate() + " de " + mes + " de " + año.getUTCFullYear();
}

document.addEventListener("DOMLoadedContent", date());

function botonExpandir(){
  let elemento = document.getElementById("boton-expandir");
  if(elemento.textContent === "+"){
    elemento.textContent = "-";
  }else{
    elemento.textContent = "+";
  }
}
