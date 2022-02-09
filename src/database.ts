import { Detenuto, Fascicolo, Guardia, Statistiche, Type } from './types/global'

namespace Database {
    const fascicolo: Fascicolo = {
        guardie: [],
        detenuti: [],
    }

    export function inizializzaDatabase() {
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
        const detenuto2: Detenuto = {
            id: 2,
            nome: 'Giacomo',
            cognome: 'Pippo',
            eta: 25,
            tipo: 'detenuto',
            data_carcerazione: new Date('2019/11/5'),
            data_scarcerazione: new Date('2069/11/5'),
            pena: 50,
            crimine: 'omidicio',
            evaso: true,
            deceduto: false,
        }

        const guardia1: Guardia = {
            id: 1,
            nome: 'Maurizio',
            cognome: 'Tolomeo',
            eta: 34,
            tipo: 'guardia',
            data_assunzione: new Date('2020/5/17'),
            descrizione: 'agente',
        }

        const guardia2: Guardia = {
            id: 2,
            nome: 'Giacomo',
            cognome: 'Sardo',
            eta: 32,
            tipo: 'guardia',
            data_assunzione: new Date('2018/1/1'),
            descrizione: 'agente',
        }

        fascicolo.guardie.push(guardia1, guardia2)
        fascicolo.detenuti.push(detenuto1, detenuto2)
    }

    /**
     *
     * @param utente
     */
    export const addUtente = (utente: Detenuto | Guardia) => {
        if (utente.tipo === 'detenuto') {
            fascicolo.detenuti.push(utente as Detenuto)
        } else {
            fascicolo.guardie.push(utente as Guardia)
        }
    }

    /**
     *
     * @param pos
     * @param tipo
     */
    export function removeUtente(pos: number, tipo: Type) {
        if (tipo === 'detenuto') {
            fascicolo.detenuti.splice(pos - 1, 1)
        } else {
            fascicolo.guardie.splice(pos - 1, 1)
        }
    }

    /**
     *
     * @param tipo
     * @returns
     */
    export const getUtenti = (tipo: Type) => {
        if (tipo === 'detenuto') {
            return fascicolo.detenuti as Detenuto[]
        } else {
            return fascicolo.guardie as Guardia[]
        }
    }

    export const getUltimoId = (tipo: Type) => {
        if(tipo === 'detenuto')
            return fascicolo.detenuti[fascicolo.detenuti.length-1].id + 1
        else
            return fascicolo.guardie[fascicolo.guardie.length-1].id + 1 
    }

    /**
     *
     * @param detenuti
     * @param guardie
     * @returns
     */
    export const statistiche = (detenuti: Detenuto[], guardie: Guardia[]): Statistiche => {
        let numEvaso = 0
        let numDecesso = 0
        for (const detenuto of detenuti) {
            if (detenuto.evaso === true) {
                numEvaso++
            }
            if (detenuto.deceduto === true) {
                numDecesso++
            }
        }
        return {
            nGuardie: guardie.length,
            nDetenuti: detenuti.length,
            nDecessi: numDecesso,
            nEvasi: numEvaso
        }
    }
}

export default Database
