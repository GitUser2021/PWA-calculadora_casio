// listeners de los botones numericos
ref_btn_0.addEventListener('click', () => {
    send(btn_0.value)
})
ref_btn_1.addEventListener('click', () => {
    send(btn_1.value)
})
ref_btn_2.addEventListener('click', () => {
    send(btn_2.value)
})
ref_btn_3.addEventListener('click', () => {
    send(btn_3.value)
})
ref_btn_4.addEventListener('click', () => {
    send(btn_4.value)
})
ref_btn_5.addEventListener('click', () => {
    send(btn_5.value)
})
ref_btn_6.addEventListener('click', () => {
    send(btn_6.value)
})
ref_btn_7.addEventListener('click', () => {
    send(btn_7.value)
})
ref_btn_8.addEventListener('click', () => {
    send(btn_8.value)
})
ref_btn_9.addEventListener('click', () => {
    send(btn_9.value)
})

ref_btn_dot.addEventListener('click', () => {
    if(btn_dot.status){
        send(btn_dot.value)
    }
})


// listeners de los botones de operaciones
ref_btn_sumar.addEventListener('click', () => {
    send(btn_sumar.value)
})
ref_btn_restar.addEventListener('click', () => {
    send(btn_restar.value)
})
ref_btn_multiplicar.addEventListener('click', () => {
    send(btn_multiplicar.value)
})
ref_btn_dividir.addEventListener('click', () => {
    send(btn_dividir.value)
})
ref_btn_porcentaje.addEventListener('click', () => {
    send(btn_porcentaje.value)
})

ref_btn_igual.addEventListener('click', () => {
    send(btn_igual.value)
})


// listeners de los botones de funciones
ref_btn_ac.addEventListener('click', () => {
    send(btn_ac.value)
})
ref_btn_c.addEventListener('click', () => {
    send(btn_c.value)
})