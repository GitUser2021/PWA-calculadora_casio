// envio los numeros a una funcion para su control y los operadores a otra funcion.
function send(value) {
   if (typeof (value) === 'number' || value == '.') {
      controlNumbers(value)
   } else {
      controlOperations(value)
   }
}
