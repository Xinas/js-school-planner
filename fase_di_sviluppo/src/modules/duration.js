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
   * @param {number} duration - Duration in seconds.
   * @param {...any} args - Arguments of the superclass Date.
   */
  constructor(duration, ...args) {
    super(args);
    this._duration = duration;
  }

  /**
   * Set the duration of the object.
   * 
   * @param {number} duration - The object's new duration in seconds.
   */
  set duration(duration) {
    //change attributeof class duration
    this._duration = duration;
  }

  /**
   * Get the duration of the object.
   * 
   * @return {number} The duration of the object in seconds.
   */
  get duration() {
    return this._duration;
  }

  /**
   * Checks whether a certain time is already busy.
   * @todo Refactor the method.
   * @todo Test the method.
   * 
   * @param {Date} date 
   * @param {number} duration 
   * 
   * @return {boolean} True if it's already busy; false otherwise.
   */
  isBusy(date, duration) {
    //Check if there is already something
    var isBusy = true;
    var hour = this._date.getMinutes() + (this._date.getMinutes() * 60);
    var hourDuration = hour + this._duration;
    var hourNew = date.getMinutes + (date.getHours * 60);
    var hourDurationNew = hourNew + duration;
    if (this._date.getDate() == date.getDate() && hour >= hourNew || hourNew < hourDuration || hour <= hourDurationNew || hourDurationNew < hourDuration) {
      isBusy = false;
    }
    return isBusy;
  }

  /**
   * Get a string representation of the object.
   * 
   * @return {string} The string representation of the object.
   */
  toString() {
    return `Start date: ${super.toString()}\nDuration (s): ${this._duration}`;
  }
}