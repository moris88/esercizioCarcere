export type TypeUtente = 'guardia' | 'detenuto'

export interface Utente {
    id: number
    nome: string
    cognome: string
    eta: number
    tipo: TypeUtente
}

export interface Guardia extends Utente {
    data_assunzione?: Date
    descrizione?: string
}

export interface Detenuto extends Utente {
    data_carcerazione?: Date
    data_scarcerazione?: Date
    pena?: number
    evaso?: boolean
    deceduto?: boolean
}

export interface Fascicolo {
    guardie: Guardia[]
    detenuti: Detenuto[]
}
