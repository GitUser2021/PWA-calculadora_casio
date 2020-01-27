if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/PWA-calculadora_casio/sw.js')
        .then(function (reg) {
            console.log('Service Worker registrado Exitósamente', reg);
        })
        .catch(function (err) {
            console.log('Error registrando el Service Worker', err);
        });
}
