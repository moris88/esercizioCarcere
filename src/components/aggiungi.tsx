import React from 'react'
import { Detenuto, Guardia, TypeUtente } from '../types/global'

interface AggiungiProps {
    onGuardia: (guardia: Guardia) => void
    onDetenuto: (detenuto: Detenuto) => void
    tipo: TypeUtente
}

const Aggiungi: React.FC<AggiungiProps> = (props) => {
    const { tipo } = props
    const [guardia, setGuardia] = React.useState<Guardia>({
        id: 0,
        nome: '',
        cognome: '',
        eta: 0,
        tipo: 'guardia',
    })
    const [detenuto, setDetenuto] = React.useState<Detenuto>({
        id: 0,
        nome: '',
        cognome: '',
        eta: 0,
        tipo: 'detenuto',
    })

    type TypeInput =
        | 'nome'
        | 'cognome'
        | 'eta'
        | 'data_assunzione'
        | 'data_carcerazione'
        | 'data_scarcerazione'
        | 'descrizione'
        | 'pena'
        | 'evaso'
        | 'deceduto'
    const handleUtente = (
        event: React.ChangeEvent<HTMLInputElement>,
        typeInput: TypeInput,
        type: TypeUtente
    ) => {
        if (type === 'guardia') {
            const newGuardia = guardia
            switch (typeInput) {
                case 'nome':
                    newGuardia.nome = event.target.value
                    break
                case 'cognome':
                    newGuardia.cognome = event.target.value
                    break
                case 'eta':
                    newGuardia.eta = parseInt(event.target.value)
                    break
                case 'data_assunzione':
                    newGuardia.data_assunzione = new Date(event.target.value)
                    break
                case 'descrizione':
                    newGuardia.descrizione = event.target.value
                    break
                default:
                    break
            }
            setGuardia(newGuardia)
        } else {
            const newDetenuto = detenuto
            switch (typeInput) {
                case 'nome':
                    newDetenuto.nome = event.target.value
                    break
                case 'cognome':
                    newDetenuto.cognome = event.target.value
                    break
                case 'eta':
                    newDetenuto.eta = parseInt(event.target.value)
                    break
                case 'data_carcerazione':
                    newDetenuto.data_carcerazione = new Date(event.target.value)
                    break
                case 'data_scarcerazione':
                    newDetenuto.data_scarcerazione = new Date(
                        event.target.value
                    )
                    break
                case 'pena':
                    newDetenuto.pena = parseInt(event.target.value)
                    break
                case 'cognome':
                    newDetenuto.cognome = event.target.value
                    break
                case 'cognome':
                    newDetenuto.cognome = event.target.value
                    break
                default:
                    break
            }
            setDetenuto(newDetenuto)
        }
    }

    const handleConfirm = () => {
        if (tipo === 'guardia') props.onGuardia(guardia)
        else if (tipo === 'detenuto') props.onDetenuto(detenuto)
    }

    return (
        <div>
            <h3>Aggiungi {tipo}</h3>
            <input
                type="text"
                placeholder="Inserisci nome"
                onChange={(event) => handleUtente(event, 'nome', tipo)}
            />
            <input
                type="text"
                placeholder="Inserisci cognome"
                onChange={(event) => handleUtente(event, 'cognome', tipo)}
            />
            <input
                type="number"
                placeholder="Inserisci eta"
                min={18}
                max={80}
                defaultValue={18}
                onChange={(event) => handleUtente(event, 'eta', tipo)}
            />
            {tipo === 'guardia' ? (
                <>
                    <label htmlFor="data_assunzione">Data assunzione</label>
                    <input
                        id="data_assunzione"
                        type="date"
                        onChange={(event) =>
                            handleUtente(event, 'data_assunzione', tipo)
                        }
                    />
                    <input
                        id="descrizione"
                        placeholder="inserisci descrizione"
                        type="text"
                        onChange={(event) =>
                            handleUtente(event, 'descrizione', tipo)
                        }
                    />
                </>
            ) : (
                <>
                    <label htmlFor="data_carcerazione">Data carcerazione</label>
                    <input
                        id="data_carcerazione"
                        type="date"
                        onChange={(event) =>
                            handleUtente(event, 'data_carcerazione', tipo)
                        }
                    />
                    <label htmlFor="data_scarcerazione">
                        Data scarcerazione
                    </label>
                    <input
                        id="data_scarcerazione"
                        type="date"
                        onChange={(event) =>
                            handleUtente(event, 'data_scarcerazione', tipo)
                        }
                    />
                    <input
                        id="pena"
                        placeholder="inserisci pena"
                        type="number"
                        onChange={(event) => handleUtente(event, 'pena', tipo)}
                    />
                    <label htmlFor="evaso">Evaso</label>
                    <input
                        id="evaso"
                        type="checkbox"
                        onChange={(event) => handleUtente(event, 'evaso', tipo)}
                    />
                    <label htmlFor="deceduto">Deceduto</label>
                    <input
                        id="deceduto"
                        type="checkbox"
                        onChange={(event) =>
                            handleUtente(event, 'deceduto', tipo)
                        }
                    />
                </>
            )}
            <button onClick={() => handleConfirm()}>add</button>
        </div>
    )
}

export default Aggiungi
