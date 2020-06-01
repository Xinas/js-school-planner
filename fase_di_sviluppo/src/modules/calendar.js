/**
 * Implements the Calendar class.
 * 
 * This file implements the class Calendar, which
 * represent a list of homework.
 * 
 * @file This file defines Calendar class.
 * @author Andrea Lanzani
 * @author Francesco Colombo
 * Everyone who modifies this file MUST add his/her name
 * @version 1.0alpha
 */

/**
 * @todo Implement this class.
 * @todo Write the documentation.
 * 
 * Class representing a calendar.
 */

export class Calendar {

  _homework: Homework;

  constructor() {
        this._homework = new Homework();
  }
  addHomework(homework){
      
    if(!homework.duration.isBusy()){
        this.homework.push(homework);
    }
    else{
      window.alert("Could not enter assignment");
    }    
  }

  findHomework(title, subject){

    let element;
    if(title!=null)
        element = this.find(title,"title");
    else if(subject!= null)
        element = this.find(subject,"subject");

    console.log(element);
  }

   findType1(type,properties){

    let found = false;
    let i = 0;
    while(found == false && i<this.homework.length){

        if(this.homework[i].properties == type)
            found = true;
        else 
            i++;
    }
    if(found == true)
        console.log(this.homework[i]);
    else
        console.log("Not found");
  }
  findType2(){//semplice prova

    for (const property in this._homework) {
      console.log(`${property}: ${this._homework[property]}`);
    }
  }
   removeHomework(title){

    let element;
    let index;
    element = this.find(title,"title");
    if(element!=null){
        index = this.homework.indexOf(element);
        this.homework.splice(index,1);
    }
    else
        console.log("could not remove item");
  }
  toJSON(){
    var JSONfile = JSON.stringify(this.homework);
  }

  toString(){
    console.log(this._homework);
  }
}
