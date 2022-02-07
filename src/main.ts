import { Detenuto, Guardia, Type } from './types/global'
import {
    cambiaVisualizzazioneUtente,
    cambioVisualizzazioneTabella,
    init,
    inserisciTupla,
} from './grafica'
import { getUtenti, removeUtente, salva } from './database'
import { decesso, evasione, numero } from './statistiche'

export const scegliTipoUtente = window.document.getElementById(
    'scegliTipoUtente'
) as HTMLSelectElement
export const divDatiAggiuntiviUtente = window.document.getElementById(
    'divDatiAggiuntiviUtente'
) as HTMLDivElement
export const divStatistiche = window.document.getElementById(
    'divStatistiche'
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
export const btnRemove = window.document.getElementById(
    'btnRemove'
) as HTMLButtonElement
export const nG = window.document.getElementById('nG') as HTMLElement
export const nD = window.document.getElementById('nD') as HTMLElement
export const eD = window.document.getElementById('eD') as HTMLElement
export const dD = window.document.getElementById('dD') as HTMLElement
export const divSalva = window.document.querySelector(
    'container4'
) as HTMLDivElement
export const btnRimuovi = window.document.getElementById(
    'btnRimuovi'
) as HTMLButtonElement
export const id = window.document.getElementById('id') as HTMLInputElement

window.addEventListener('load', function () {
    init(divTabella)
    const detenuti = getUtenti('detenuto') as Detenuto[]
    const guardie = getUtenti('guardia') as Guardia[]
    cambioVisualizzazioneTabella('guardia', divTabella)
    const rigo = window.document.getElementById('rigo') as HTMLElement
    if (rigo !== null) inserisciTupla(guardie, rigo)
    else console.log('Rigo null')
    numero(detenuti, guardie)
    evasione(detenuti)
    decesso(detenuti)
})

function visualizzazioneUtente() {
    const tipo = scegliTipoUtente.value as Type
    cambiaVisualizzazioneUtente(tipo, divDatiAggiuntiviUtente)
}

export function visualizzaTabellaUtente() {
    const tipo = scegliVisualizzaUtente.value as Type
    const detenuti = getUtenti(tipo) as Detenuto[]
    const guardie = getUtenti(tipo) as Guardia[]
    cambioVisualizzazioneTabella(tipo, divTabella)
    const rigo = window.document.getElementById('rigo') as HTMLElement
    if (tipo === 'detenuto') {
        if (rigo !== null) inserisciTupla(detenuti, rigo)
        else console.log('Rigo null')
    } else {
        if (rigo !== null) inserisciTupla(guardie, rigo)
        else console.log('Rigo null')
    }
    numero(detenuti, guardie)
    evasione(detenuti)
    decesso(detenuti)
}

scegliTipoUtente.addEventListener('change', visualizzazioneUtente)
scegliVisualizzaUtente.addEventListener('change', visualizzaTabellaUtente)
btn.addEventListener('click', salva)
btnRimuovi.addEventListener('click', function () {
    const pos = parseInt(id.value)
    const tipo = scegliVisualizzaUtente.value as Type
    removeUtente(pos, tipo)
    visualizzaTabellaUtente()
})
