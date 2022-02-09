import Database from './database'
import { Campo, Detenuto, Guardia, Type } from './types/global'

/*
  non chiamare il database qui
*/

namespace Grafica {
    /**
     *
     * @param tipo
     * @param divElement
     */
    export function cambiaVisualizzazioneUtente(
        tipo: Type,
        divElement: HTMLDivElement
    ) {
        if (tipo === 'guardia') {
            dati_guardia(divElement)
        } else if (tipo === 'detenuto') {
            dati_detenuto(divElement)
        } else if (tipo === 'scelta') {
            dati_Vuoti(divElement)
        }
    }

    /**
     *
     * @param tipo
     * @param divElement
     */
    export function cambioVisualizzazioneTabella(
        tipo: Type,
        divElement: HTMLDivElement
    ) {
        tipo === 'guardia'
            ? (divElement.innerHTML = creazioneTabella([
                  'ID',
                  'Nome',
                  'Cognome',
                  'Età',
                  'Tipo',
                  'Data assunzione',
                  'Mansione',
              ]))
            : (divElement.innerHTML = creazioneTabella([
                  'ID',
                  'Nome',
                  'Cognome',
                  'Età',
                  'Tipo',
                  'Data carcerazione',
                  'Data scarcerazione',
                  'Pena',
                  'Crimine',
                  'Evaso',
                  'Deceduto',
              ]))
    }

    /**
     *
     * @param divElement
     */
    export const dati_Vuoti = (divElement: HTMLDivElement) => {
        divElement.innerHTML = ``
    }

    /**
     *
     * @param divElement
     */
    export const dati_guardia = (divElement: HTMLDivElement) => {
        divElement.innerHTML = `
      <form>
        <div class="p-3">
          <div class="row">
            <div class="col">
              <label for="data_assunzione" class="form-label">Data assunzione</label>
            </div>
            <div class="col">
              <label class="form-check-label" for="mansione">Mansione</label>
            </div>
          </div>
          <div class="row">
            <div class="col">
            <input type="date" aria-label="data"  class="form-control" id="data_assunzione">
            </div>
            <div class="col">
            <input type="text"  class="form-control"  id="mansione">
            </div>
          </div>
        </div>
      </form>
  `
    }

    /**
     *
     * @param divElement
     */
    export const dati_detenuto = (divElement: HTMLDivElement) => {
        divElement.innerHTML = `

      <form>
        <div class="p-3">
          <div class="row">
            <div class="col">
              <label for="data_carcerazione" class="form-label">Data carcerazione</label>
            </div>
            <div class="col">
              <label for="data_scarcerazione" class="form-label">Data scarcerazione</label>
            </div>
            <div class="col">
              <label class="form-check-label" for="crimine">Crimine commesso</label>
            </div>
            <div class="col">
              <label class="form-check-label" class="form-control"  for="flexCheckDefault">
               Evaso
              </label>
            </div>
            <div class="col">
              <label class="form-check-label" class="form-control" for="flexCheckDefault">
               Deceduto
              </label>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <input type="date" aria-label="data" class="form-control" id="data_carcerazione">
            </div>
            <div class="col">
             <input type="date" aria-label="data" class="form-control" id="data_scarcerazione">
            </div>
            <div class="col">
             <input type="text" aria-label="crimine"  class="form-control" id="crimine">
            </div>
            <div class="col">
              <div class="form-check">
                <input class="form-check-input" class="form-control"  type="checkbox" value="" id="checkEvaso">
              </div>
            </div>
            <div class="col">
              <div class="form-check">
                <input class="form-check-input" class="form-control" type="checkbox" value="" id="checkDeceduto">
              </div>
            </div>
          </div>
        </div>
      </form>`
    }

    /**
     *
     * @param divElement
     */
    export const init = (divElement: HTMLDivElement) => {
        divElement.innerHTML = creazioneTabella([
            'ID',
            'Nome',
            'Cognome',
            'Età',
            'Tipo',
            'Data assunzione',
            'Mansione',
        ])
    }

    /**
     *
     * @param listaCampi
     * @returns
     */
    export function creazioneTabella(listaCampi: Campo[]) {
        let output = `<table class="table table-success table-striped"><thead><tr>`
        for (let i = 0; i < listaCampi.length; i++) {
            output += `<th scope="col">${listaCampi[i]}</th>`
        }
        output += `</tr></thead><tbody id="rigo"></tbody></table>`
        return output
    }

