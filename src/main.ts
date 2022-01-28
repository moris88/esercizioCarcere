import { divContenitore1, selModalita, selValore } from './dichiarazioni'
import { cambio, init, onChangeSwitchType } from './grafica'

window.addEventListener('load', function () {
    init()
    const rigo = window.document.getElementById(
        'rigo'
    ) as HTMLTableSectionElement
    console.log(rigo)
    rigo.innerHTML = `<p>Ciao Mondo</p>`
})

selValore.addEventListener('change', cambio)
selModalita.addEventListener('change', onChangeSwitchType)
