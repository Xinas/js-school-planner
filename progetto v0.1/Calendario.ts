//Ronconi - TeP
import { Compito } from './Compito'
import { Giorno } from './Giorno'

export class Calendario {
    giorni: Giorno[]; //vettore di giorni che formano il calendario

    constructor(giorni: number) {
        for (let index = 0; index < giorni; index++) {
            this.giorni.push(new Giorno());
        }
    }

    aggiungiCompito(compito: Compito, giorno: number) {
        this.giorni[giorno].aggiungiCompito(compito);
    }
    //aggiungerò in seguito altri casi d'uso
}