const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function sum(arrayNumber, currentValue) {
  return arrayNumber + currentValue;
}

function getAverageStudentScore(students) {
  let studentScore = students.map((students) => students.score)
  let avg = studentScore.reduce(sum , 0) / studentScore.length;
  return console.log(avg)
}

getAverageStudentScore(students); // Output: 87.5
