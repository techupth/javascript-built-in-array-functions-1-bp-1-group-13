const students = [
	{ name: "John", score: 80 },
	{ name: "Jane", score: 90 },
	{ name: "Jim", score: 85 },
	{ name: "Joan", score: 95 }
];
let sum = (accumulater,currentValue)=>{
 return accumulater + currentValue
}
function getAverageStudentScore(students){
  let studentScore = students.map((students) => students.score)
  return studentScore.reduce(sum,0) / studentScore.length
}
console.log(getAverageStudentScore(students))
