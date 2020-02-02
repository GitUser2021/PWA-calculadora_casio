// efecto a los botones para que parezcan ser presionados.
// al tocar un boton, achico su width.
// al soltarlo, su width vuelve a la normalidad.

let down = 0.95
let up = 1.05

ref_btn_0.addEventListener(event_down, () => {
    ref_btn_0.style.width = parseFloat(getComputedStyle(ref_btn_0)['width']) * down + 'px'
})
ref_btn_0.addEventListener(event_up, () => {
    ref_btn_0.style.width = parseFloat(getComputedStyle(ref_btn_0)['width']) * up + 'px'
})

ref_btn_1.addEventListener(event_down, () => {
    ref_btn_1.style.width = parseFloat(getComputedStyle(ref_btn_1)['width']) * down + 'px'
})
ref_btn_1.addEventListener(event_up, () => {
    ref_btn_1.style.width = parseFloat(getComputedStyle(ref_btn_1)['width']) * up + 'px'
})

ref_btn_2.addEventListener(event_down, () => {
    ref_btn_2.style.width = parseFloat(getComputedStyle(ref_btn_2)['width']) * down + 'px'
})
ref_btn_2.addEventListener(event_up, () => {
    ref_btn_2.style.width = parseFloat(getComputedStyle(ref_btn_2)['width']) * up + 'px'
})

ref_btn_3.addEventListener(event_down, () => {
    ref_btn_3.style.width = parseFloat(getComputedStyle(ref_btn_3)['width']) * down + 'px'
})
ref_btn_3.addEventListener(event_up, () => {
    ref_btn_3.style.width = parseFloat(getComputedStyle(ref_btn_3)['width']) * up + 'px'
})

ref_btn_4.addEventListener(event_down, () => {
    ref_btn_4.style.width = parseFloat(getComputedStyle(ref_btn_4)['width']) * down + 'px'
})
ref_btn_4.addEventListener(event_up, () => {
    ref_btn_4.style.width = parseFloat(getComputedStyle(ref_btn_4)['width']) * up + 'px'
})

ref_btn_5.addEventListener(event_down, () => {
    ref_btn_5.style.width = parseFloat(getComputedStyle(ref_btn_5)['width']) * down + 'px'
})
ref_btn_5.addEventListener(event_up, () => {
    ref_btn_5.style.width = parseFloat(getComputedStyle(ref_btn_5)['width']) * up + 'px'
})

ref_btn_6.addEventListener(event_down, () => {
    ref_btn_6.style.width = parseFloat(getComputedStyle(ref_btn_6)['width']) * down + 'px'
})
ref_btn_6.addEventListener(event_up, () => {
    ref_btn_6.style.width = parseFloat(getComputedStyle(ref_btn_6)['width']) * up + 'px'
})

ref_btn_7.addEventListener(event_down, () => {
    ref_btn_7.style.width = parseFloat(getComputedStyle(ref_btn_7)['width']) * down + 'px'
})
ref_btn_7.addEventListener(event_up, () => {
    ref_btn_7.style.width = parseFloat(getComputedStyle(ref_btn_7)['width']) * up + 'px'
})

ref_btn_8.addEventListener(event_down, () => {
    ref_btn_8.style.width = parseFloat(getComputedStyle(ref_btn_8)['width']) * down + 'px'
})
ref_btn_8.addEventListener(event_up, () => {
    ref_btn_8.style.width = parseFloat(getComputedStyle(ref_btn_8)['width']) * up + 'px'
})

ref_btn_9.addEventListener(event_down, () => {
    ref_btn_9.style.width = parseFloat(getComputedStyle(ref_btn_9)['width']) * down + 'px'
})
ref_btn_9.addEventListener(event_up, () => {
    ref_btn_9.style.width = parseFloat(getComputedStyle(ref_btn_9)['width']) * up + 'px'
})

ref_btn_dot.addEventListener(event_down, () => {
    ref_btn_dot.style.width = parseFloat(getComputedStyle(ref_btn_dot)['width']) * down + 'px'
})
ref_btn_dot.addEventListener(event_up, () => {
    ref_btn_dot.style.width = parseFloat(getComputedStyle(ref_btn_dot)['width']) * up + 'px'
})

ref_btn_sumar.addEventListener(event_down, () => {
    ref_btn_sumar.style.width = parseFloat(getComputedStyle(ref_btn_sumar)['width']) * down + 'px'
})
ref_btn_sumar.addEventListener(event_up, () => {
    ref_btn_sumar.style.width = parseFloat(getComputedStyle(ref_btn_sumar)['width']) * up + 'px'
})

ref_btn_restar.addEventListener(event_down, () => {
    ref_btn_restar.style.width = parseFloat(getComputedStyle(ref_btn_restar)['width']) * down + 'px'
})
ref_btn_restar.addEventListener(event_up, () => {
    ref_btn_restar.style.width = parseFloat(getComputedStyle(ref_btn_restar)['width']) * up + 'px'
})

