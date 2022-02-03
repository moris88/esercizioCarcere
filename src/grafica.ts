import {
    colonna,
    divContenitore1,
    divContenitore3,
    selModalita,
    selValore,
} from './main'
import { Campo } from './types/global'

export function cambio() {
    //valore.value === 'g' ? dati_guardia() : dati_detenuto()
    if (selValore.value === 'g') {
        dati_guardia()
    } else if (selValore.value === 'd') {
        dati_detenuto()
    } else {
        divContenitore3.innerHTML = ``
    }
}

export function onChangeSwitchType() {
    console.log(selModalita.value)
    selModalita.value === 'guardia' ? guardia() : detenuto()    
}

const dati_guardia = () => {
    divContenitore3.innerHTML = `
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

const dati_detenuto = () => {
    divContenitore3.innerHTML = `
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

export const guardia = () => {
    console.log('Guardia')
    divContenitore1.innerHTML = `
    <table class="table table-success table-striped">
        <thead>
        <tr>
            ${creazioneTabella([
                'ID',
                'Nome',
                'Cognome',
                'Età',
                'Tipo',
                'Data assunzione',
                'Mansione',
            ])}
        </tr>
        </thead>
        <tbody id="rigo"></tbody>
    </table>
    `
}

export const detenuto = () => {
    console.log('Detenuto')
    divContenitore1.innerHTML = `<table class="table table-success table-striped">
            <thead>
            <tr id="colonna">
                ${creazioneTabella([
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
                ])}
                </tr>
                </thead>
                <tbody id="rigo"></tbody>
            </table>
        `
}

export const init = () => {
    guardia()
}

function creazioneTabella(listaCampi: Campo[]) {
    let output = ``
    if(colonna !== null){
        for (let i = 0; i < listaCampi.length; i++) {
            output += `<th scope="col">${listaCampi[i]}</th>`
        }
    }
    console.log(output)
    return output
}

/*function inserisciTupla(listaRecord: Record[]){

}

function inserisci(testo: string){

} */
