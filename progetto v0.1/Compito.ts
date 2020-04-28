//Ronconi - TeP
export class Compito {
    nome: string; //nome del compito
    materia: string; //materia relativa al compito
    scadenza: string; //scadenza del compito
    descrizione: string; //descrizione breve del compito

    constructor(nome: string, materia: string, scadenza: string, descrizione: string) {
        this.nome = nome;
        this.materia = materia;
        this.scadenza = scadenza;
        this.descrizione = descrizione;
    }

    get getNome(): string {
        return this.nome;
    }
    get getMateria(): string {
        return this.materia;
    }
    get getDescrizione(): string {
        return this.descrizione;
    }
    get getScadenza(): string {
        return this.scadenza;
    }

    set setNome(nome: string) {
        this.nome = nome;
    }
    //aggiungerò in seguito gli altri setter e metodi

}