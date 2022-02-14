import React from 'react'
import { Detenuto, Guardia, TypeUtente } from '../types/global'

interface VisualizzaProps {
    records: Guardia[] | Detenuto[]
    type: TypeUtente
}

const arrayFieldsUtente = ['id', 'nome', 'cognome', 'eta', 'tipo']
const arrayFieldsGuardie = ['data assunzione', 'descrizione']
const arrayFieldsDetenuti = ['data carcerazione', 'data scarcerazione', 'pena', 'evaso', 'deceduto']

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
                        {
                            fields.map((elem: string, key: number) => <td key={key}>{elem}</td>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        records.map((elem: Guardia | Detenuto, key: number) => {
                            <tr key={elem.id}>
                                <td>{elem.id}</td>
                                <td>{elem.nome}</td>
                                <td>{elem.cognome}</td>
                                <td>{elem.eta}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Visualizza