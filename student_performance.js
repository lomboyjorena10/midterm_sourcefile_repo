const students = [
  { score: 95 },
  { score: 84 },
  { score: 77 },
  { score: 71 },
  { score: 62 }
];

let totalScore = 0;
let highestScore = -Infinity;
let lowestScore = Infinity;
let passedCount = 0;
let failedCount = 0;


console.log("Student Scores:");

students.forEach((student) => {
  console.log(student.score);
});

console.log("");

students.forEach((student, index) => {
  let interpretation = "";
  let status = "";

  totalScore += student.score;

  if (student.score > highestScore) highestScore = student.score;
  if (student.score < lowestScore) lowestScore = student.score;

  if (student.score >= 90 && student.score <= 100) {
    interpretation = "Excellent";
    status = "Passed";
    passedCount++;
  } else if (student.score >= 80 && student.score < 90) {
    interpretation = "Very Good";
    status = "Passed";
    passedCount++;
  } else if (student.score >= 75 && student.score < 80) {
    interpretation = "Good";
    status = "Passed";
    passedCount++;
  } else {
    interpretation = "Failed";
    status = "Failed";
    failedCount++;
  }

  if (status === "Failed") {
    console.log(`Student ${index + 1}: ${student.score} - Failed`);
  } else {
    console.log(
      `Student ${index + 1}: ${student.score} - ${interpretation} - ${status}`
    );
  }
});

const averageScore = totalScore / students.length;

console.log("--------------------------------------------");
console.log(`Total Score:   ${totalScore}`);
console.log(`Average Score: ${averageScore}`);
console.log(`Highest Score: ${highestScore}`);
console.log(`Lowest Score:  ${lowestScore}`);
console.log(`Passed:        ${passedCount}`);
console.log(`Failed:        ${failedCount}`);
