// constructor de memoria.
function Memory() {
    this.value_a = 0 // valor memoria a.
    this.value_b = 0 // valor memoria b.

    this.status_a = true // indica si la memoria esta activa.
    this.status_b = false // indica si la memoria esta activa.

    this.operation = '' // indica el valor de la operacion (suma,resta,etc).
    this.reset = () => { // reseta la memoria a su estado original.
        this.value_a = 0
        this.value_b = 0
        this.operation = ''
        this.status_a = true
        this.status_b = false
        aux_display.memory_reset() // limpio la memoria del display auxiliar.
        controlOperations.prev_number = null
        controlOperations.prev_operator = null
        enable_operators(['all'])
    }
    this.reset.mem_b = () => {
        memory.value_b = 0
        memory.status_a = true
        memory.status_b = false
    }
}

// instanciacion de memoria.
let memory = new Memory

// controlador de numeros.
// los numeros ingresados se van concatenando en la memory.value_a.
// hasta que se ingresa un operador, entonces los siguientes numeros se ingresaran en la memory.value_b.
function controlNumbers(value) { ////////////////
    if (controlOperations.prev_operator == '=') {
        memory.reset()
    }

    if (memory.operation == '') {
        if (memory.value_a == 0) {
            memory.value_a += value
        } else {
            memory.value_a += String(value)
        }
    } else {
        memory.status_a = false
        memory.status_b = true

        if (memory.value_b == 0) {
            memory.value_b += value
        } else {
            memory.value_b += String(value)
        }
    }
    render() // mostrar datos en el display.
}

// controlador de operaciones.
function controlOperations(value) {
    controlOperations.prev_operator = value

    switch (value) { // filtro para no poner en memory.operation ni 'AC' o 'C' ya que daria problemas.
        case '=':
            if (memory.operation == '') {
                return
            } else {
                if (memory.status_a) {
                    ///////controlOperations.prev_operator = value
                    if (memory.value_b == 0) {
                        memory.value_b = memory.value_a
                    }
                    resolve()
                    break
                } else {
                    controlOperations.prev_operator = value
                    resolve()
                    render()
                    memory.reset.mem_b()
                    aux_display.memory_reset()
                    memory.operation = ''
                    return
                }
            }

        case 'AC':
            aux_display.show('AC')
            display.clear() // limpio el display.
            memory.reset() // reseteo la memoria al estado original.
            return // salgo de la funcion.

        case 'C':
            display.clear()
            if (memory.status_b) {
                memory.reset.mem_b() // solo borro la memory_value_b.
                aux_display.show(aux_display.data_a)
                return // salgo de la funcion.
            } else {
                aux_display.show('C')
                memory.reset() // reseteo la memoria al estado original.
                return // salgo de la funcion.
            }

        case '%':
            if (memory.status_a) {
                memory.operation = controlOperations.prev_operator
                resolve()
                aux_display.data_a += memory.operation
                controlOperations.prev_operator = '='
                memory.operation = '='
                break // salgo de la funcion.
            } else {
                var temp = memory.operation // swap de variables.
                memory.operation = controlOperations.prev_operator
                controlOperations.prev_operator = temp
                aux_display.data_b += memory.operation // concateno el %, resuelvo y concateno el resultado ej: 10 + 50% (5) = 15
                resolve()
                aux_display.data_b += ' (' + memory.value_b + ') '
                memory.reset.mem_b() // solo borro la memory_value_b.
                memory.operation = ''
                controlOperations.prev_operator = '='
            }
            break

        default: // se controlan los operadores ( + , - , * , / ).
            if (memory.operation == '' && memory.value_a == 0) {
                resolve()
                memory.status_a = true
                memory.status_b = false
                memory.operation = value
            } else {
                if (memory.status_a && memory.value_b != 0) {
                    memory.value_b = 0
                } else {
                    resolve()
                    memory.value_b = 0
                    memory.status_a = true
                    memory.status_b = false
                    memory.operation = value
                    break
                }
            }
            break
    }

    render() // mostrar datos en el display.  

    if (controlOperations.prev_operator == '=') { // limpio la memoria del display auxiliar.
        aux_display.data_b = ''
        aux_display.value = ''
    }
}

// resuelve las operaciones.
function resolve() {
    switch (memory.operation) {
        case '+':
            memory.value_a = parseFloat(memory.value_a) + parseFloat(memory.value_b)
            fix_decimal(MAX_DECIMALES)
            break

        case '-':
            memory.value_a = parseFloat(memory.value_a) - parseFloat(memory.value_b)
            fix_decimal(MAX_DECIMALES)
            break

        case '*':
            memory.value_a = parseFloat(memory.value_a) * parseFloat(memory.value_b)
            fix_decimal(MAX_DECIMALES)
            break

        case '/':
            memory.value_a = parseFloat(memory.value_a) / parseFloat(memory.value_b)
            fix_decimal(MAX_DECIMALES)
            break

        case '%':
            memory.value_a = parseFloat(memory.value_a)
            if (memory.status_a) {
                memory.value_a = parseFloat(memory.value_a) / 100
                return // salgo de la funcion.
            } else {
                if (controlOperations.prev_operator == '+' || controlOperations.prev_operator == '-') {
                    memory.value_b = memory.value_a * (parseFloat(memory.value_b) / 100)
                    memory.operation = controlOperations.prev_operator // devuelvo el operador (+ o - en este caso).
                    resolve()
                } else {
                    memory.value_b = (parseFloat(memory.value_b) / 100)
                    memory.operation = controlOperations.prev_operator // devuelvo el operador (* o / en este caso).
                    resolve()
                }
            }
            fix_decimal(MAX_DECIMALES)
            break

        default:
            break
    }
    // mensaje si el resultado es infinito.
    if (memory.value_a == 'Infinity') {
        ref_aux_display.innerHTML = ''
        ref_display.innerHTML = '<span id = "error">Numero infinito!</span>'
        memory.reset()
        aux_display.data_a = ''
        throw Error('Numero infinito!')
    }
}

// fix al problema de los decimales ej: 0.1 + 0.2 = 0.30000000000000004
// depaso el valor de toFixed(x) serian la cant. max. de decimales permitidos
function fix_decimal(MAX_DECIMALES) {
    memory.value_a = parseFloat(memory.value_a.toFixed(MAX_DECIMALES))
}

// para limitar la cant. de digitos en pantalla.
function check_max_numbers() {
    if (String(memory.value_a).length > MAX_NUMBERS) {
        if (memory.status_a) {
            display.show(String(memory.value_a).slice(0, MAX_NUMBERS))
        }
        if (memory.status_b) {
            display.show(String(memory.value_b).slice(0, MAX_NUMBERS))
        }
    }
}