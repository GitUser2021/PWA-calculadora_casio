// envio los numeros a una funcion para su control y los operadores a otra funcion.
function send(value) {
   if (power) { // si la calculadora esta en OFF no se envian los valores.
      navigator.vibrate(75);
      if (typeof (value) === 'number' || value == '.') {
         controlNumbers(value)
      } else {
         controlOperations(value)
      }
   }
}