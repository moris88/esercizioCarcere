import { Detenuto, Fascicolo, Guardia } from "./types/global"

export let nG = 0
export let nD = 0

let guardia1: Guardia = {
    id: 1,
    nome: 'Maurizio',
    cognome: 'Tolomeo',
    eta: 34,
    tipo: 'guardia',
    data_assunzione: new Date('2020/5/17'),
    descrizione: 'agente',
}

nG++

let guardia2: Guardia = {
    id: 2,
    nome: 'Giacomo',
    cognome: 'Sardo',
    eta: 32,
    tipo: 'guardia',
    data_assunzione: new Date('2018/1/1'),
    descrizione: 'agente',
}

nG++

let detenuto1: Detenuto = {
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

nD++

let detenuto2: Detenuto = {
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

nD++

export let fascicolo: Fascicolo = {
    guardie: [guardia1, guardia2],
    detenuti: [detenuto1, detenuto2],
}
