import React from 'react'
import './App.css'
import Aggiungi from './components/aggiungi'
import Visualizza from './components/visualizza'
import { Detenuto, Fascicolo, Guardia, TypeUtente } from './types/global'

function App() {
    const [fascicolo, setFascicolo] = React.useState<Fascicolo>({
        guardie: [
            {
                id: 1,
                nome: 'Maurizio',
                cognome: 'Tolomeo',
                eta: 33,
                tipo: 'guardia',
                data_assunzione: new Date('10/05/2021'),
                descrizione: 'agente',
            },
        ],
        detenuti: [
            {
                id: 1,
                nome: 'Maurizio',
                cognome: 'Tolomeo',
                eta: 33,
                tipo: 'detenuto',
                data_carcerazione: new Date('10/05/2021'),
                data_scarcerazione: new Date('10/05/2031'),
                pena: 10,
                evaso: true,
                deceduto: false,
            },
        ],
    })
    const [tipo, setTipo] = React.useState<TypeUtente>('guardia')

    const addUtente = (utente: Guardia | Detenuto, tipo: TypeUtente) => {
        const newFascicolo = fascicolo
        if (tipo === 'guardia') {
            const guardia = utente as Guardia
            const id =
                newFascicolo.guardie.length === 0
                    ? 0
                    : newFascicolo.guardie[newFascicolo.guardie.length - 1].id +
                      1
            guardia.id = id
            newFascicolo.guardie.push(guardia)
            setFascicolo(newFascicolo)
        } else {
            const detenuto = utente as Detenuto
            const id =
                newFascicolo.detenuti.length === 0
                    ? 0
                    : newFascicolo.detenuti[newFascicolo.detenuti.length - 1]
                          .id + 1
            detenuto.id = id
            newFascicolo.detenuti.push(detenuto)
            setFascicolo(newFascicolo)
        }
    }

    return (
        <div>
            <h1>Carcere di GothamCity</h1>
            <label htmlFor="tipo_utente">Scegli Utenza: </label>
            <select
                name="tipo_utente"
                id="tipo_utente"
                defaultValue={'guardia'}
                onChange={(event) => {
                    setTipo(event.target.value as TypeUtente)
                }}
            >
                <option value="guardia">Guardie</option>
                <option value="detenuto">Detenuti</option>
            </select>
            <Visualizza records={fascicolo} type={tipo} />
            <Aggiungi
                tipo={tipo}
                onGuardia={(guardia: Guardia): void => {
                    addUtente(guardia, guardia.tipo)
                }}
                onDetenuto={(detenuto: Detenuto): void => {
                    addUtente(detenuto, detenuto.tipo)
                }}
            />
        </div>
    )
}

export default App
