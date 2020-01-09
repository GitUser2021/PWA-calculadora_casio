// listeners de los botones numericos
ref_btn_0.addEventListener('click', () => {
    send(btn_0.value)
    enable_operators(['+', '-', '*', '/'])
})
ref_btn_1.addEventListener('click', () => {
    send(btn_1.value)
    enable_operators(['+', '-', '*', '/'])
})
ref_btn_2.addEventListener('click', () => {
    send(btn_2.value)
    enable_operators(['+', '-', '*', '/'])
})
ref_btn_3.addEventListener('click', () => {
    send(btn_3.value)
    enable_operators(['+', '-', '*', '/'])
})
ref_btn_4.addEventListener('click', () => {
    send(btn_4.value)
    enable_operators(['+', '-', '*', '/'])
})
ref_btn_5.addEventListener('click', () => {
    send(btn_5.value)
    enable_operators(['+', '-', '*', '/'])
})
ref_btn_6.addEventListener('click', () => {
    send(btn_6.value)
    enable_operators(['+', '-', '*', '/'])
})
ref_btn_7.addEventListener('click', () => {
    send(btn_7.value)
    enable_operators(['+', '-', '*', '/'])
})
ref_btn_8.addEventListener('click', () => {
    send(btn_8.value)
    enable_operators(['+', '-', '*', '/'])
})
ref_btn_9.addEventListener('click', () => {
    send(btn_9.value)
    enable_operators(['+', '-', '*', '/'])
})

ref_btn_dot.addEventListener('click', () => {
    if (btn_dot.status) { // solo se envia si su status es true.
        console.log('.')
        send(btn_dot.value)
    }
    btn_dot.status = false
    enable_operators(['+', '-', '*', '/'])
})


// listeners de los botones de operaciones
ref_btn_sumar.addEventListener('click', () => {
    if (btn_sumar.status) { // solo se envia si su status es true.
        console.log('+')
        send(btn_sumar.value)
    }
    btn_sumar.status = false
    enable_operators(['-', '*', '/', 'dot'])
})

ref_btn_restar.addEventListener('click', () => {
    if (btn_restar.status) { // solo se envia si su status es true.
        console.log('-')
        send(btn_restar.value)
    }
    btn_restar.status = false
    enable_operators(['+', '*', '/', 'dot'])
})

ref_btn_multiplicar.addEventListener('click', () => {
    if (btn_multiplicar.status) { // solo se envia si su status es true.
        console.log('*')
        send(btn_multiplicar.value)
    }
    btn_multiplicar.status = false
    enable_operators(['+', '-', '/', 'dot'])
})

ref_btn_dividir.addEventListener('click', () => {
    if (btn_dividir.status) { // solo se envia si su status es true.
        console.log('/')
        send(btn_dividir.value)
    }
    btn_dividir.status = false
    enable_operators(['+', '-', '*', 'dot'])
})

ref_btn_porcentaje.addEventListener('click', () => {
    send(btn_porcentaje.value)
})

ref_btn_igual.addEventListener('click', () => {
    send(btn_igual.value)
    enable_operators(['+', '-', '*', '/', 'dot'])
})


// listeners de los botones de funciones
ref_btn_ac.addEventListener('click', () => {
    send(btn_ac.value)
})
ref_btn_c.addEventListener('click', () => {
    send(btn_c.value)
})


// funcion para activar los operadores
function enable_operators(operator) {
    for (var i = 0; i < operator.length; i++) {

        switch (operator[i]) {
            case '+':
                btn_sumar.status = true
                break
            case '-':
                btn_restar.status = true
                break
            case '*':
                btn_multiplicar.status = true
                break
            case '/':
                btn_dividir.status = true
                break
            case 'dot':
                btn_dot.status = true
                break
        }
    }
}