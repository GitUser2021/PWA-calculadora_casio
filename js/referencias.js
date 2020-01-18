console.log('referencias.js loaded')
// referencias a los botones numericos.
var ref_btn_0 = document.getElementById('btn_0')
var ref_btn_1 = document.getElementById('btn_1')
var ref_btn_2 = document.getElementById('btn_2')
var ref_btn_3 = document.getElementById('btn_3')
var ref_btn_4 = document.getElementById('btn_4')
var ref_btn_5 = document.getElementById('btn_5')
var ref_btn_6 = document.getElementById('btn_6')
var ref_btn_7 = document.getElementById('btn_7')
var ref_btn_8 = document.getElementById('btn_8')
var ref_btn_9 = document.getElementById('btn_9')
let ref_btn_dot = document.getElementById('btn_dot')

// referencias a los botones de operaciones.
let ref_btn_sumar = document.getElementById('btn_sumar')
let ref_btn_restar = document.getElementById('btn_restar')
let ref_btn_multiplicar = document.getElementById('btn_multiplicar')
let ref_btn_dividir = document.getElementById('btn_dividir')
let ref_btn_porcentaje = document.getElementById('btn_porcentaje')
let ref_btn_igual = document.getElementById('btn_igual')
let ref_btn_raiz = document.getElementById('btn_raiz')

// referencias a los botones de funciones.
let ref_btn_ac = document.getElementById('btn_ac')
let ref_btn_c = document.getElementById('btn_c')
let ref_btn_signo = document.getElementById('btn_signo')
let ref_btn_off = document.getElementById('btn_off')

// referencias a los displays.
let ref_display = document.getElementById('main_display')
let ref_aux_display = document.getElementById('aux_display')

// constante maxima cantidad de numeros en pantalla.
const MAX_NUMBERS = 9
// constante maxima cantidad de decimales.
const MAX_DECIMALES = 5

// status encendido/apagado.
let power = true