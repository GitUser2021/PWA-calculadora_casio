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
    }
}

// instanciacion de memoria.
let memory = new Memory

// controlador de numeros.
// los numeros ingresados se van concatenando en la memory.value_a.
// hasta que se ingresa un operador, entonces los siguientes numeros se ingresaran en la memory.value_b.
function controlNumbers(value) {
    if (memory.operation == '') {
        if (memory.value_a == 0) {
            memory.value_a += value
        } else {
            memory.value_a += String(value)
        }
    } else {
        if (memory.operation == '=') {
            memory.operation = ''
            controlOperations_clear() // reset de variables temporales.
            memory.value_a = 0
            memory.value_a += value

        } else { // los numeros ingresados se van concatenando en la memory.value_b.
            memory.status_b = true
            memory.status_a = false
            if (memory.value_b == 0) {
                memory.value_b += value
            } else {
                memory.value_b += String(value)
            }
        }
    }
    render() // mostrar datos en el display.
}

// controlador de operaciones.
function controlOperations(value) {
    if (value == 'AC' || value == 'C') { // filtro para no poner en memory.operation ni 'AC' o 'C' ya que daria problemas.
        switch (value) {
            case 'AC':
                aux_display.show('AC')
                display.clear() // limpio el display.
                memory.reset() // reseteo la memoria al estado original.
                controlOperations_clear() // reset de variables temporales.
                break

            case 'C':
                display.clear()
                if (memory.status_b && memory.value_b != 0) {
                    memory.value_b = 0
                    memory.status_a = true
                    memory.status_b = false
                    aux_display.show(aux_display.data_a)
                } else {
                    aux_display.show('C')
                    memory.value_a = 0
                    aux_display.value = '' // limpio la memoria del display auxiliar.
                    controlOperations_clear() // reset de variables temporales.
                }
                break
        }
    } else {
        if (memory.status_b) {
            resolve() // resuelve las operaciones.
            memory.status_b = false
            memory.status_a = true
            memory.value_b = 0
            memory.operation = value
            controlOperations_clear() // reset de variables temporales.
        } else {
            if (value == '=') {
                if (memory.value_a == 0 && memory.value_b == 0 && memory.operation == '=') {
                    controlOperations_clear() // reset de variables temporales.
                }
                if (controlOperations.prev_number == null) { // variable temporal numero previo.
                    controlOperations.prev_number = memory.value_a
                }
                if (controlOperations.prev_operator == null) { // variable temporal operacion previa.
                    controlOperations.prev_operator = memory.operation
                }
                memory.value_b = controlOperations.prev_number
                memory.operation = controlOperations.prev_operator
                resolve() // resuelve las operaciones.
                memory.status_b = false
                memory.status_a = true
                memory.value_b = 0
                memory.operation = value
            } else {
                memory.operation = value
                controlOperations_clear() // reset de variables temporales.
            }
        }
        render() // mostrar datos en el display.
    }
}

// reset de variables temporales.
function controlOperations_clear() {
    controlOperations.prev_number = null
    controlOperations.prev_operator = null
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

        default:
            break
    }
}

// fix al problema de los decimales ej: 0.1 + 0.2 = 0.30000000000000004
// depaso el valor de toFixed(x) serian la cant. max. de decimales permitidos
function fix_decimal(MAX_DECIMALES) {
    memory.value_a = parseFloat(memory.value_a.toFixed(MAX_DECIMALES))
}