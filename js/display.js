console.log('display.js loaded')

// constructor de display
function Display(){
    // metodo show() muestra el parametro recibido en el display
    this.show = (show)=>{
        ref_display.innerHTML = show
    }
    
    // metodo clear() para limpiar el display
    this.clear = ()=>{
        this.show('---------')
    }
}

// instanciacion de display
let display = new Display()