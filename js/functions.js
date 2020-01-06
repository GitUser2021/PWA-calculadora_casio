// envio los numeros a una funcion para su control y los operadores a otra funcion
function send(value) {
   if (typeof (value) === 'number') {
      controlNumbers(value)
   } else {
      if (memory.status_a) {
         dynamicMemory = 'value_a'
      } else {
         dynamicMemory = 'value_b'
      }
      controlOperations(dynamicMemory, value) // esta funcion recibe 2 parametros x eso hago lo del if anterior,
                                             // xq si o si le tengo que pasar un valor,
                                            // en este caso le paso el nombre de la memoria que esta activa.
   }
}
