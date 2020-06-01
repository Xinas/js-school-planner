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
   * Create a Calendar object.
   */
  constructor() {
    this._homework = [];
  }

  /**
   * 
   * @param {Homework} homework 
   */
  addHomework(homework) {
    if (!homework.duration.isBusy()) {
      this.homework.push(homework);
    } else {
      window.alert("Could not enter assignment");
    }
  }

  /**
   * 
   * @param {*} title 
   * @param {*} subject 
   */
  findHomework(title, subject) {
    let element;
    if (title != null) {
      element = this.find(title, "title");
    } else if (subject != null) {
      element = this.find(subject, "subject");
    }
  }

  /**
   * 
   * @param {*} type 
   * @param {*} propertis 
   */
  find(type, propertis) {
    let isFind;
    let i = 0;
    isFind = false;
    while (isFind == false && i < this.homework.length) {
      if (this.homework[i].propertis == type) {
        isFind = true;
      } else {
        i++;
      }
    }
    if (isFind == true) {
      return this.homework[i];
    } else {
      return null;
    }
  }

  /**
   * 
   * @param {*} title 
   */
  removeHomework(title) {
    let element;
    let index;
    element = this.find(title, 'title');
    if (element != null) {
      index = this.homework.indexOf(element);
      this.homework.splice(index, 1);
    }
    else {
      window.alert('could not remove item');
    }
  }

  /**
   * @todo Implement this method.
   */
  toJSON() {
    // Method's implementation.
  }
}