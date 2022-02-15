import React from 'react'
import { Detenuto, Fascicolo, Guardia, TypeUtente } from '../types/global'

interface VisualizzaProps {
    records: Fascicolo
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
    const [listRecords, setListRecords] = React.useState<
        Guardia[] | Detenuto[]
    >([])

    const formatData = (dataString: string | undefined) => {
        const data = dataString ? new Date(dataString) : new Date()
        const giorno =
            data.getDate() < 10 ? '0' + data.getDate() : '' + data.getDate()
        const mese =
            data.getMonth() < 10
                ? '0' + (data.getMonth() + 1)
                : '' + (data.getMonth() + 1)
        return `${giorno}/${mese}/${data.getFullYear()}`
    }

    React.useEffect(() => {
        if (type === 'guardia') {
            setFields([...arrayFieldsUtente, ...arrayFieldsGuardie])
        } else {
            setFields([...arrayFieldsUtente, ...arrayFieldsDetenuti])
        }
    }, [type])

    React.useEffect(() => {
        if (type === 'guardia') setListRecords(records.guardie)
        else setListRecords(records.detenuti)
    }, [records, type])

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {fields.map((elem: string, key: number) => (
                            <td key={key}>
                                <b>{elem}</b>
                            </td>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {listRecords.map(
                        (elem: Guardia | Detenuto, key: number) => {
                            if (elem.tipo === 'guardia') {
                                const guardia = elem as Guardia
                                return (
                                    <tr key={key}>
                                        <td>{guardia.id}</td>
                                        <td>{guardia.nome}</td>
                                        <td>{guardia.cognome}</td>
                                        <td>{guardia.eta}</td>
                                        <td>{guardia.tipo}</td>
                                        <td>
                                            {formatData(
                                                guardia.data_assunzione?.toLocaleString()
                                            )}
                                        </td>
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
                                        <td>{detenuto.tipo}</td>
                                        <td>
                                            {formatData(
                                                detenuto.data_carcerazione?.toISOString()
                                            )}
                                        </td>
                                        <td>
                                            {formatData(
                                                detenuto.data_scarcerazione?.toISOString()
                                            )}
                                        </td>
                                        <td>{detenuto.pena}</td>
                                        <td>{detenuto.evaso ? 'SI' : 'NO'}</td>
                                        <td>
                                            {detenuto.deceduto ? 'SI' : 'NO'}
                                        </td>
                                    </tr>
                                )
                            }
                        }
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Visualizza
