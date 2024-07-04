let numericalGrade = 95;

if (numericalGrade >= 90 && numericalGrade <= 100) {
  console.log("A");
} else if (numericalGrade >= 80 && numericalGrade < 90) {
  console.log("B");
} else if (numericalGrade >= 70 && numericalGrade < 80) {
  console.log("C");
} else if (numericalGrade >= 60 && numericalGrade < 70) {
  console.log("D");
} else if (numericalGrade >= 50 && numericalGrade < 60) {
  console.log("E");
} else if (numericalGrade >= 0 && numericalGrade < 50) {
  console.log("F");
} else {
  return "Invalid grade";
}
