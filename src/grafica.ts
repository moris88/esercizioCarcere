import { Campo, Detenuto, Guardia, Type } from './types/global'

export function cambiaVisualizzazioneUtente(tipo: Type, divElement: HTMLDivElement) {
    if (tipo === 'guardia') {
        dati_guardia(divElement)
    } else if (tipo ==='detenuto') {
        dati_detenuto(divElement)
    }
}

export function cambioVisualizzazioneTabella(tipo: Type, divElement: HTMLDivElement) {
    tipo === 'guardia' ? 
    divElement.innerHTML = creazioneTabella([
        'ID',
        'Nome',
        'Cognome',
        'Età',
        'Tipo',
        'Data assunzione',
        'Mansione',
    ]) : 
    divElement.innerHTML = creazioneTabella([
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
    ])    
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

export function inserisciTupla(utenti: Detenuto[]|Guardia[], divElement: HTMLElement){
    divElement.innerHTML = ``
    for(let utente of utenti){
        if(utente.tipo==='detenuto'){
            const detenuto = utente as Detenuto
            divElement.innerHTML += `
            <tr>
                <td>${detenuto.id}</td>
                <td>${detenuto.nome}</td>
                <td>${detenuto.cognome}</td>
                <td>${detenuto.eta}</td>
                <td>${detenuto.tipo}</td>
                <td>${detenuto.data_carcerazione}</td>
                <td>${detenuto.data_scarcerazione}</td>
                <td>${detenuto.pena}</td>
                <td>${detenuto.crimine}</td>
                <td>${detenuto.evaso}</td>
                <td>${detenuto.deceduto}</td>
            </tr>`
        }else{
            const guardia = utente as Guardia
            divElement.innerHTML += `
            <tr>
                <td>${guardia.id}</td>
                <td>${guardia.nome}</td>
                <td>${guardia.cognome}</td>
                <td>${guardia.eta}</td>
                <td>${guardia.tipo}</td>
                <td>${guardia.data_assunzione}</td>
                <td>${guardia.descrizione}</td>
            </tr>`
        }
    }
}

/*function inserisci(testo: string){

} */
