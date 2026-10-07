// QUESTION 1: Create Student Objects

const students = [
  { id: 1, name: 'Alice Johnson', age: 20, grades: [85, 92, 78] },
  { id: 2, name: 'Bob Smith', age: 21, grades: [55, 60, 58] },
  { id: 3, name: 'Charlie Davis', age: 19, grades: [95, 88, 91] },
  { id: 4, name: 'Diana Prince', age: 22, grades: [72, 75, 70] },
  { id: 5, name: 'Evan Wright', age: 20, grades: [48, 52, 50] }
];

console.log('--- Question 1: Initial Students Array ---');
console.log(students);


// QUESTION 2: Calculate Averages

function calculateAverage(grades) {
  if (!grades || grades.length === 0) return 0;
  
  const sum = grades.reduce((acc, grade) => acc + grade, 0);
  
  return Number((sum / grades.length).toFixed(2));
}

const studentsWithAverage = students.map(student => ({
  ...student,
  average: calculateAverage(student.grades)
}));

console.log('\n--- Question 2: Students with Calculated Average ---');
console.log(studentsWithAverage);


// QUESTION 3: Filter Passing Students

function getPassingStudents(studentsList) {
  return studentsList.filter(student => student.average >= 60);
}

const passing = getPassingStudents(studentsWithAverage);

console.log('\n--- Question 3: Passing Students (Average >= 60) ---');
console.log(passing);


// QUESTION 4: Functions & Callbacks

function processStudents(studentsList, callback) {
  return studentsList.map(student => callback(student));
}


function addLetterGrade(student) {
  let letterGrade = 'F';
  if (student.average >= 90) {
    letterGrade = 'A';
  } else if (student.average >= 80) {
    letterGrade = 'B';
  } else if (student.average >= 70) {
    letterGrade = 'C';
  } else if (student.average >= 60) {
    letterGrade = 'D';
  }

  return {
    ...student,
    letterGrade
  };
}


function addStatus(student) {
  return {
    ...student,
    status: student.average >= 60 ? 'Pass' : 'Fail'
  };
}

const studentsWithGrades = processStudents(studentsWithAverage, addLetterGrade);
console.log('\n--- Question 4a: Processed with Letter Grades ---');
console.log(studentsWithGrades);

const studentsWithStatus = processStudents(studentsWithAverage, addStatus);
console.log('\n--- Question 4b: Processed with Pass/Fail Status ---');
console.log(studentsWithStatus);