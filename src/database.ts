import { pulizia } from './grafica'
import { scegliTipoUtente, visualizzaTabellaUtente } from './main'
import { nG, nD, fascicolo } from './mappatura'
import { decesso, evasione, numero } from './statistiche'
import { Detenuto, Guardia, Type } from './types/global'

export function salva() {
    const detenuto = getUtenti('detenuto') as Detenuto[]
    const guardia = getUtenti('guardia') as Guardia[]
    let tipo = scegliTipoUtente.value
    let idG = nG
    let idD = nD
    let nome = document.getElementById('nome') as HTMLInputElement
    let cognome = document.getElementById('cognome') as HTMLInputElement
    let eta = document.getElementById('eta') as HTMLInputElement
    if ((nome.value === '') || (cognome.value === '') || (tipo === 'scelta')) {
        alert('Attenzione! ci sono dei campi vuoti!')
    } else {
        if (tipo === 'guardia') {
            let data_assunzione = document.getElementById(
                'data_assunzione'
            ) as HTMLDataElement
            let descrizione = document.getElementById(
                'mansione'
            ) as HTMLInputElement
            idG++
            let persona: Guardia = {
                id: idG,
                nome: nome.value,
                cognome: cognome.value,
                eta: Number(eta.value),
                tipo: 'guardia',
                data_assunzione: new Date(data_assunzione.value),
                descrizione: descrizione.value,
            }
            addUtente(persona)
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
            idD++
            let persona: Detenuto = {
                id: idD,
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
            addUtente(persona)
        }
        visualizzaTabellaUtente()
        pulizia()
        numero(detenuto, guardia)
        evasione(detenuto)
        decesso(detenuto)
        scegliTipoUtente.value = 'scelta'
    }
    visualizzaTabellaUtente()
}

export const addUtente = (utente: Detenuto | Guardia) => {
    if (utente.tipo === 'detenuto') {
        fascicolo.detenuti.push(utente as Detenuto)
    } else {
        fascicolo.guardie.push(utente as Guardia)
    }
}

export function removeUtente(pos: number, tipo: Type) {
    console.log('Sono qui')
    if (tipo === 'detenuto') {
        console.log('Sto per cancellare un detenuto')
        fascicolo.detenuti.splice(pos - 1, 1)
        console.log('Ho cancellato un detenuto')
    } else {
        console.log('Sto per cancellare duna guardia')
        fascicolo.guardie.splice(pos - 1, 1)
        console.log('Ho cancellato una guardia')
    }
}

export const getUtenti = (tipo: Type) => {
    if (tipo === 'detenuto') {
        return fascicolo.detenuti as Detenuto[]
    } else {
        return fascicolo.guardie as Guardia[]
    }
}
