import { dD, eD, nD, nG } from "./dichiarazioni"
import { getUtenti } from "./mappatura"
import { Detenuto, Guardia } from "./types/global"

export const numero = () => {
    const detenuti = getUtenti('detenuto') as Detenuto[]
    const guardie = getUtenti('guardia') as Guardia[]
    nG.innerHTML = `${guardie.length}`
    nD.innerHTML = `${detenuti.length}`
}

export const evasione = () => {
    let numEvaso = 0;
    const detenuti = getUtenti('detenuto') as Detenuto[]
    for(const detenuto of detenuti){
        if(detenuto.evaso===true){
            numEvaso = numEvaso+1
        }
    }
    eD.innerHTML = `${numEvaso}`
}

export const decesso = () => {
    let numDecesso = 0;
    const detenuti = getUtenti('detenuto') as Detenuto[]
    for(const detenuto of detenuti){
        if(detenuto.deceduto===true){
            numDecesso = numDecesso+1
        }
    }
    dD.innerHTML = `${numDecesso}`
}