import { Detenuto, Guardia, Type } from './types/global.d'
import { getUtenti } from './mappatura'
import { btn, btnRemove, id, selModalita, selValore } from './dichiarazioni'
import { cambio, detenuto, guardia, init } from './grafica'
import { rimuovi, salva } from './database'

init()

window.addEventListener('load', function () {
    visualizzazione();
})

export function visualizzazione() {
    id.innerHTML = ``
    let tipo: Type = selModalita.value as Type
    if (tipo === 'detenuto') {
        detenuto()
        const rigo = window.document.getElementById(
            'rigo'
        ) as HTMLTableSectionElement
        rigo.innerHTML = ''
        const detenuti = getUtenti('detenuto') as Detenuto[]
        let i = 0
        for (const detenuto of detenuti) {
            rigo.innerHTML += `
                <tr>
                    <td>${detenuto.id}</td>
                    <td>${detenuto.nome}</td>
                    <td>${detenuto.cognome}</td>
                    <td>${detenuto.eta}</td>
                    <td>${detenuto.tipo}</td>
                    <td>${detenuto.data_carcerazione?.getDate()}/${
                detenuto.data_carcerazione?.getMonth() + 1
            }/${detenuto.data_carcerazione?.getFullYear()}</td>
                    <td>${detenuto.data_scarcerazione?.getDate()}/${
                detenuto.data_scarcerazione?.getMonth() + 1
            }/${detenuto.data_scarcerazione?.getFullYear()}</td>
                    <td>${detenuto.pena}</td>
                    <td>${detenuto.crimine}</td>
                    <td>${detenuto.evaso}</td>
                    <td>${detenuto.deceduto}</td>
                </tr>`
                id.innerHTML += `
                    <option value="${detenuto.id}">${detenuto.id}</option>
                `
        }
    } else {
        guardia()
        const rigo = window.document.getElementById(
            'rigo'
        ) as HTMLTableSectionElement
        rigo.innerHTML = ''
        const guardie = getUtenti('guardia') as Guardia[]
        for (const guardia of guardie) {
            rigo.innerHTML += `
            <tr>
                <td>${guardia.id}</td>
                <td>${guardia.nome}</td>
                <td>${guardia.cognome}</td>
                <td>${guardia.eta}</td>
                <td>${guardia.tipo}</td>
                <td>${guardia.data_assunzione?.getDate()}/${guardia.data_assunzione?.getMonth()+1}/${guardia.data_assunzione?.getFullYear()}</td>
                <td>${guardia.descrizione}</td>
            </tr>
           `
           id.innerHTML += `
                    <option value="${guardia.id}">${guardia.id}</option>
                `
        }
    }

}

selValore.addEventListener('change', cambio)
selModalita.addEventListener('change', visualizzazione)
btn.addEventListener('click', salva)
btnRemove.addEventListener('click', rimuovi)



