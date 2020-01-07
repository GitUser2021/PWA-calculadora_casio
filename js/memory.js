// constructor de memoria
function Memory() {
    this.value_a = '' // valor memoria a
    this.value_b = '' // valor memoria b

    this.status_a = true // indica si la memoria esta activa
    this.status_b = false // indica si la memoria esta activa

    this.operation = '' // indica el valor de la operacion (suma,resta,etc)
    this.reset = () => { // reseta la memoria a su estado original
        this.value_a = ''
        this.value_b = ''
        this.operation = ''
        this.status_a = true
        this.status_b = false
    }
    this.clear = () => { // limpia la memoria activa unicamente, si la memoria activa es la "a" directamente se hace un reset
        if (this.value_a != '' && this.value_b != '') {
            this.value_b = ''
        } else if (this.value_a != '' && this.value_b == '') {
            this.reset()
        }
    }
}

// instanciacion de memoria
let memory = new Memory

// controlador recibe datos y los redirecciona a la memoria
function controlNumbers(value) {
    if (memory.status_a) { // determino cual memoria esta activa para utilizar , por defecto la primera es la memory_a
        // control_memory_a(value)
        control_memory(Object.keys(memory)[0], value)
    } else {
        // control_memory_b(value)
        control_memory(Object.keys(memory)[1], value)
    }
}

// controla dinamicamente la memoria alternando entre memory.value_a y .value_b , depende el parametro recibido.
function control_memory(dynamicMemory, value) {
    if (memory[dynamicMemory].length < MAX_NUMBERS) { // maximo los numeros indicados en la constante MAX_NUMBERS, sino error
        if (typeof (value) === 'number') {
            memory[dynamicMemory] += String(value) // pasar a string para que se concatenen los numeros
            display.show(memory[dynamicMemory])
        } else {
            controlOperactions(dynamicMemory, value) // funcion para los operadores
        }
    } else { display.show(`<span id="error">Error Max Number ${MAX_NUMBERS}</span>`) }
}

// funcion para operaciones
function controlOperations(dynamicMemory, value) {
    switch (value) {
        case 'c':
            console.log('c')
            aux_display.clear() // limpio el display auxiliar
            display.show(0)
            btn_sumar.status = true // habilito el boton 
            btn_restar.status = true // habilito el boton 
            btn_multiplicar.status = true // habilito el boton 
            btn_dividir.status = true // habilito el boton 
            memory.clear()
            break;
        case 'allClear':
            console.log('allClear')
            aux_display.clear() // limpio el display auxiliar
            memory.reset(); display.show(0) // si se presiono el boton ac se resetea la memoria, valores y estados vuelven al estado original.
            btn_dot.status = true // habilito el boton 
            break;
        case '.':
            console.log('.')
            btn_dot.status = false // deshabilito el boton para que no se pueda repetir los '.'
            if (memory[dynamicMemory] == 0) {
                value = '0.'
            }
            memory[dynamicMemory] += String(value) // pasar a string para que se concatenen los numeros // ****creo esta al pedo xq el "." ya es un string*******
            display.show(memory[dynamicMemory])
            break
        case '+':
            console.log('+')
            aux_display.show('+') // muestra en el display auxiliar el operador
            btn_dot.status = true // habilito el boton 
            memory.status_a = false // invierte los status para cambiar de memoria
            memory.status_b = true
            memory.value_a = parseFloat(memory.value_a) // paso a numero el valor final de memory_a
            memory.operation = value // le paso el operador utilizado a la memoria
            break
        case '-':
            console.log('-')
            aux_display.show('-') // muestra en el display auxiliar el operador
            btn_dot.status = true // habilito el boton 
            memory.status_a = false // invierte los status para cambiar de memoria
            memory.status_b = true
            memory.value_a = parseFloat(memory.value_a) // paso a numero el valor final de memory_a
            memory.operation = value // le paso el operador utilizado a la memoria
            break
        case '=':
            console.log('=')
            aux_display.show('=') // muestra en el display auxiliar el operador
            btn_sumar.status = true // habilito el boton 
            btn_restar.status = true // habilito el boton 
            btn_multiplicar.status = true // habilito el boton 
            btn_dividir.status = true // habilito el boton 
            if (memory.value_a != '') { // para evitar que al presionar el igual(=) cuando hay un cero(0) la pantalla muestre '' que es el valor x defecto de memory.value_a
                memory.status_a = true    // status a la normalidad
                memory.status_b = false
                memory.value_b = parseFloat(memory.value_b) // paso a numero el valor final de memory_b
                resolve()
                if (!isNaN(memory.value_a)) { // solo se muestra el valor en el display si el mismo no es Nan
                    display.show(memory.value_a)
                }
                //memory.value_a = String(memory.value_a) // lo vuelvo a pasar a string para empezar el ciclo de nuevo y poder concatenar.
                memory.value_a = '' // borro la memory_value_a
                memory.value_b = '' // borro la memory_value_b
                memory.operation = '' // borro el operador para evitar usar el '=' dos veces seguidas
            }
            break
        case '*':
            console.log('*')
            aux_display.show('*') // muestra en el display auxiliar el operador
            btn_dot.status = true // habilito el boton 
            memory.status_a = false // invierte los status para cambiar de memoria
            memory.status_b = true
            memory.value_a = parseFloat(memory.value_a) // paso a numero el valor final de memory_a
            memory.operation = value // le paso el operador utilizado a la memoria
            break
        case '/':
            console.log('/')
            aux_display.show('/') // muestra en el display auxiliar el operador
            btn_dot.status = true // habilito el boton 
            memory.status_a = false // invierte los status para cambiar de memoria
            memory.status_b = true
            memory.value_a = parseFloat(memory.value_a) // paso a numero el valor final de memory_a
            memory.operation = value // le paso el operador utilizado a la memoria
            break
    }
}

function resolve() {
    if (!isNaN(memory.value_b)) { // para que no de error si se presiona dos veces el boton igual.
        switch (memory.operation) {
            case '+':
                memory.value_a += memory.value_b
                break
            case '-':
                memory.value_a -= memory.value_b
                break
            case '*':
                memory.value_a *= memory.value_b
                break
            case '/':
                memory.value_a /= memory.value_b
                break
        }
    }
}