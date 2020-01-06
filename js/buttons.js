//  constructor de boton 
function Button(value) {
    this.val = value
    this.status = true

    this.value = () => { // retorna el valor del boton solo si su status es true.
        if (this.val == '+' || this.val == '-' || this.val == '*' || this.val == '/') {
            var newthis = this
            buttonsToResolve(this.val, newthis)
            return this.val
        }
        if (this.status) {
            return this.val
        } else {
            console.log('disabled button')
        }
    }
}
// funcion que cambia el valor de todos los operadores ( '+' , '-' , '*' , '/' ) por el de '='
// para que la segunda vez que se presiona alguno de estos , el mismo funcione como el boton '=' y muestre el resultado
function buttonsToResolve(val, newthis) {
    if (newthis.status) {
        newthis.status = false
    } else {
        //newthis.status = true
        send(btn_igual.value())

        function params() {
            if (memory.status_a) { dynamicMemory = 'value_a' } else { dynamicMemory = 'value_b' } // necesario para pasar el parametro a la funcion.
            controlOperations(dynamicMemory, val)
        }

        switch (val) { // luego del igual(=) ejecuto la operacion correspondiente al operador para poder continuar con el ciclo.
            case '+':
                params()
                break;
            case '-':
                params()
                break;
            case '*':
                params()
                break;
            case '/':
                params()
                break;
        }
    }
}


// instanciacion de botones numericos
let btn_0 = new Button(0)
let btn_1 = new Button(1)
let btn_2 = new Button(2)
let btn_3 = new Button(3)
let btn_4 = new Button(4)
let btn_5 = new Button(5)
let btn_6 = new Button(6)
let btn_7 = new Button(7)
let btn_8 = new Button(8)
let btn_9 = new Button(9)

// instanciacion botones de operaciones
let btn_sumar = new Button('+')
let btn_restar = new Button('-')
let btn_multiplicar = new Button('*')
let btn_dividir = new Button('/')
let btn_porcentaje = new Button('%')
let btn_igual = new Button('=')
let btn_dot = new Button('.')

// instanciacion de los botones de funciones
let btn_ac = new Button('allClear')
let btn_c = new Button('c')
