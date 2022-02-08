import { Detenuto, Database, Guardia, Type } from './types/global'

/*
    aggiungere la statisticam il database non gestisce la grafica
    implementare il namespace come in grafica
    inserisci tutto qui in database (fascicolo e tutti i detenuti e guardie)
*/

const fascicolo: Database = {
    guardie: [],
    detenuti: [],
}

//namespace

export function inizializzaDatabase() {
    //inserisce la mappatura
    const detenuto1: Detenuto = {
        id: 1,
        nome: 'Francesco',
        cognome: 'Totti',
        eta: 45,
        tipo: 'detenuto',
        data_carcerazione: new Date('2018/10/25'),
        data_scarcerazione: new Date('2038/10/25'),
        pena: 20,
        crimine: 'truffa ai danni dello stato',
        evaso: false,
        deceduto: false,
    }
    fascicolo.detenuti.push(detenuto1)
}

export function salva() {
    const detenuto = getUtenti('detenuto') as Detenuto[]
    const guardia = getUtenti('guardia') as Guardia[]
    let tipo = scegliTipoUtente.value
    let idG = nG
    let idD = nD
    let nome = document.getElementById('nome') as HTMLInputElement
    let cognome = document.getElementById('cognome') as HTMLInputElement
    let eta = document.getElementById('eta') as HTMLInputElement
    if (nome.value === '' || cognome.value === '' ) {
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
    if (tipo === 'detenuto') {
        fascicolo.detenuti.splice(pos - 1, 1)
    } else {
        fascicolo.guardie.splice(pos - 1, 1)
    }
}

export const getUtenti = (tipo: Type) => {
    if (tipo === 'detenuto') {
        return fascicolo.detenuti as Detenuto[]
    } else {
        return fascicolo.guardie as Guardia[]
    }
}
