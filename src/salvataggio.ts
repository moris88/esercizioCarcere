import { divContenitore2, divContenitore3, selValore } from './dichiarazioni'
import { detenuto, guardia } from './grafica'
import { visualizzazione } from './main'
import { nG, nD, addUtente } from './mappatura'
import { Detenuto, Guardia } from './types/global'

export function salva() {
    let tipo = selValore.value
    let idG = guardia.length + nG
    let idD = detenuto.length + nD
    let nome = document.getElementById('nome') as HTMLInputElement
    let cognome = document.getElementById('cognome') as HTMLInputElement
    let eta = document.getElementById('eta') as HTMLInputElement
    if (tipo === 'g') {
        let data_assunzione = document.getElementById(
            'data_assunzione'
        ) as HTMLDataElement
        let descrizione = document.getElementById(
            'mansione'
        ) as HTMLInputElement
        idG++
        let persona: Guardia = {
            id: idG,
            nome: nome.value,
            cognome: cognome.value,
            eta: Number(eta.value),
            tipo: 'guardia',
            data_assunzione: new Date(data_assunzione.value),
            descrizione: descrizione.value,
        }
        addUtente(persona)
    } else if (tipo === 'd') {
        let data_carcerazione = document.getElementById(
            'data_carcerazione'
        ) as HTMLDataElement
        let data_c = new Date(data_carcerazione.value)
        let data_scarcerazione = document.getElementById(
            'data_scarcerazione'
        ) as HTMLDataElement
        let data_s = new Date(data_scarcerazione.value)
        let crimine = document.getElementById('crimine') as HTMLInputElement
        let evaso = document.getElementById('checkEvaso') as HTMLInputElement
        let deceduto = document.getElementById(
            'checkDeceduto'
        ) as HTMLInputElement
        idD++
        let persona: Detenuto = {
            id: idD,
            nome: nome.value,
            cognome: cognome.value,
            eta: Number(eta.value),
            tipo: 'detenuto',
            data_carcerazione: new Date(data_carcerazione.value),
            data_scarcerazione: new Date(data_scarcerazione.value),
            pena: Number(data_s.getFullYear()) - Number(data_c.getFullYear()),
            crimine: crimine.value,
            evaso: evaso.checked,
            deceduto: deceduto.checked,
        }
        addUtente(persona)
    }
    visualizzazione()
    pulizia()
}

const pulizia = () => {
    divContenitore2.innerHTML = `
    <h1>Nuovo Utente</h1>
    <table class="table">
        <tbody>
          <tr>
            <th>Nome</th>
            <th>Cognome</th>
          </tr>
          <tr>
            <td><input type="text" aria-label="Nome" class="form-control" id="nome"></td>
            <td><input type="text" aria-label="Cognome" class="form-control" id="cognome"></td>
          </tr>
          <tr>
            <th>Mansione</th>
            <th>Età</th>
          </tr>
          <tr>
           <td>
               <select name="tipo" id="tipo">
                   <option value="scelta" selected>SELEZIONA...</option>
                    <option value="g">GUARDIA</option>
                    <option value="d">DETENUTO</option>
                </select>
            </td>
            <td><input type="number" id="eta"></td>
          </tr>
        </tbody>
    </table>
    `
    divContenitore3.innerHTML = ``
}
