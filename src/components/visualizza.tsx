import React from 'react'
import { Detenuto, Guardia, TypeUtente } from '../types/global'

interface VisualizzaProps {
    records: Guardia[] | Detenuto[]
    type: TypeUtente
}

const arrayFieldsUtente = ['id', 'nome', 'cognome', 'eta', 'tipo']
const arrayFieldsGuardie = ['data assunzione', 'descrizione']
const arrayFieldsDetenuti = [
    'data carcerazione',
    'data scarcerazione',
    'pena',
    'evaso',
    'deceduto',
]

const Visualizza: React.FC<VisualizzaProps> = (props) => {
    const { type, records } = props
    const [fields, setFields] = React.useState<string[]>([])

    React.useEffect(() => {
        if (type === 'guardia') {
            setFields([...arrayFieldsUtente, ...arrayFieldsGuardie])
        } else {
            setFields([...arrayFieldsUtente, ...arrayFieldsDetenuti])
        }
    }, [type])

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {fields.map((elem: string, key: number) => (
                            <td key={key}>{elem}</td>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {records.map((elem: Guardia | Detenuto, key: number) => {
                        if (elem.tipo === 'guardia') {
                            const guardia = elem as Guardia
                            return (
                                <tr key={guardia.id}>
                                    <td>{guardia.id}</td>
                                    <td>{guardia.nome}</td>
                                    <td>{guardia.cognome}</td>
                                    <td>{guardia.eta}</td>
                                    <td>{guardia.data_assunzione}</td>
                                    <td>{guardia.descrizione}</td>
                                </tr>
                            )
                        } else {
                            const detenuto = elem as Detenuto
                            return (
                                <tr key={detenuto.id}>
                                    <td>{detenuto.id}</td>
                                    <td>{detenuto.nome}</td>
                                    <td>{detenuto.cognome}</td>
                                    <td>{detenuto.eta}</td>
                                    <td>{detenuto.data_carcerazione}</td>
                                    <td>{detenuto.data_scarcerazione}</td>
                                    <td>{detenuto.pena}</td>
                                    <td>{detenuto.evaso ? 'SI' : 'NO'}</td>
                                    <td>{detenuto.deceduto ? 'SI' : 'NO'}</td>
                                </tr>
                            )
                        }
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Visualizza
