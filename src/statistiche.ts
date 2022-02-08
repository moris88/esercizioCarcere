import { Detenuto, Guardia } from './types/global'

/*
    le statistiche sono una cosa gestita dal database non utilizzando la grafica
*/

export const numero = (detenuti: Detenuto[], guardie: Guardia[], nG: HTMLElement, nD: HTMLElement) => {
    nG.innerHTML = `${guardie.length}`
    nD.innerHTML = `${detenuti.length}`
    return {
        guardie: guardie.length,
        detenuti: detenuti.length
    }
}

export const evasione = (detenuti: Detenuto[], eD: HTMLElement) => {
    let numEvaso = 0
    for (const detenuto of detenuti) {
        if (detenuto.evaso === true) {
            numEvaso = numEvaso + 1
        }
    }
    eD.innerHTML = `${numEvaso}`
}

export const decesso = (detenuti: Detenuto[], dD: HTMLElement) => {
    let numDecesso = 0
    for (const detenuto of detenuti) {
        if (detenuto.deceduto === true) {
            numDecesso = numDecesso + 1
        }
    }
    dD.innerHTML = `${numDecesso}`
}