ref_btn_multiplicar.addEventListener(event_down, () => {
    ref_btn_multiplicar.style.width = parseFloat(getComputedStyle(ref_btn_multiplicar)['width']) * down + 'px'
})
ref_btn_multiplicar.addEventListener(event_up, () => {
    ref_btn_multiplicar.style.width = parseFloat(getComputedStyle(ref_btn_multiplicar)['width']) * up + 'px'
})

ref_btn_dividir.addEventListener(event_down, () => {
    ref_btn_dividir.style.width = parseFloat(getComputedStyle(ref_btn_dividir)['width']) * down + 'px'
})
ref_btn_dividir.addEventListener(event_up, () => {
    ref_btn_dividir.style.width = parseFloat(getComputedStyle(ref_btn_dividir)['width']) * up + 'px'
})

ref_btn_porcentaje.addEventListener(event_down, () => {
    ref_btn_porcentaje.style.width = parseFloat(getComputedStyle(ref_btn_porcentaje)['width']) * down + 'px'
})
ref_btn_porcentaje.addEventListener(event_up, () => {
    ref_btn_porcentaje.style.width = parseFloat(getComputedStyle(ref_btn_porcentaje)['width']) * up + 'px'
})

ref_btn_igual.addEventListener(event_down, () => {
    ref_btn_igual.style.width = parseFloat(getComputedStyle(ref_btn_igual)['width']) * down + 'px'
})
ref_btn_igual.addEventListener(event_up, () => {
    ref_btn_igual.style.width = parseFloat(getComputedStyle(ref_btn_igual)['width']) * up + 'px'
})

ref_btn_raiz.addEventListener(event_down, () => {
    ref_btn_raiz.style.width = parseFloat(getComputedStyle(ref_btn_raiz)['width']) * down + 'px'
})
ref_btn_raiz.addEventListener(event_up, () => {
    ref_btn_raiz.style.width = parseFloat(getComputedStyle(ref_btn_raiz)['width']) * up + 'px'
})

ref_btn_ac.addEventListener(event_down, () => {
    ref_btn_ac.style.width = parseFloat(getComputedStyle(ref_btn_ac)['width']) * down + 'px'
})
ref_btn_ac.addEventListener(event_up, () => {
    ref_btn_ac.style.width = parseFloat(getComputedStyle(ref_btn_ac)['width']) * up + 'px'
})

ref_btn_c.addEventListener(event_down, () => {
    ref_btn_c.style.width = parseFloat(getComputedStyle(ref_btn_c)['width']) * down + 'px'
})
ref_btn_c.addEventListener(event_up, () => {
    ref_btn_c.style.width = parseFloat(getComputedStyle(ref_btn_c)['width']) * up + 'px'
})

ref_btn_signo.addEventListener(event_down, () => {
    ref_btn_signo.style.width = parseFloat(getComputedStyle(ref_btn_signo)['width']) * down + 'px'
})
ref_btn_signo.addEventListener(event_up, () => {
    ref_btn_signo.style.width = parseFloat(getComputedStyle(ref_btn_signo)['width']) * up + 'px'
})

ref_btn_off.addEventListener(event_down, () => {
    ref_btn_off.style.width = parseFloat(getComputedStyle(ref_btn_off)['width']) * down + 'px'
})
ref_btn_off.addEventListener(event_up, () => {
    ref_btn_off.style.width = parseFloat(getComputedStyle(ref_btn_off)['width']) * up + 'px'
})

ref_btn_mrc.addEventListener(event_down, () => {
    ref_btn_mrc.style.width = parseFloat(getComputedStyle(ref_btn_mrc)['width']) * down + 'px'
})
ref_btn_mrc.addEventListener(event_up, () => {
    ref_btn_mrc.style.width = parseFloat(getComputedStyle(ref_btn_mrc)['width']) * up + 'px'
})

ref_btn_mem_suma.addEventListener(event_down, () => {
    ref_btn_mem_suma.style.width = parseFloat(getComputedStyle(ref_btn_mem_suma)['width']) * down + 'px'
})
ref_btn_mem_suma.addEventListener(event_up, () => {
    ref_btn_mem_suma.style.width = parseFloat(getComputedStyle(ref_btn_mem_suma)['width']) * up + 'px'
})

ref_btn_mem_resta.addEventListener(event_down, () => {
    ref_btn_mem_resta.style.width = parseFloat(getComputedStyle(ref_btn_mem_resta)['width']) * down + 'px'
})
ref_btn_mem_resta.addEventListener(event_up, () => {
    ref_btn_mem_resta.style.width = parseFloat(getComputedStyle(ref_btn_mem_resta)['width']) * up + 'px'
})