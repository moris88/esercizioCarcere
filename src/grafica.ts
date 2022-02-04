import { divNuovoUtente } from './main'
import { Campo, Detenuto, Guardia, Type } from './types/global'

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

const dati_Vuoti = (divElement: HTMLDivElement) => {
    divElement.innerHTML = ``
}

const dati_guardia = (divElement: HTMLDivElement) => {
    divElement.innerHTML = `
    <table class="table">
        <tbody>
        <tr>
            <th>Data assunzione</th>
            <th>Mansione</th>
        </tr>
        <tr>
            <td><input type="date" aria-label="data"  class="form-control" id="data_assunzione"></td>
            <td><input type="text"  class="form-control"  id="mansione"></td>
        </tr>
        </tbody>
    </table>`
}

const dati_detenuto = (divElement: HTMLDivElement) => {
    divElement.innerHTML = `
    <table class="table">
        <tbody>
        <tr>
            <th>Data carcerazione</th>
            <th>Data scarcerazione</th>
            <th>Crimine commesso</th>
        </tr>
        <tr>
            <td><input type="date" aria-label="data" class="form-control" id="data_carcerazione"></td>
            <td><input type="date" aria-label="data" class="form-control" id="data_scarcerazione"></td>
            <td><input type="text" aria-label="crimine"  class="form-control" id="crimine"></td>
            <td>
            <div class="form-check">
                <input class="form-check-input" class="form-control"  type="checkbox" value="" id="checkEvaso">
                <label class="form-check-label" class="form-control"  for="flexCheckDefault">
                Evaso
                </label>
            </div>
            </td>
            <td>
            <div class="form-check">
                <input class="form-check-input" class="form-control" type="checkbox" value="" id="checkDeceduto">
                <label class="form-check-label" class="form-control" for="flexCheckDefault">
                Deceduto
                </label>
            </div>
         </td>
        </tr>
        </tbody>
    </table>`
}

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

function creazioneTabella(listaCampi: Campo[]) {
    let output = `<table class="table table-success table-striped"><thead><tr>`
    for (let i = 0; i < listaCampi.length; i++) {
        output += `<th scope="col">${listaCampi[i]}</th>`
    }
    output += `</tr></thead><tbody id="rigo"></tbody></table>`
    return output
}

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
                <td><button type="button" class="btn btn-danger" id="btnRemove" onClick="removeUtente(${detenuto.id, 'detenuto'})">X</button></td>
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
                <td><button type="button" class="btn btn-danger" id="btnRemove" onClick="removeUtente(${guardia.id, 'guardia'})">X</button></td>
            </tr>`
        }
    }
}

export function pulizia() {
    divNuovoUtente.innerHTML = `
        <h1>Nuovo Utente</h1>
        <form>
          <div class="mb-3">
            <label for="scelta" class="form-label">Chi vuoi inserire: </label>
            <select name="tipo" id="scegliTipoUtente">
                <option value="scelta"  class="form-control" selected>SELEZIONA...</option>
                <option value="guardia">GUARDIA</option>
                <option value="detenuto">DETENUTO</option>
            </select>
          </div>
          <div class="p-3">
            <div class="row">
              <div class="col">
                <label for="name" class="form-label">Nome</label>
              </div>
              <div class="col">
                <label class="form-check-label" for="cognome">Cognome</label>
              </div>
              <div class="col">
                <label class="form-check-label" for="eta">Età</label>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <input type="text" aria-label="Nome" class="form-control" id="nome">
              </div>
              <div class="col">
                <input type="text" aria-label="Cognome" class="form-control" id="cognome">
              </div>
              <div class="col">
                <input type="number" class="form-control" id="eta">
              </div>
            </div>
          </div>
          <div class="mb-3 form-check" id="divDatiAggiuntiviUtente">
        
          </div>
          <div class="container4"><button type="button" id="salva" class="btn btn-outline-secondary">Salva</button></div>
        </form>
        <hr>
                <div class="divStatistiche">
                  <div class="row">
                    <div class="col">
                      <h6>Le guardie sono: </h6>
                      <h6>I detenuti sono: </h6>
                    </div>
                    <div class="col">
                      <h4 id="nG"></h4>
                      <h4 id="nD"></h4>
                    </div>
                    <div class="col">
                      <h6>I detenuti evasi sono: </h6>
                      <h6>I detenuti deceduti sono: </h6>
                    </div>
                    <div class="col">
                      <h4 id="eD"></h4>
                      <h4 id="dD"></h4>
                    </div>
                  </div>
                </div>
    `
}

/*function inserisci(testo: string){

} */