    /**
     *
     * @param utenti
     * @param divElement
     */
    export function inserisciTupla(
        utenti: Detenuto[] | Guardia[],
        divElement: HTMLElement
    ) {
        divElement.innerHTML = ``
        for (let utente of utenti) {
            if (utente.tipo === 'detenuto') {
                const detenuto = utente as Detenuto
                divElement.innerHTML += `
              <tr>
                  <td>${detenuto.id}</td>
                  <td>${detenuto.nome}</td>
                  <td>${detenuto.cognome}</td>
                  <td>${detenuto.eta}</td>
                  <td>${detenuto.tipo}</td>
                  <td>${detenuto.data_carcerazione.getDate()}/${
                    detenuto.data_carcerazione.getMonth() + 1
                }/${detenuto.data_carcerazione.getFullYear()}</td>
                  <td>${detenuto.data_scarcerazione.getDate()}/${
                    detenuto.data_scarcerazione.getMonth() + 1
                }/${detenuto.data_scarcerazione.getFullYear()}</td>
                  <td>${detenuto.pena}</td>
                  <td>${detenuto.crimine}</td>
                  <td>${detenuto.evaso}</td>
                  <td>${detenuto.deceduto}</td>
              </tr>`
            } else {
                const guardia = utente as Guardia
                divElement.innerHTML += `
              <tr>
                  <td>${guardia.id}</td>
                  <td>${guardia.nome}</td>
                  <td>${guardia.cognome}</td>
                  <td>${guardia.eta}</td>
                  <td>${guardia.tipo}</td>
                  <td>${guardia.data_assunzione.getDate()}/${
                    guardia.data_assunzione.getMonth() + 1
                }/${guardia.data_assunzione.getFullYear()}</td>
                  <td>${guardia.descrizione}</td>
              </tr>`
            }
        }
    }

    export function inserisciID(
        utenti: Detenuto[] | Guardia[],
        secElement: HTMLSelectElement
    ) {
        secElement.innerHTML = ``
        for (let utente of utenti) {
            if (utente.tipo === 'detenuto') {
                const detenuto = utente as Detenuto
                secElement.innerHTML += `
      <option value="detenuto_${detenuto.id}">${detenuto.id}</option>
      `
            } else {
                const guardia = utente as Guardia
                secElement.innerHTML += `
      <option value="guardia_${guardia.id}">${guardia.id}</option>
      `
            }
        }
        return secElement
    }

    export function acquisisciDati(tipo: Type) {
        const detenuto = Database.getUtenti('detenuto') as Detenuto[]
        const guardia = Database.getUtenti('guardia') as Guardia[]
        const num = Database.numero(detenuto, guardia)
        let idG = num.guardie
        let idD = num.detenuti
        let nome = document.getElementById('nome') as HTMLInputElement
        let cognome = document.getElementById('cognome') as HTMLInputElement
        let eta = document.getElementById('eta') as HTMLInputElement
            if (tipo === 'guardia') {
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
                return Database.addUtente(persona)
            } else if (tipo === 'detenuto') {
                let data_carcerazione = document.getElementById(
                    'data_carcerazione'
                ) as HTMLDataElement
                let data_c = new Date(data_carcerazione.value)
                let data_scarcerazione = document.getElementById(
                    'data_scarcerazione'
                ) as HTMLDataElement
                let data_s = new Date(data_scarcerazione.value)
                let crimine = document.getElementById(
                    'crimine'
                ) as HTMLInputElement
                let evaso = document.getElementById(
                    'checkEvaso'
                ) as HTMLInputElement
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
                    pena:
                        Number(data_s.getFullYear()) -
                        Number(data_c.getFullYear()),
                    crimine: crimine.value,
                    evaso: evaso.checked,
                    deceduto: deceduto.checked,
                }
                return Database.addUtente(persona)
            }
        }

        export function reset(){
          const nome = window.document.getElementById('inputNome') as HTMLDivElement
          const cognome = window.document.getElementById('inputCognome') as HTMLDivElement
          const eta = window.document.getElementById('inputEta') as HTMLDivElement
          nome.innerHTML = `<input type="text" aria-label="Nome" class="form-control" id="nome">`
          cognome.innerHTML = `<input type="text" aria-label="Cognome" class="form-control" id="cognome">`
          eta.innerHTML = `<input type="number" class="form-control" id="eta">`
        }
    }

export default Grafica
