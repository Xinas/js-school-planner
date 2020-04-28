interface Homework {
  name: string;
  deadline: Date;
  teacher: string;
}

interface Calendar {
  homework: Homework[];
  // The list of the still available dates to put homework
  available: Date[];
}

function addHomework(homework: Homework) {
  // ToDo: Implementation
}

function removeHomework(homework: Homework) {
  // ToDo: Implementation
}

function addAvailableDate(date: Date) {
  // ToDo: Implementation
}

function removeAvailableDate(date: Date) {
  // ToDo: Implementation
}