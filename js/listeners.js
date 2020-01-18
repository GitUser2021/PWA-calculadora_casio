// listeners de los botones numericos.
for (let i = 0; i < 10; i++) {
    window['ref_btn_' + i].addEventListener('click', () => {
        if (window['btn_' + i].status) { // solo se envia si su status es true.
            console.log(window['btn_' + i].value)
            send(window['btn_' + i].value)
        }
        enable_operators('operators_only')
    })
}

ref_btn_dot.addEventListener('click', () => {
    if (btn_dot.status) { // solo se envia si su status es true.
        console.log('.')
        send(btn_dot.value)
    }
    enable_operators('all')
    btn_dot.status = false
})

// listeners de los botones de operaciones.
ref_btn_sumar.addEventListener('click', () => {
    if (btn_sumar.status) { // solo se envia si su status es true.
        console.log('+')
        send(btn_sumar.value)
    }
    enable_operators('all')
    btn_sumar.status = false
})

ref_btn_restar.addEventListener('click', () => {
    if (btn_restar.status) { // solo se envia si su status es true.
        console.log('-')
        send(btn_restar.value)
    }
    enable_operators('all')
    btn_restar.status = false
})

ref_btn_multiplicar.addEventListener('click', () => {
    if (btn_multiplicar.status) { // solo se envia si su status es true.
        console.log('*')
        send(btn_multiplicar.value)
    }
    enable_operators('all')
    btn_multiplicar.status = false
})

ref_btn_dividir.addEventListener('click', () => {
    if (btn_dividir.status) { // solo se envia si su status es true.
        console.log('/')
        send(btn_dividir.value)
    }
    enable_operators('all')
    btn_dividir.status = false
})

ref_btn_porcentaje.addEventListener('click', () => {
    if (btn_porcentaje.status) { // solo se envia si su status es true.
        console.log('%')
        btn_igual.status = false // para que luego de usar el % no se pueda presionar el igual y se resuelva el % varias veces.
        send(btn_porcentaje.value)
    }
    enable_operators('all')
    btn_porcentaje.status = false
})

ref_btn_igual.addEventListener('click', () => {
    if (btn_igual.status) {
        console.log('=')
        send(btn_igual.value)
    }
    enable_operators('all')
})

ref_btn_raiz.addEventListener('click', () => {
    if (btn_raiz.status) {
        console.log('raiz')
        send(btn_raiz.value)
    }
    enable_operators('all')
})


// listeners de los botones de funciones.
ref_btn_ac.addEventListener('click', () => {
    power = true // enciendo la calculadora.
    send(btn_ac.value)
})
ref_btn_c.addEventListener('click', () => {
    power = true // enciendo la calculadora.
    send(btn_c.value)
})
ref_btn_signo.addEventListener('click', () => {
    send(btn_signo.value)
})
ref_btn_off.addEventListener('click', () => {
    send(btn_off.value)
})


// funcion para activar los operadores.
function enable_operators(operator) {
    if (power) {
        switch (operator) {
            case 'all':
                btn_sumar.status = true
                btn_restar.status = true
                btn_multiplicar.status = true
                btn_dividir.status = true
                btn_porcentaje.status = true
                btn_dot.status = true
                btn_raiz.status = true
                btn_igual.status = true
                btn_0.status = true
                btn_1.status = true
                btn_2.status = true
                btn_3.status = true
                btn_4.status = true
                btn_5.status = true
                btn_6.status = true
                btn_7.status = true
                btn_8.status = true
                btn_9.status = true
                break
            case 'operators_only':
                btn_sumar.status = true
                btn_restar.status = true
                btn_multiplicar.status = true
                btn_dividir.status = true
                btn_porcentaje.status = true
                btn_igual.status = true
                break
        }
    }
}