// anulacion del menu contextual.
let images = document.querySelectorAll('img')
images.forEach(image => {
    image.ontouchstart = () => { return false }
})
//-----------------------------------------------------------------------------------------------------------------------


// deteccion de dispositivo tactil.
let event_down = 'mousedown'
let event_up = 'mouseup'
function is_touch_enabled() {
    return ('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0);
}

// cambio el evento si es dispositivo tactil.
is_touch_enabled() ? event_down = 'touchstart' : event_down
is_touch_enabled() ? event_up = 'touchend' : event_up
//-----------------------------------------------------------------------------------------------------------------------

// listeners botones fisicos // (provisorio)
document.addEventListener('keypress', function e {
    console.log('event: ', e.key);
    switch(e.key){
        case '.':
            fakePress('ref_btn_dot');
        break;
    }
});

function fakePress(btn_fake){
    let clickEvent = document.createEvent('MouseEvents');
    clickEvent.initEvent('mousedown', true, true);
    window[btn_fake].dispatchEvent(clickEvent);
}
//----------------------------------------------------------------------------------------------------------------------


// listeners de los botones numericos y el punto.
for (let i = 0; i < 10; i++) {
    window['ref_btn_' + i].addEventListener(event_down, () => {
        if (window['btn_' + i].status) { // solo se envia si su status es true.
            console.log(window['btn_' + i].value)
            send(window['btn_' + i].value)
        }
        enable_operators('operators_only')
    }, {passive: true})
}

ref_btn_dot.addEventListener(event_down, () => {
    if (btn_dot.status) { // solo se envia si su status es true.
        console.log('.')
        send(btn_dot.value)
    }
    enable_operators('all')
    btn_dot.status = false
}, {passive: true})
//-----------------------------------------------------------------------------------------------------------------------


// listeners de los botones de operaciones.
ref_btn_sumar.addEventListener(event_down, () => {
    if (btn_sumar.status) { // solo se envia si su status es true.
        console.log('+')
        send(btn_sumar.value)
    }
    enable_operators('all')
    btn_sumar.status = false
}, {passive: true})

ref_btn_restar.addEventListener(event_down, () => {
    if (btn_restar.status) { // solo se envia si su status es true.
        console.log('-')
        send(btn_restar.value)
    }
    enable_operators('all')
    btn_restar.status = false
}, {passive: true})

ref_btn_multiplicar.addEventListener(event_down, () => {
    if (btn_multiplicar.status) { // solo se envia si su status es true.
        console.log('*')
        send(btn_multiplicar.value)
    }
    enable_operators('all')
    btn_multiplicar.status = false
}, {passive: true})

ref_btn_dividir.addEventListener(event_down, () => {
    if (btn_dividir.status) { // solo se envia si su status es true.
        console.log('/')
        send(btn_dividir.value)
    }
    enable_operators('all')
    btn_dividir.status = false
}, {passive: true})

ref_btn_porcentaje.addEventListener(event_down, () => {
    if (btn_porcentaje.status) { // solo se envia si su status es true.
        console.log('%')
        btn_igual.status = false // para que luego de usar el % no se pueda presionar el igual y se resuelva el % varias veces.
        send(btn_porcentaje.value)
    }
    enable_operators('all')
    btn_porcentaje.status = false
}, {passive: true})

ref_btn_igual.addEventListener(event_down, () => {
    if (btn_igual.status) {
        console.log('=')
        send(btn_igual.value)
    }
    enable_operators('all')
}, {passive: true})

ref_btn_raiz.addEventListener(event_down, () => {
    if (btn_raiz.status) {
        console.log('raiz')
        send(btn_raiz.value)
    }
    enable_operators('all')
}, {passive: true})
//-----------------------------------------------------------------------------------------------------------------------


// listeners de los botones de funciones.
ref_btn_ac.addEventListener(event_down, () => {
    power = true // enciendo la calculadora.
    send(btn_ac.value)
}, {passive: true})
ref_btn_c.addEventListener(event_down, () => {
    power = true // enciendo la calculadora.
    send(btn_c.value)
}, {passive: true})
ref_btn_signo.addEventListener(event_down, () => {
    send(btn_signo.value)
}, {passive: true})
ref_btn_off.addEventListener(event_down, () => {
    send(btn_off.value)
}, {passive: true})
ref_btn_mrc.addEventListener(event_down, () => {
    console.log('mrc')
    send(btn_mrc.value)
    enable_operators('all')
}, {passive: true})
ref_btn_mem_suma.addEventListener(event_down, () => {
    console.log('mem suma')
    send(btn_mem_suma.value)
}, {passive: true})
ref_btn_mem_resta.addEventListener(event_down, () => {
    console.log('mem resta')
    send(btn_mem_resta.value)
}, {passive: true})
//-----------------------------------------------------------------------------------------------------------------------


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
