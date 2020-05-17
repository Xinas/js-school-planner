/**
 * Implements the Homework class.
 * 
 * This file implements the class Homework, which
 * defines a school task.
 * 
 * @file This file defines Homework class.
 * @author Riccardo Ronconi
 * Everyone who modifies this file MUST add his/her name
 * @version 1.0alpha
 */

import { Duration } from './duration.js';
import { Subject } from './subject.js';

/**
 * @todo Implement this class.
 * @todo Write the documentation.
 * 
 * Class representing a school homework.
 */
export class Homework {

  /**
   * Create a homework.
   * 
   * @param {string} title - The title of the homework.
   * @param {Date} deadline - The date of the homework's deadline.
   * @param {Duration} duration - The duration of the homework.
   * @param {Subject} subject - The subject of the homework.
   * @param {boolean} idDone - Whether the homework is done.
   * @param {?string} description - The description of the homework.
   */
  constructor(title, deadline, duration, subject, isDone, description) {
    this._title = title;
    this._deadline = deadline;
    this._duration = duration;
    this._subject = subject;
    this._isDone = isDone;
    this._description = description;
  }

  /**
   * Get the title of the homework.
   * @return {string} The homework's title.
   */
  get title() {
    return this._title;
  }

  /**
   * Set the title of the homework.
   * @param {string} title - The homework's new title.
   */
  set title(newTitle) {
    this._title = newTitle;
  }

  /**
   * Get the deadline of the homework.
   * @return {Date} The homework's deadline.
   */
  get deadline() {
    return this._deadline;
  }

  /**
   * Set the deadline of the homework.
   * @param {Date} newDeadline - The homework's new deadline.
   */
  set deadline(newDeadline) {
    this._deadline = newDeadline;
  }

  /**
   * Get the duration of the homework.
   * @return {Duration} The homework's duration.
   */
  get duration() {
    return this._duration;
  }

  /**
   * Set the duration of the homework.
   * @param {Duration} newDuration - The homework's new duration.
   */
  set duration(newDuration) {
    this._duration = newDuration;
  }

  /**
   * Get the subject of the homework.
   * @return {Subject} The homework's subject.
   */
  get subject() {
    return this._subject;
  }

  /**
   * Set the subject of the homework.
   * @param {Subject} newSubject - The homework's new subject.
   */
  set subject(newSubject) {
    this._subject = newSubject;
  }

  /**
   * Get the state of the homework.
   * @return {boolean} The homework's state.
   */
  get isDone() {
    return this._isDone;
  }

  /**
   * Set the state of the homework.
   * @param {boolean} isDone - The homework's new state.
   */
  set isDone(isDone) {
    this._isDone = isDone;
  }

  /**
   * Get the description of the homework.
   * @return {string} The homework's description.
   */
  get description() {
    return this._description;
  }

  /**
   * Set the description of the homework.
   * @param {string} newDescription - The homework's new description.
   */
  set description(newDescription) {
    this._description = newDescription;
  }

  /**
   * Get the days remaining from the homework's deadline.
   * @return {number} The number of days remaining from the homework's deadline.
   */
  getDaysRemaining() {
    var today = Date.now();
    var diffTime = Math.abs(this.deadline - today);
    var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }
}