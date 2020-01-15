// listeners de los botones numericos.
ref_btn_0.addEventListener('click', () => {
    send(btn_0.value)
    enable_operators('operators_only')
})
ref_btn_1.addEventListener('click', () => {
    send(btn_1.value)
    enable_operators('operators_only')
})
ref_btn_2.addEventListener('click', () => {
    send(btn_2.value)
    enable_operators('operators_only')
})
ref_btn_3.addEventListener('click', () => {
    send(btn_3.value)
    enable_operators('operators_only')
})
ref_btn_4.addEventListener('click', () => {
    send(btn_4.value)
    enable_operators('operators_only')
})
ref_btn_5.addEventListener('click', () => {
    send(btn_5.value)
    enable_operators('operators_only')
})
ref_btn_6.addEventListener('click', () => {
    send(btn_6.value)
    enable_operators('operators_only')
})
ref_btn_7.addEventListener('click', () => {
    send(btn_7.value)
    enable_operators('operators_only')
})
ref_btn_8.addEventListener('click', () => {
    send(btn_8.value)
    enable_operators('operators_only')
})
ref_btn_9.addEventListener('click', () => {
    send(btn_9.value)
    enable_operators('operators_only')
})

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


// listeners de los botones de funciones.
ref_btn_ac.addEventListener('click', () => {
    send(btn_ac.value)
})
ref_btn_c.addEventListener('click', () => {
    send(btn_c.value)
})
ref_btn_c.addEventListener('click', () => {
    send(btn_c.value)
})
ref_btn_signo.addEventListener('click', () => {
    send(btn_signo.value)
})


// funcion para activar los operadores.
function enable_operators(operator) {
        switch (operator) {
            case 'all':
                btn_sumar.status = true
                btn_restar.status = true
                btn_multiplicar.status = true
                btn_dividir.status = true
                btn_porcentaje.status = true
                btn_dot.status = true
                btn_igual.status = true
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