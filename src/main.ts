import { Detenuto, Guardia, Type } from './types/global.d'
import { getUtenti } from './mappatura'
import { selModalita, selValore } from './dichiarazioni'
import { cambio, detenuto, guardia, init } from './grafica'

window.addEventListener('load', function () {
    init()
    const rigo = window.document.getElementById(
        'rigo'
    ) as HTMLTableSectionElement
    rigo.innerHTML = ''
    const guardie = getUtenti('guardia') as Guardia[]
    for (const guardia of guardie) {
        rigo.innerHTML += `
            <tr>
                <td>${guardia.nome}</td>
                <td>${guardia.cognome}</td>
                <td>${guardia.eta}</td>
                <td>${guardia.tipo}</td>
                <td>${guardia.data_assunzione?.getDate()}/${
            guardia.data_assunzione?.getMonth() + 1
        }/${guardia.data_assunzione?.getFullYear()}</td>
                <td>${guardia.descrizione}</td>
            </tr>
           `
    }
})

selValore.addEventListener('change', cambio)

selModalita.addEventListener('change', function () {
    let tipo: Type = selModalita.value as Type
    console.log(tipo)
    const rigo = window.document.getElementById(
        'rigo'
    ) as HTMLTableSectionElement
    rigo.innerHTML = ''
    if (tipo === 'detenuto') {
        detenuto()
        const detenuti = getUtenti('detenuto') as Detenuto[]
        for (const detenuto of detenuti) {
            rigo.innerHTML += `
                <tr>
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
        }
    } else {
        guardia()
        const guardie = getUtenti('guardia') as Guardia[]
        for (const guardia of guardie) {
            rigo.innerHTML += `
            <tr>
                <td>${guardia.nome}</td>
                <td>${guardia.cognome}</td>
                <td>${guardia.eta}</td>
                <td>${guardia.tipo}</td>
                <td>${guardia.data_assunzione?.getDate()}/${guardia.data_assunzione?.getMonth()}/${guardia.data_assunzione?.getFullYear()}</td>
                <td>${guardia.descrizione}</td>
            </tr>
           `
        }
    }
})
