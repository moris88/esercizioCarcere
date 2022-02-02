import {
    divContenitore1,
    divContenitore3,
    selModalita,
    selValore,
} from './dichiarazioni'

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
    if (selModalita.value === '1') {
        guardia()
    } else if (selModalita.value === '2') {
        detenuto()
    } else {
        divContenitore1.innerHTML = ``
    }
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
            <td><input type="date" aria-label="data" id="data_assunzione"></td>
            <td><input type="text" id="mansione"></td>
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
            <td><input type="date" aria-label="data" id="data_carcerazione"></td>
            <td><input type="date" aria-label="data" id="data_scarcerazione"></td>
            <td><input type="text" id="crimine"></td>
        </tr>
        <tr>
            <th>Evaso</th>
            <th>Deceduto</th>
            <th></th>
        </tr>
        <tr>
            <td>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="checkEvaso">
                <label class="form-check-label" for="flexCheckDefault">
                Evaso
                </label>
            </div>
            </td>
         <td>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="checkDeceduto">
                <label class="form-check-label" for="flexCheckDefault">
                Deceduto
                </label>
            </div>
         </td>
        </tr>
        </tbody>
    </table>`
}

export const guardia = () => {
    divContenitore1.innerHTML = `
    <table class="table">
    <thead>
    <tr>
        <th scope="col">ID</th>
        <th scope="col">Nome</th>
        <th scope="col">Cognome</th>
        <th scope="col">Età</th>
        <th scope="col">Tipo</th>
        <th scope="col">Data assunzione</th>
        <th scope="col">Descrizione</th>
    </tr>
    </thead>
    <tbody id="rigo">

    </tbody>
</table>
    `
}

export const detenuto = () => {
    divContenitore1.innerHTML = `
        <table class="table">
        <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Cognome</th>
            <th scope="col">Età</th>
            <th scope="col">Tipo</th>
            <th scope="col">Data carcerazione</th>
            <th scope="col">Data scarcerazione</th>
            <th scope="col">Pena</th>
            <th scope="col">Crimine</th>
            <th scope="col">Evaso</th>
            <th scope="col">Deceduto</th>
        </tr>
        </thead>
        <tbody id="rigo"></tbody>
    </table>
    `
}

export const init = () => {
    guardia()
}


/**
 * function creazioneTabella(listaCampi: Campo[]){

}

function inserisciTupla(listaRecord: Record[]){

}

function inserisciP(testo: string)
 */