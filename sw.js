// importScripts('js/app.js')
console.log('sw.js loaded') 

const version = "1.0.0";
const static_cacheName = `static-v-${version}`
const dynamic_cacheName = `dynamic-v-${version}`
let cachex = [
    "/",
    "index.html",
    "css/style.css",
    "css/media_query.css",
    "css/images/icons/icon-144x144.png",
    "css/images/casio.jpg",
    "css/images/btn_0.jpg",
    "css/images/btn_1.jpg",
    "css/images/btn_2.jpg",
    "css/images/btn_3.jpg",
    "css/images/btn_4.jpg",
    "css/images/btn_5.jpg",
    "css/images/btn_6.jpg",
    "css/images/btn_7.jpg",
    "css/images/btn_8.jpg",
    "css/images/btn_9.jpg",
    "css/images/btn_dot.jpg",
    "css/images/btn_sumar.jpg",
    "css/images/btn_restar.jpg",
    "css/images/btn_multiplicar.jpg",
    "css/images/btn_dividir.jpg",
    "css/images/btn_raiz.jpg",
    "css/images/btn_porcentaje.jpg",
    "css/images/btn_igual.jpg",
    "css/images/btn_ac.jpg",
    "css/images/btn_c.jpg",
    "css/images/btn_signo.jpg",
    "css/images/btn_memory_record.jpg",
    "css/images/btn_memory_restar.jpg",
    "css/images/btn_memory_sumar.jpg",
    "css/images/btn_off.jpg",
    "js/buttons.js",
    "js/display.js",
    "js/functions.js",
    "js/main.js",
    "js/memory.js",
    "js/referencias.js",
    "js/listeners.js"
]

self.addEventListener('install', e => {
    console.log('installing...')
  let cache = caches.open(static_cacheName)
  .then(cache => cache.addAll(cachex))
    e.waitUntil(cache)
    self.skipWaiting()
})

self.addEventListener('activate', event => {
        console.log('activate....')
let response = caches.keys()
.then(keys =>{
    keys.forEach(key =>{
        if(key != static_cacheName && key.includes('static')){
           return caches.delete(key)
        }
    })
})
        event.waitUntil(response)
})



self.addEventListener('fetch', event => {
console.log('fetch..')

let response = caches.match(event.request)
    .then(res=>{
        if(res){
            return res
        }else{
            fetch(event.request)
            .then(res=>{
                caches.open(static_cacheName)
                .then( cache => cache.put(event.request,res) )
            })
            return fetch(event.request)
        }
    })
event.respondWith(response)
})
