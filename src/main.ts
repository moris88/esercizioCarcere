import { Detenuto, Guardia, Type } from './types/global'
import Grafica from './grafica'
import Database from './database'

const scegliTipoUtente = window.document.getElementById(
    'scegliTipoUtente'
) as HTMLSelectElement
const divDatiAggiuntiviUtente = window.document.getElementById(
    'divDatiAggiuntiviUtente'
) as HTMLDivElement
const scegliVisualizzaUtente = window.document.getElementById(
    'scegliVisualizzaUtente'
) as HTMLSelectElement
const divTabella = window.document.querySelector(
    '.divTabella'
) as HTMLDivElement
const btnSalva = window.document.getElementById('salva') as HTMLButtonElement
const elimnaID = window.document.getElementById('elimnaID') as HTMLSelectElement
const rimuovi = window.document.getElementById('rimuovi') as HTMLButtonElement

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
    Grafica.visualizzaStatistiche(Database.statistiche(detenuti, guardie))
})

function visualizzazioneUtente() {
    const tipo = scegliTipoUtente.value as Type
    const detenuti = Database.getUtenti(tipo) as Detenuto[]
    const guardie = Database.getUtenti(tipo) as Guardia[]
    Grafica.cambiaVisualizzazioneUtente(tipo, divDatiAggiuntiviUtente)
    Grafica.visualizzaStatistiche(Database.statistiche(detenuti, guardie))
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
    Grafica.visualizzaStatistiche(Database.statistiche(detenuti, guardie))
}

function acquisisciDati(tipo: Type) {
    const detenuto = Database.getUtenti('detenuto') as Detenuto[]
    const guardia = Database.getUtenti('guardia') as Guardia[]
    let nome = document.getElementById('nome') as HTMLInputElement
    let cognome = document.getElementById('cognome') as HTMLInputElement
    let eta = document.getElementById('eta') as HTMLInputElement
    if (tipo === 'guardia') {
        let data_assunzione = document.getElementById(
            'data_assunzione'
        ) as HTMLDataElement
        let descrizione = document.getElementById(
            'mansione'
        ) as HTMLInputElement
        let persona: Guardia = {
            id: Database.getUltimoId('guardia'),
            nome: nome.value,
            cognome: cognome.value,
            eta: Number(eta.value),
            tipo: 'guardia',
            data_assunzione: new Date(data_assunzione.value),
            descrizione: descrizione.value,
        }
        return Database.addUtente(persona)
    } else if (tipo === 'detenuto') {
        let data_carcerazione = document.getElementById(
            'data_carcerazione'
        ) as HTMLDataElement
        let data_c = new Date(data_carcerazione.value)
        let data_scarcerazione = document.getElementById(
            'data_scarcerazione'
        ) as HTMLDataElement
        let data_s = new Date(data_scarcerazione.value)
        let crimine = document.getElementById('crimine') as HTMLInputElement
        let evaso = document.getElementById(
            'checkEvaso'
        ) as HTMLInputElement
        let deceduto = document.getElementById(
            'checkDeceduto'
        ) as HTMLInputElement
        let persona: Detenuto = {
            id: Database.getUltimoId('detenuto'),
            nome: nome.value,
            cognome: cognome.value,
            eta: Number(eta.value),
            tipo: 'detenuto',
            data_carcerazione: new Date(data_carcerazione.value),
            data_scarcerazione: new Date(data_scarcerazione.value),
            pena:
                Number(data_s.getFullYear()) - Number(data_c.getFullYear()),
            crimine: crimine.value,
            evaso: evaso.checked,
            deceduto: deceduto.checked,
        }
        return Database.addUtente(persona)
    }
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
    acquisisciDati(tipo)
    visualizzaTabellaUtente()
    Grafica.reset()
    scegliTipoUtente.value = 'scelta'
    visualizzazioneUtente()
})
