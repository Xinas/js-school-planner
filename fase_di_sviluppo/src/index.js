import { Calendar } from './modules/calendar.js';
import { Homework } from './modules/homework.js';
import { Duration } from './modules/duration.js';
import { Subject } from './modules/subject.js';
import items from './items.js';

const subjectsNames = ['Matematica', 'Inglese', 'Italiano', 'Storia'];

let calendar = new Calendar();
for (let i = 0; i < 10; i++) {
  let deadline = new Date(2020, 6, i + 1);
  let duration = new Duration(10 * (i + 1), 2020, 5, 20 + i);
  let subject = new Subject(subjectsNames[Math.floor(Math.random() * 4)], false);
  let homework = new Homework(`Title${i}`, deadline, duration, subject, false);
  calendar.addHomework(homework);
}

let cal2 = new Calendar(items.calendar);
console.log(cal2);
document.querySelector('body').append(JSON.stringify(calendar));
document.querySelector('body').append(document.createElement('p'));
document.querySelector('body').append(JSON.stringify(cal2));
console.log(calendar);
console.log(calendar.toString());
