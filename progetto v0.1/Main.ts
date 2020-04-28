//Ronconi - TeP - VERSIONE BETA 0.1
import { Calendario } from './Calendario'
import { Compito } from './Compito'

class Main {
    private calendario1: Calendario;
    private compito1: Compito;

    constructor() {
        this.calendario1 = new Calendario(7); //ho creato un calendario di 7 giorni
        this.compito1 = new Compito("Studia X pagine", "Italiano", "05/05/2020", "Devo studiare X pagione su Ugo Foscolo");
        this.calendario1.aggiungiCompito(this.compito1, 0); //ho aggiunto un compito nel primo giorno del calendario (gli indici partono da 0)
    }
}

var main = new Main();