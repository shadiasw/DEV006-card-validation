import validator from './validator.js';

const inputTarjeta = document.getElementById("inputTarjeta");
//var inputFechaVencimiento = document.getElementById ("selectMes , selectAño");
//var inputCVV = document.getElementById ("inputCCV");
const buttonClick = document.getElementById("buttonClick");

console.log(inputTarjeta);
console.log(buttonClick);

buttonClick.onclick = function (e) {
  // para que no se recargue la pag pero que si se envien datos
  e.preventDefault();
  const valido = validator.isValid(inputTarjeta.value);
  const masket = validator.maskify(inputTarjeta.value);
  console.log(masket);
  inputTarjeta.value = "Valor ingresado desde código"

  if (valido === true) {
    alert("Numero de tarjeta " + masket + " valida, Compra exitosa");
  } else {
    alert("Numero de tarjeta  " + masket + " invalida, Vuelva a intentarlo");
  }



}