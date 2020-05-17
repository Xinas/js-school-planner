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

  constructor() {
        this._homework = null;
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
        element = this.find
        (subject,"subject");

    //element will appear somehow maybe by document.getElemetById().innerHtml or .value
  }

   find(type,propertis){

    let isFind;
    let i = 0;
    isFind = false;
    while(isFind == false && i<this.homework.length){

        if(this.homework[i].propertis == type)
            isFind = true;
        else 
            i++;
    }
    if(isFind == true)
        return this.homework[i];
    else
        return null;
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
        window.alert("could not remove item");
  }

  toJSON(){

    var JSONfile = JSON.stringify(this.homework);
  }
}