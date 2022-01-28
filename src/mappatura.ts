import { Detenuto, Fascicolo, Guardia, Type } from './types/global.d'

let guardia1: Guardia = {
    nome: 'Maurizio',
    cognome: 'Tolomeo',
    eta: 34,
    tipo: 'guardia',
    data_assunzione: new Date('17/5/2020'),
    descrizione: 'agente',
}

let guardia2: Guardia = {
    nome: 'Giacomo',
    cognome: 'Sardo',
    eta: 32,
    tipo: 'guardia',
    data_assunzione: new Date('1/1/2018'),
    descrizione: 'agente',
}

let detenuto1: Detenuto = {
    nome: 'Francesco',
    cognome: 'Totti',
    eta: 45,
    tipo: 'detenuto',
    data_carcerazione: new Date('25/10/2018'),
    data_scarcerazione: new Date('25/10/2038'),
    pena: 20,
    crimine: 'truffa ai danni dello stato',
    evaso: false,
    deceduto: false,
}

let detenuto2: Detenuto = {
    nome: 'Giacomo',
    cognome: 'Pippo',
    eta: 25,
    tipo: 'detenuto',
    data_carcerazione: new Date('5/11/2019'),
    data_scarcerazione: new Date('5/11/2069'),
    pena: 50,
    crimine: 'omidicio',
    evaso: true,
    deceduto: false,
}

let fascicolo: Fascicolo = {
    guardie: [guardia1, guardia2],
    detenuti: [detenuto1, detenuto2],
}

export const addUtente = (utente: Detenuto | Guardia) => {
    if (utente.tipo === 'detenuto') {
        fascicolo.detenuti.push(utente as Detenuto)
    } else {
        fascicolo.guardie.push(utente as Guardia)
    }
}

export const removeUtente = (pos: number, tipo: Type) => {
    if (tipo === 'detenuto') {
        fascicolo.detenuti.slice(pos, 1)
    } else {
        fascicolo.guardie.slice(pos, 1)
    }
}

export const getUtenti = (tipo: Type) => {
    if (tipo === 'detenuto') {
        return fascicolo.detenuti
    } else {
        return fascicolo.guardie
    }
}
