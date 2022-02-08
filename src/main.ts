import { Detenuto, Guardia, Type } from './types/global'
import Grafica from './grafica'
import Database from './database'
import { decesso, evasione, numero } from './statistiche'

/*
    gestisce sia database sia grafica
*/

const scegliTipoUtente = window.document.getElementById(
    'scegliTipoUtente'
) as HTMLSelectElement
const divDatiAggiuntiviUtente = window.document.getElementById(
    'divDatiAggiuntiviUtente'
) as HTMLDivElement
const divStatistiche = window.document.getElementById(
    'divStatistiche'
) as HTMLDivElement
const scegliVisualizzaUtente = window.document.getElementById(
    'scegliVisualizzaUtente'
) as HTMLSelectElement
const divTabella = window.document.querySelector(
    '.divTabella'
) as HTMLDivElement
const divNuovoUtente = window.document.querySelector(
    '.divNuovoUtente'
) as HTMLDivElement
const btn = window.document.getElementById('salva') as HTMLButtonElement
const nG = window.document.getElementById('nG') as HTMLElement
const nD = window.document.getElementById('nD') as HTMLElement
const eD = window.document.getElementById('eD') as HTMLElement
const dD = window.document.getElementById('dD') as HTMLElement
const divSalva = window.document.querySelector(
    'container4'
) as HTMLDivElement
const btnRimuovi = window.document.getElementById(
    'btnRimuovi'
) as HTMLButtonElement
const id = window.document.getElementById('id') as HTMLInputElement

window.addEventListener('load', function () {
    Grafica.init(divTabella)
    const detenuti = getUtenti('detenuto') as Detenuto[]
    const guardie = getUtenti('guardia') as Guardia[]
    Grafica.cambioVisualizzazioneTabella('guardia', divTabella)
    const rigo = window.document.getElementById('rigo') as HTMLElement
    if (rigo !== null) Grafica.inserisciTupla(guardie, rigo)
    else console.log('Rigo null')
    numero(detenuti, guardie, nG, nD)
    evasione(detenuti, eD)
    decesso(detenuti, dD)
})

function visualizzazioneUtente() {
    const tipo = scegliTipoUtente.value as Type
    Grafica.cambiaVisualizzazioneUtente(tipo, divDatiAggiuntiviUtente)
}

function visualizzaTabellaUtente() {
    const tipo = scegliVisualizzaUtente.value as Type
    const detenuti = getUtenti(tipo) as Detenuto[]
    const guardie = getUtenti(tipo) as Guardia[]
    Grafica.cambioVisualizzazioneTabella(tipo, divTabella)
    const rigo = window.document.getElementById('rigo') as HTMLElement
    if (tipo === 'detenuto') {
        if (rigo !== null) Grafica.inserisciTupla(detenuti, rigo)
        else console.log('Rigo null')
    } else {
        if (rigo !== null) Grafica.inserisciTupla(guardie, rigo)
        else console.log('Rigo null')
    }
    numero(detenuti, guardie, nG, nD)
    evasione(detenuti, eD)
    decesso(detenuti, dD)
}

scegliTipoUtente.addEventListener('change', visualizzazioneUtente)
scegliVisualizzaUtente.addEventListener('change', visualizzaTabellaUtente)
btn.addEventListener('click', salva)


//esempio di utilizzo del database con statistiche

const { guardie, detenuti } = Database.numero()

Grafica.riempiStatistiche(guardie, detenuti)