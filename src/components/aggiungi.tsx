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
        tipo: 'guardia'
    })
    const [detenuto, setDetenuto] = React.useState<Guardia>({
        id: 0,
        nome: '',
        cognome: '',
        eta: 0,
        tipo: 'guardia'
    })

    type TypeInput = 'nome' | 'cognome' | 'eta'
    const handleUtente = (event: React.ChangeEvent<HTMLInputElement>, type: TypeInput) => {
        const newGuardia = guardia
        switch (type) {
            case 'nome': newGuardia.nome = event.target.value; break
            case 'cognome': newGuardia.cognome = event.target.value; break
            case 'eta': newGuardia.eta = parseInt(event.target.value); break
            default: break
        }
        setGuardia(newGuardia)
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
                onChange={(event) => handleUtente(event, 'nome')}
            />
            <input
                type="text"
                placeholder="Inserisci cognome"
                onChange={(event) => handleUtente(event, 'nome')}
            />
            <input
                type="number"
                placeholder="Inserisci eta"
                onChange={(event) => handleUtente(event, 'nome')}
            />
            {
                tipo === 'guardia' ? (
                    <>
                        <label htmlFor="data_assunzione">Data assunzione</label>
                        <input
                            id="data_assunzione"
                            type="date"
                            onChange={(event) => handleUtente(event, 'nome')}
                        />
                        <input
                            id="descrizione"
                            placeholder='inserisci descrizione'
                            type="text"
                            onChange={(event) => handleUtente(event, 'nome')}
                        />
                    </>
                ) : (
                    <>
                        <label htmlFor="data_carcerazione">Data carcerazione</label>
                        <input
                            id="data_carcerazione"
                            type="date"
                            onChange={(event) => handleUtente(event, 'nome')}
                        />
                        <label htmlFor="data_scarcerazione">Data scarcerazione</label>
                        <input
                            id="data_scarcerazione"
                            type="date"
                            onChange={(event) => handleUtente(event, 'nome')}
                        />
                        <input
                            id="pena"
                            placeholder='inserisci pena'
                            type="number"
                            onChange={(event) => handleUtente(event, 'nome')}
                        />
                        <label htmlFor="evaso">Evaso</label>
                        <input
                            id="evaso"
                            type="checkbox"
                            onChange={(event) => handleUtente(event, 'nome')}
                        />
                        <label htmlFor="deceduto">Deceduto</label>
                        <input
                            id="deceduto"
                            type="checkbox"
                            onChange={(event) => handleUtente(event, 'nome')}
                        />
                    </>
                )
            }
            <button onClick={() => handleConfirm()}>
                add
            </button>
        </div>
    )
}

export default Aggiungi

