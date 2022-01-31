export type Type = 'detenuto' | 'guardia'

export interface Guardia {
    id: number
    nome: string
    cognome: string
    eta?: number
    tipo: Type
    data_assunzione: Date
    descrizione?: string
}

export interface Detenuto {
    id: number
    nome: string
    cognome: string
    eta?: number
    tipo: Type
    data_carcerazione: Date
    data_scarcerazione: Date
    pena: number
    crimine?: string
    evaso?: boolean
    deceduto?: boolean
}

export interface Fascicolo {
    guardie: Guardia[]
    detenuti: Detenuto[]
}
