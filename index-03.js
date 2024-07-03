function getLetterGrade(numericalGrade) {
  if (numericalGrade >= 90 && numericalGrade <= 100) {
    return "A";
  } else if (numericalGrade >= 80 && numericalGrade < 90) {
    return "B";
  } else if (numericalGrade >= 70 && numericalGrade < 80) {
    return "C";
  } else if (numericalGrade >= 60 && numericalGrade < 70) {
    return "D";
  } else if (numericalGrade >= 50 && numericalGrade < 60) {
    return "E";
  } else if (numericalGrade >= 0 && numericalGrade < 50) {
    return "F";
  } else {
    return "Invalid grade";
  }
}

console.log(getLetterGrade(95));


