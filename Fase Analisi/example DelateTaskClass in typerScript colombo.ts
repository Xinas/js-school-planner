/*Example class eliminates task*/

class delateTask{

    name_of_assignment : String;
    name_of_matter : String;
    exist : boolean;
    constructor( nameTask : String, matter : String){
        //costruttore ipotetico per inizilizare gli attributi
    }

    findAssignament(nameTask:String,matter:String):boolean{
        //cerca il compito se c'è ritorna true e si può eliminare
        //altrimenti false se non lo trova
        return true;
    }

    delateAssignament(nameTask:String,matter:String):void{

        //il metodo accede ai dati del compito se c'è ovviamente e lo cancella 
        //appena cancellato 
        this.updateInfo(nameTask);
    }

    updateInfo(nameTask:String){
        //accede al calendario e ai dati del compito relativi alla consegna e li modifica
    } 
}

