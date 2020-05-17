/**
 * Implements the Subject class.
 * 
 * This file implements the class Subject, which
 * defines a type of school subject.
 * 
 * @file This file defines the Subject class.
 * @author Andrea Lanzani, Lisa Pezzano
 * Everyone who modifies this file MUST add his/her name
 * @version 1.0alpha
 */

/**
 * @todo Implement this class.
 * @todo Write the documentation.
 * 
 * Class representing a school subject.
 */
export class Subject {
  /**
   * Create a subject.
   */

  /**
   * Constructor w/ parameters.
   * 
   * @param {string} name    - The name of the subject.
   * @param {boolean} isLab  - If it's or not a laboratory subject.
   */
  constructor(name, deadline) {
    this.name = name;
    this.isLab = isLab;
  }

  /**
   * Constructor w/o parameters.
   */
  constructor() {
    name = "";
    isLab = false;
  }
 
  /**
   * Get the name of the subject.
   * @return {string} 
   */
  get name() {
    return name;
  }

  /**
   * Set the name of the subject.
   * @param {string} name 
   */
  set name(name) {
    this.name = name;
  }
  /**
   * Get if it's or not a laboratory subject.
   * @return {boolean}
   */
  get isLab() {
    return isLab;
  }

  /**
   * Set if it's or not a laboratory subject.
   * @param {boolean} isLab
   */
  set isLab(isLab) {
    this.isLab = isLab;
  }

}
