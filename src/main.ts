import { Detenuto, Guardia, Type } from './types/global'
import Grafica from './grafica'
import Database from './database'

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
const btnSalva = window.document.getElementById('salva') as HTMLButtonElement
const elimnaID = window.document.getElementById('elimnaID') as HTMLSelectElement
const rimuovi = window.document.getElementById('rimuovi') as HTMLButtonElement
const numGED = window.document.getElementById('numG&D') as HTMLDivElement
const numEvasi = window.document.getElementById('numEvasi') as HTMLDivElement
const numDecessi = window.document.getElementById(
    'numDecessi'
) as HTMLDivElement

window.addEventListener('load', function () {
    Database.inizializzaDatabase()
    Grafica.init(divTabella)
    const detenuti = Database.getUtenti('detenuto') as Detenuto[]
    const guardie = Database.getUtenti('guardia') as Guardia[]
    Grafica.cambioVisualizzazioneTabella('guardia', divTabella)
    const rigo = window.document.getElementById('rigo') as HTMLElement
    if (rigo !== null) Grafica.inserisciTupla(guardie, rigo)
    else console.log('Rigo null')
    Grafica.inserisciID(guardie, elimnaID)
    visualizzaStatistiche(guardie, detenuti)
})

function visualizzazioneUtente() {
    const tipo = scegliTipoUtente.value as Type
    const detenuti = Database.getUtenti(tipo) as Detenuto[]
    const guardie = Database.getUtenti(tipo) as Guardia[]
    Grafica.cambiaVisualizzazioneUtente(tipo, divDatiAggiuntiviUtente)
    visualizzaStatistiche(guardie, detenuti)
}

function visualizzaTabellaUtente() {
    const tipo = scegliVisualizzaUtente.value as Type
    const detenuti = Database.getUtenti(tipo) as Detenuto[]
    const guardie = Database.getUtenti(tipo) as Guardia[]
    Grafica.cambioVisualizzazioneTabella(tipo, divTabella)
    const rigo = window.document.getElementById('rigo') as HTMLElement
    if (tipo === 'detenuto') {
        if (rigo !== null) {
            Grafica.inserisciTupla(detenuti, rigo)
            Grafica.inserisciID(detenuti, elimnaID)
        } else console.log('Rigo null')
    } else {
        if (rigo !== null) {
            Grafica.inserisciTupla(guardie, rigo)
            Grafica.inserisciID(guardie, elimnaID)
        } else console.log('Rigo null')
    }
    visualizzaStatistiche(guardie, detenuti)
}

function visualizzaStatistiche(guardie: Guardia[], detenuti: Detenuto[]){
    const num = Database.numero(detenuti, guardie)
    numGED.innerHTML = `
        <h6>Le guardie sono: ${num.guardie}</h6>
        <h6>I detenuti sono: ${num.detenuti}</h6>
    `
    numEvasi.innerHTML = `<h6>I detenuti evasi sono: ${
        Database.evasione(detenuti).numEvaso
    }</h6>`
    numDecessi.innerHTML = `<h6>I detenuti deceduti in questa struttura sono: ${
        Database.decesso(detenuti).numDecesso
    }</h6>`
}

scegliTipoUtente.addEventListener('change', visualizzazioneUtente)
scegliVisualizzaUtente.addEventListener('change', visualizzaTabellaUtente)
rimuovi.addEventListener('click', function () {
    let valore = elimnaID.value
    let id = parseInt(valore[valore.length - 1])
    let tipo = valore[0]
    if (tipo === 'g') {
        Database.removeUtente(id, 'guardia')
    } else {
        Database.removeUtente(id, 'detenuto')
    }
    visualizzaTabellaUtente()
})
btnSalva.addEventListener('click', function () {
    const tipo = scegliTipoUtente.value as Type
    Grafica.acquisisciDati(tipo)
    visualizzaTabellaUtente()
    Grafica.reset()
    scegliTipoUtente.value ='scelta'
    visualizzazioneUtente()
})
