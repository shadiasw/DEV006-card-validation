function isValid(inputTarjeta) {
  const tarjeta = inputTarjeta;
  let contador = 0;
  let suma = 0;
  let duplicar = true;

  //menor longuitud
  //chartAt posiciones
  // pars cadena a entero
  //toString numero a cadena 
  while (contador < tarjeta.length) {

    let numero = parseInt(tarjeta.charAt(contador));
    if (duplicar === true) {
      numero = numero * 2;

      if (numero > 9) {
        numero = numero.toString();
        numero = parseInt(numero.charAt(0)) + parseInt(numero.charAt(1));
      }

      duplicar = false;
    } else {
      duplicar = true;
    }
    suma = suma + numero;
    contador = contador + 1;
  }

  if ((suma % 10) === 0) {
    return true;
  } else {
    return false;
  }
}



function maskify(numeroTarjeta) {
  //10
  //Sarkheilaa
  //######ilaa

  const posicion = numeroTarjeta.length - 4;
  const longitud = numeroTarjeta.length;

  const porción = numeroTarjeta.substring(posicion, longitud);
  //ilaa

  //######
  let numeroTarjetaMasked = "";
  const cantidadNoMostrar = numeroTarjeta.length - 4;
  let contador = 0;
  while (contador < cantidadNoMostrar) {
    numeroTarjetaMasked = numeroTarjetaMasked + "#";
    contador = contador + 1;
  }

  const resultado = numeroTarjetaMasked + porción;
  return resultado;

}

const validator = {
  isValid: isValid,
  maskify: maskify
}


export default validator;
