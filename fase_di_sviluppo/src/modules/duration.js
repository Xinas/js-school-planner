/**
 * Implements the Duration class.
 * 
 * This file implements the class Duration, which is an
 * extension of the class Date.
 * 
 * @file This file defines the Duration class.
 * @author Andrea Lanzani
 * @author Fabio Casetta
 * Everyone who modifies this file MUST add his/her name
 * @version 1.0alpha
 */

/**
 * @todo Implement this class.
 * @todo Write the documentation.
 * 
 * Class representing a duration.
 * @extends Date
 */
export class Duration extends Date {
  /**
   * Create a duration in minute.
   * 
   * @param {Date} date - The starting date
   * @param {number} duration - The duration
   **/
  constructor(date, duration) {
    // Remember to use 'super()' to call the
    // constructor of the class 'Date':
    // super();
    this._date = date;
    this._duration = duration;
  }
  
  /**
  * This is a method setDate
  *
  * @param {Date} new date
  */
  setDate(date){
        //change attributeof class date
        this._date = date;
  }
  
   /**
  * This is a method setDuration
  *
  * @param {number} new duration
  */
  setDate(duration){
        //change attributeof class duration
        this._duration = duration;
  }
  
  /**
  * This is a method check busy
  *
  * @param {Date}  date
  * @param {number}  duration
  *
  * @return {boolean} isBusy
  */
  isBusy(date, duration){
        //Check if there is already something
        var isBusy = true;
        var hour = this._date.getMinutes() + (this._date.getMinutes()*60);
        var hourDuration = hour + this._duration;
        var hourNew = date.getMinutes + (date.getHours*60);
        var hourDurationNew = hourNew + duration;
        if(this._date.getDate() == date.getDate() && hour >= hourNew || hourNew < hourDuration || hour <= hourDurationNew || hourDurationNew < hourDuration)
          isBusy = false;
        return isBusy;
  }
  toString(){
    console.log("The homewrok is " + date.toString() + "and lasts " + duration + "minutes");
    return "The homewrok is " + date.toString() + "and lasts " + duration + "minutes";
  }
}