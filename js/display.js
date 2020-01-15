console.log('display.js loaded')

// constructor de display
function Display() {
    // metodo show() muestra el parametro recibido en el display
    this.show = (show) => {
        ref_display.innerHTML = show
    }
    this.value = ''
    // metodo clear() para limpiar el display
    this.clear = () => {
        this.show(0)
    }
    this.memory_reset = () => {
        aux_display.data_a = ''
        aux_display.data_b = ''
        aux_display.value = ''
    }
}

// instanciacion de display
let display = new Display()

// instanciacion de display auxiliar, con su funcion show() personalizada
let aux_display = new Display()
aux_display.show = (value) => {
    ref_aux_display.innerHTML = value
}

// mostrar en el display los datos.
function render() {
    if (typeof (aux_display.data) === 'undefined') { aux_display.data = '' }
    if (typeof (aux_display.data_a) === 'undefined') { aux_display.data_a = '' }
    if (typeof (aux_display.data_b) === 'undefined') { aux_display.data_b = '' }

    if (controlOperations.prev_operator == '=') {
        display.show(memory.value_a)
        aux_display.show(aux_display.data_a + ' ' + aux_display.data_b + ' = ' + memory.value_a)
    } else {
        if (memory.status_a) {
            display.show(memory.value_a)
            aux_display.data_a = (memory.value_a + ' ' + memory.operation)
            aux_display.show(aux_display.data_a)
        } else {
            display.show(memory.value_b)
            aux_display.data_b = (' ' + memory.value_b)
            aux_display.value = aux_display.data_a + aux_display.data_b
            aux_display.show(aux_display.value)
        }
    }
    // para limitar la cant. de digitos en pantalla.
    // lo ubico al final para que sobre-escriba el display luego de que se hayan
    // renderizado todos los datos.
    // solamente muestro los datos recortados por el valor de MAX_NUMBERS.
    check_max_numbers()
}