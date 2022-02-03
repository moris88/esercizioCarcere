import { Detenuto, Guardia, Type } from './types/global.d'
import { cambiaVisualizzazioneUtente, cambioVisualizzazioneTabella, init } from './grafica'
import { getUtenti, removeUtente, salva } from './database'
import { decesso, evasione, numero } from './statistiche'

export const scegliTipoUtente = window.document.getElementById(
    'scegliTipoUtente'
) as HTMLSelectElement
export const divDatiAggiuntiviUtente = window.document.getElementById(
    '.divDatiAggiuntiviUtente'
) as HTMLDivElement
export const divStatistiche = window.document.getElementById(
    '.divStatistiche'
) as HTMLDivElement
export const scegliVisualizzaUtente = window.document.getElementById(
    'scegliVisualizzaUtente'
) as HTMLSelectElement
export const divTabella = window.document.querySelector(
    '.divTabella'
) as HTMLDivElement
export const divNuovoUtente = window.document.querySelector(
    '.divNuovoUtente'
) as HTMLDivElement
export const btn = window.document.getElementById('salva') as HTMLButtonElement
export const id = window.document.getElementById('id') as HTMLSelectElement
export const btnRemove = window.document.getElementById(
    'rimuovi'
) as HTMLButtonElement
export const nG = window.document.getElementById('nG') as HTMLElement
export const nD = window.document.getElementById('nD') as HTMLElement
export const eD = window.document.getElementById('eD') as HTMLElement
export const dD = window.document.getElementById('dD') as HTMLElement

init(divTabella)

window.addEventListener('load', function () {
    const detenuti = getUtenti('detenuto') as Detenuto[]
    const guardie = getUtenti('guardia') as Guardia[]
    cambiaVisualizzazioneUtente('guardia')
    numero(detenuti, guardie)
    evasione(detenuti)
    decesso(detenuti)
})

export function visualizzazione() {
    console.log('Ho schiacciato il pulsante!')
    cambiaVisualizzazioneUtente(scegliVisualizzaUtente.value as Type)
    /**
    id.innerHTML = ``
    const tipo: Type = selModalita.value as Type
    const rigo = window.document.getElementById(
        'rigo'
    ) as HTMLTableSectionElement
    const detenuti = getUtenti('detenuto') as Detenuto[]
    const guardie = getUtenti('guardia') as Guardia[]
    if (tipo === 'detenuto' && detenuti.length !== 0) {
        detenuto()
        rigo.innerHTML = ''
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
        }
        else if(tipo === 'guardia' && guardie.length != 0){
            guardia()
            rigo.innerHTML = ''
            for (const guardia of guardie) {
                rigo.innerHTML += `
            <tr>
                <td>${guardia.id}</td>
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
                id.innerHTML += `
                    <option value="${guardia.id}">${guardia.id}</option>
                `
            }
        
        } else {
            rigo.innerHTML = `<tr>Non ci sono elementi da visualizzare</tr>`
        }
     
    numero(detenuti,guardie)
    evasione(detenuti)
    decesso(detenuti)*/
}

function visualizzaTabella() {
    const tipo = scegliVisualizzaUtente.value as Type
    cambioVisualizzazioneTabella(tipo, divTabella)
}

scegliTipoUtente.addEventListener('change', visualizzaTabella)
scegliVisualizzaUtente.addEventListener('change', visualizzazione)
btn.addEventListener('click', salva)
btnRemove.addEventListener('click', function () {
    const pos = parseInt(id.value)
    const tipo = scegliTipoUtente.value as Type
    removeUtente(pos, tipo)
})
