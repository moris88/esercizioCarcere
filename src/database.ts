import { Detenuto, Fascicolo, Guardia, Type } from './types/global'

/*
    aggiungere la statistica il database non gestisce la grafica
    implementare il namespace come in grafica
    inserisci tutto qui in database (fascicolo e tutti i detenuti e guardie)
*/
namespace Database {
    const fascicolo: Fascicolo = {
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

        fascicolo.detenuti.push(detenuto2)

        const guardia1: Guardia = {
            id: 1,
            nome: 'Maurizio',
            cognome: 'Tolomeo',
            eta: 34,
            tipo: 'guardia',
            data_assunzione: new Date('2020/5/17'),
            descrizione: 'agente',
        }

        fascicolo.guardie.push(guardia1)

        const guardia2: Guardia = {
            id: 2,
            nome: 'Giacomo',
            cognome: 'Sardo',
            eta: 32,
            tipo: 'guardia',
            data_assunzione: new Date('2018/1/1'),
            descrizione: 'agente',
        }

        fascicolo.guardie.push(guardia2)
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

    /**
     *
     * @param detenuti
     * @param guardie
     * @returns
     */
    export const numero = (detenuti: Detenuto[], guardie: Guardia[]) => {
        return {
            guardie: guardie.length,
            detenuti: detenuti.length,
        }
    }

    /**
     *
     * @param detenuti
     * @returns
     */
    export const evasione = (detenuti: Detenuto[]) => {
        let numEvaso = 0
        for (const detenuto of detenuti) {
            if (detenuto.evaso === true) {
                numEvaso++
            }
        }
        return { numEvaso }
    }

    /**
     *
     * @param detenuti
     * @returns
     */
    export const decesso = (detenuti: Detenuto[]) => {
        let numDecesso = 0
        for (const detenuto of detenuti) {
            if (detenuto.deceduto === true) {
                numDecesso++
            }
        }
        return { numDecesso }
    }
}

export default Database
