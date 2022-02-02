import { divContenitore3, id, selModalita, selValore } from './dichiarazioni'
import { detenuto, guardia } from './grafica'
import { visualizzazione } from './main'
import { nG, nD, addUtente, removeUtente } from './mappatura'
import { pulizia } from './pulire'
import { decesso, evasione, numero } from './statistiche'
import { Detenuto, Guardia, Type } from './types/global'

export function salva() {
    let tipo = selValore.value
    let idG = guardia.length + nG
    let idD = detenuto.length + nD
    let nome = document.getElementById('nome') as HTMLInputElement
    let cognome = document.getElementById('cognome') as HTMLInputElement
    let eta = document.getElementById('eta') as HTMLInputElement
    if (tipo === 'g') {
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
    } else if (tipo === 'd') {
        let data_carcerazione = document.getElementById(
            'data_carcerazione'
        ) as HTMLDataElement
        let data_c = new Date(data_carcerazione.value)
        let data_scarcerazione = document.getElementById(
            'data_scarcerazione'
        ) as HTMLDataElement
        let data_s = new Date(data_scarcerazione.value)
        let crimine = document.getElementById('crimine') as HTMLInputElement
        let evaso = document.getElementById('checkEvaso') as HTMLInputElement
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
            pena: Number(data_s.getFullYear()) - Number(data_c.getFullYear()),
            crimine: crimine.value,
            evaso: evaso.checked,
            deceduto: deceduto.checked,
        }
        addUtente(persona)
    }
    visualizzazione()
    pulizia()
    selValore.value = 'scelta'
}

export function rimuovi() {
    let tipo: Type = selModalita.value as Type
    let pos = parseInt(id.value)
    if (tipo === 'detenuto') {
        removeUtente(pos, 'detenuto')
        visualizzazione()
        numero()
        evasione()
        decesso()
    } else {
        removeUtente(pos, 'guardia')
        visualizzazione()
        numero()
        evasione()
        decesso()
    }
}
