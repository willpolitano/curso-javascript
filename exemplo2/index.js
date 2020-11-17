const contador = document.querySelector('#contador')
const steps = 1

document.querySelector('#btnDec')
    .addEventListener('click', function() {
        const valor = (+contador.value) -steps
        localStorage.setItem('contador', valor)
        contador.value = valor
    })

document.querySelector('#btnInc')
    .addEventListener('click', function() {
        const valor = (+contador.value) +steps
        localStorage.setItem('contador', valor)
        contador.value = valor
    })

contador.value = localStorage.getItem('contador') ?? 0