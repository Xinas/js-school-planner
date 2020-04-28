 class view_homework {
    homework: string[];

    constructor(homework: string[]) {
        //metto in un vettore tutti i compiti inseriti con tutti i parametri
         this.homework = homework;
    }

    strainer(filtro: string){
        //visualizza compiti in base al filtro
    }

    delivery_button(confirmation: boolean){
        //conferma consegna 
        //se abbandona prima non viene consegnato nulla
        //errore se è già presente una consegna
    }
 }