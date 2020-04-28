//Ronconi - TeP
import { Compito } from './Compito'

export class Giorno {
    compiti: Compito[]; //vettore di compiti

    aggiungiCompito(compito: Compito) {
        this.compiti.push(compito);
    }
    //aggiungerò in seguito altri casi d'uso

}