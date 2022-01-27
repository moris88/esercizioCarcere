const valore = window.document.getElementById('tipo') as HTMLSelectElement
const contenitore = window.document.querySelector(
    '.container3'
) as HTMLDivElement

function cambio() {
    //valore.value === 'g' ? dati_guardia() : dati_detenuto()
    if (valore.value === 'g') {
        dati_guardia()
    } else if (valore.value === 'd') {
        dati_detenuto()
    } else {
        contenitore.innerHTML = ``
    }
}

const dati_guardia = () => {
    contenitore.innerHTML = `
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
    contenitore.innerHTML = `
    <table class="table">
        <tbody>
        <tr>
            <th>ID</th>
            <th>Data carcerazione</th>
            <th>Data scarcerazione</th>
            <th>Crimine commesso</th>
        </tr>
        <tr>
            <td><input type="number" aria-label="id" disabled></td>
            <td><input type="date" aria-label="data" id="data_carcerazione"></td>
            <td><input type="date" aria-label="data" id="data_scarcerazione"></td>
            <td><input type="text" id="crimine"></td>
        </tr>
        <tr>
            <th>Evaso</th>
            <th>Deceduto</th>
        </tr>
        <tr>
            <td>
                <select name="evasione" id="evasione">
                    <option value="scelta" selected>SELEZIONA...</option>
                    <option value="si">SI</option>
                    <option value="no">NO</option>
                </select>
            </td>
         <td>
            <select name="decesso" id="decesso">
                <option value="scelta" selected>SELEZIONA...</option>
                <option value="vero">SI</option>
                <option value="falso">NO</option>
            </select>
         </td>
        </tr>
        </tbody>
    </table>`
}

valore.addEventListener('change', cambio)
