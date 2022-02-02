import { removeUtente } from './mappatura'
import {
    divContenitore2,
    divContenitore3,
    id,
    selModalita,
} from './dichiarazioni'
import { cambio } from './grafica'
import { Type } from './types/global'

export function pulizia() {
    divContenitore2.innerHTML = `
    <h1>Nuovo Utente</h1>
                    <table class="table">
                        <tbody>
                          <tr>
                          <td></td>
                            <th style="text-align: left;">
                              Chi vuoi inserire: 
                                <select name="tipo" id="tipo">
                                    <option value="scelta" selected>SELEZIONA...</option>
                                     <option value="g">GUARDIA</option>
                                     <option value="d">DETENUTO</option>
                                 </select>
                             </th>
                             <td></td>
                          </tr>
                          <tr>
                            <th>Nome</th>
                            <th>Cognome</th>
                            <th>Età</th>
                          </tr>
                          <tr>
                            <td><input type="text" aria-label="Nome" class="form-control" id="nome"></td>
                            <td><input type="text" aria-label="Cognome" class="form-control" id="cognome"></td>
                            <td><input type="number" id="eta"></td>
                          </tr>
                        </tbody>
                    </table>
    `
    divContenitore3.innerHTML = ``
}
