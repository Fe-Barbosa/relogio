let data = new Date()
let hora = data.getHours()
let min = data.getMinutes()

function buton() {
    let horario = document.getElementById('horario')
    horario.innerHTML = hora + ':' + min
}