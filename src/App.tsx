import React from 'react'
import './App.css'
import Aggiungi from './components/aggiungi'
import Visualizza from './components/visualizza'
import { Detenuto, Fascicolo, Guardia, TypeUtente } from './types/global'

function App() {
  const [fascicolo, setFascicolo] = React.useState<Fascicolo>({ guardie: [], detenuti: [] })
  const [tipo, setTipo] = React.useState<TypeUtente>('guardia')
  const [record, setRecord] = React.useState<Guardia[] | Detenuto[]>([])

  const addUtente = (utente: Guardia | Detenuto, tipo: TypeUtente) => {
    const newFascicolo = fascicolo
    if (tipo === 'guardia') newFascicolo.guardie.push(utente as Guardia)
    else newFascicolo.detenuti.push(utente as Detenuto)
    setFascicolo(newFascicolo)
  }

  React.useEffect(() => {
    if (tipo === 'guardia') setRecord(fascicolo.guardie)
    else setRecord(fascicolo.detenuti)
  }, [tipo])

  return (
    <div>
      <h1>Carcere di GothamCity</h1>
      <label htmlFor="tipo_utente">Scegli Utenza: </label>
      <select name="tipo_utente" id="tipo_utente" defaultValue={'guardia'} onChange={(event) => { setTipo(event.target.value as TypeUtente) }}>
        <option value="guardia">Guardie</option>
        <option value="detenuto">Detenuti</option>
      </select>
      <Visualizza records={record} type={tipo} />
      <Aggiungi
        tipo={tipo}
        onGuardia={function (guardia: Guardia): void {
          alert('onGuardia')
          console.log(guardia)
          addUtente(guardia, guardia.tipo)
        }}
        onDetenuto={function (detenuto: Detenuto): void {
          alert('onDetenuto')
          console.log(detenuto)
          addUtente(detenuto, detenuto.tipo)
        }}
      />
    </div>
  )
}

export default App
