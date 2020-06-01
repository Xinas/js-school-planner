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

import { Homework } from './homework.js';

/**
 * @todo Implement this class.
 * @todo Write the documentation.
 * 
 * Class representing a calendar.
 */
export class Calendar {

  /**
   * Create calendar object.
   */
  constructor() {
    this._homework = [];
  }

  /**
   * Push a homework to the array.
   * @todo Check if another homework is due for that date.
   * 
   * @param {Homework} homework - The homework to add to the array.
   * @returns {boolean} True if the push was succesful, false otherwise.
   */
  addHomework(homework) {
    this._homework.push(homework);
    return true;
  }

  /**
   * Finds the first homework that has the title passed via arguments.
   * @todo Add the possibility to find homework by other parameters.
   * 
   * @param {string} title - The title of the homework to find.
   * @returns {Homework} The homework found.
   */
  findHomework(title) {
    return this._homework.find(el => el.title === title);
  }

  /**
   * Removes the first homework that has the title passed via arguments.
   * @todo Add the possibility to find homework by other parameters.
   * 
   * @param {string} title - The title of the homework to remove.
   * @returns {boolean} True if it has removed the homework. False otherwise.
   */
  removeHomework(title) {
    const index = this._homework.findIndex(el => el.title === title);
    if (index > -1) {
      this._homework.splice(index, 1);
      return true;
    }
    return false;
  }

  /**
   * @todo Implement this method
   */
  toJSON() {
    // Implement method
  }

  /**
   * Get a string representation of the object
   * 
   * @returns {string} The string representation of the object.
   */
  toString() {
    return this._homework.join('\n');
  }
}
