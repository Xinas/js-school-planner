/**
 * Implements the Subject class.
 * 
 * This file implements the class Subject, which
 * defines a type of school subject.
 * 
 * @file This file defines the Subject class.
 * @author Andrea Lanzani
 * @author Lisa Pezzano
 * Everyone who modifies this file MUST add his/her name
 * @version 1.0alpha
 */

/**
 * Class representing a school subject.
 */
export class Subject {
  
  /**
   * Create a subject.
   * 
   * @param {string} name - The name of the subject.
   * @param {boolean} isLab - Tells whether it's or not a laboratory subject.
   */
  constructor(name, isLab) {
    this._name = name;
    this._isLab = isLab;
  }
 
  /**
   * Get the name of the subject.
   * @return {string} The subject's name.
   */
  get name() {
    return this._name;
  }

  /**
   * Set the name of the subject.
   * @param {string} name - The subject's new name.
   */
  set name(name) {
    this._name = name;
  }
  /**
   * Get if it's or not a laboratory subject.
   * @return {boolean} The subject's new option
   */
  get isLab() {
    return this._isLab;
  }

  /**
   * Set if it's or not a laboratory subject.
   * @param {boolean} isLab - The subject's option
   */
  set isLab(isLab) {
    this._isLab = isLab;
  }
  
  /**
   * Used by the JSON.stringify method to enable the transformation of an 
   * object's data for JavaScript Object Notation (JSON) serialization.
   */
  toJSON() {
    return {
      name: this.name,
      isLab: this._isLab
    }
  }

  /**
  * Get a string representation of the object.
  * @return {string} The string representation of the object.
  */
  toString() {
    return `Name: ${this._name}\nIs laboratory: ${this._isLab}`;
  }
}
