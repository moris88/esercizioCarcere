import { dD, eD, nD, nG } from './main'
import { Detenuto, Guardia } from './types/global'

export const numero = (detenuti: Detenuto[], guardie: Guardia[]) => {
    nG.innerHTML = `${guardie.length}`
    nD.innerHTML = `${detenuti.length}`
}

export const evasione = (detenuti: Detenuto[]) => {
    let numEvaso = 0
    for (const detenuto of detenuti) {
        if (detenuto.evaso === true) {
            numEvaso = numEvaso + 1
        }
    }
    eD.innerHTML = `${numEvaso}`
}

export const decesso = (detenuti: Detenuto[]) => {
    let numDecesso = 0
    for (const detenuto of detenuti) {
        if (detenuto.deceduto === true) {
            numDecesso = numDecesso + 1
        }
    }
    dD.innerHTML = `${numDecesso}`
}
