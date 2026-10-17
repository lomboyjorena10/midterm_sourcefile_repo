'use strict';

console.log('STUDENT SCORE ARRAY ANALYZER');

// Store the original names and final scores.
const studentNames = ['Ana', 'Ben', 'Carla', 'Daniel', 'Ella'];
const studentScores = [85, 72, 91, 64, 78];

// Store three activity scores for each original student.
const activityScores = [
  [80, 85, 90],
  [70, 72, 74],
  [88, 92, 95],
  [60, 65, 67],
  [75, 78, 81]
];

// Preserve the original names for the activity matrix.
const originalNames = Array.from(studentNames);


// ==================================================
// PART A: DISPLAY ORIGINAL RECORDS
// ==================================================

console.log('\nPART A: ORIGINAL RECORDS');

// Use a for loop to display every student's index, name, and score.
for (let i = 0; i < studentNames.length; i++) {
  console.log(`${i} - ${studentNames[i]}: ${studentScores[i]}`);
}


// ==================================================
// PART B: ADD NEW STUDENTS
// ==================================================

console.log('\nPART B: ADD NEW STUDENTS');

// Add Faith and 88 at the end.
studentNames.push('Faith');
studentScores.push(88);

// Add Aaron and 76 at the beginning.
studentNames.unshift('Aaron');
studentScores.unshift(76);

// Display the updated names, scores, and number of students.
console.log('Updated Names:', studentNames);
console.log('Updated Scores:', studentScores);
console.log('Number of Students:', studentNames.length);


// ==================================================
// PART C: REMOVE AND REPLACE RECORDS
// ==================================================

console.log('\nPART C: REMOVE AND REPLACE RECORDS');

// Remove the first student.
studentNames.shift();
studentScores.shift();

// Remove the last student.
studentNames.pop();
studentScores.pop();

// Find Daniel's index.
const danielIndex = studentNames.indexOf('Daniel');

// Remove Daniel and Daniel's score using splice().
if (danielIndex !== -1) {
  studentNames.splice(danielIndex, 1);
  studentScores.splice(danielIndex, 1);
}

// Insert Grace with a score of 82 at index 2.
studentNames.splice(2, 0, 'Grace');
studentScores.splice(2, 0, 82);

// Display the resulting arrays.
console.log('Names:', studentNames);
console.log('Scores:', studentScores);


// ==================================================
// PART D: CALCULATE CLASS STATISTICS
// ==================================================

console.log('\nPART D: CLASS STATISTICS');

// Calculate the total score using reduce().
const totalScore = studentScores.reduce(
  (sum, score) => sum + score,
  0
);

// Calculate the average score.
const averageScore = totalScore / studentScores.length;

// Find the highest and lowest scores using a loop.
let highestScore = studentScores[0];
let lowestScore = studentScores[0];

for (let i = 1; i < studentScores.length; i++) {
  if (studentScores[i] > highestScore) {
    highestScore = studentScores[i];
  }

  if (studentScores[i] < lowestScore) {
    lowestScore = studentScores[i];
  }
}

// Display all statistics.
console.log('Total Score:', totalScore);
console.log('Average Score:', averageScore.toFixed(2));
console.log('Highest Score:', highestScore);
console.log('Lowest Score:', lowestScore);


// ==================================================
// PART E: ANALYZE PASSING SCORES
// ==================================================

console.log('\nPART E: PASSING-SCORE ANALYSIS');

// The passing score is 75.

// Use filter() to obtain passing scores.
const passingScores = studentScores.filter(score => score >= 75);

// Use map() to produce Passed or Failed statuses.
const statuses = studentScores.map(
  score => score >= 75 ? 'Passed' : 'Failed'
);

// Use some() to check whether at least one student failed.
const atLeastOneFailed = studentScores.some(score => score < 75);

// Use every() to check whether all students passed.
const allStudentsPassed = studentScores.every(score => score >= 75);

// Display all four results.
console.log('Passing Scores:', passingScores);
console.log('Statuses:', statuses);
console.log('At Least One Failed:', atLeastOneFailed);
console.log('All Students Passed:', allStudentsPassed);


// ==================================================
// PART F: SORT AND SEARCH
// ==================================================

console.log('\nPART F: SORT AND SEARCH');

// Copy the scores using Array.from().
const sortedScoresCopy = Array.from(studentScores);

// Sort the copied scores from highest to lowest.
sortedScoresCopy.sort((a, b) => b - a);

// Search for 91 using includes() and indexOf().
const contains91 = sortedScoresCopy.includes(91);
const indexOf91 = sortedScoresCopy.indexOf(91);

// Display the results.
console.log('Scores from Highest to Lowest:', sortedScoresCopy);
console.log('Contains 91:', contains91);
console.log('Index of 91:', indexOf91);


// ==================================================
// PART G: PROCESS A TWO-DIMENSIONAL ARRAY
// ==================================================

console.log('\nPART G: TWO-DIMENSIONAL ARRAY');

const activityAverages = [];

// Use nested loops to process every row and column.
for (let i = 0; i < activityScores.length; i++) {
  let rowTotal = 0;

  for (let j = 0; j < activityScores[i].length; j++) {

    // Display every individual activity score.
    console.log(
      `${originalNames[i]}'s Activity ${j + 1} Score: ${activityScores[i][j]}`
    );

    rowTotal += activityScores[i][j];
  }

  // Calculate the average of the current student's activities.
  const rowAverage = rowTotal / activityScores[i].length;

  // Store the average in activityAverages.
  activityAverages.push(Number(rowAverage.toFixed(2)));

  // Display the student's activity average.
  console.log(
    `${originalNames[i]}'s activity average: ${rowAverage.toFixed(2)}`
  );
}

// Display the resulting activityAverages array.
console.log('Activity Averages:', activityAverages);


// ==================================================
// PART H: CREATE A TEXT SUMMARY
// ==================================================

console.log('\nPART H: TEXT SUMMARY');

// Use join() to display all current student names
// separated by " | ".
const textSummary = studentNames.join(' | ');

console.log('Students:', textSummary);