//Calculate BMI

// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

function bmi(weight, height) {
  let bmi = weight / Math.pow(height, 2);

  let bodyMassIndex = "";

  if (bmi <= 18.5) {
    bodyMassIndex = "Underweight";
  } else if (bmi <= 25.0) {
    bodyMassIndex = "Normal";
  } else if (bmi <= 30.0) {
    bodyMassIndex = "Overweight";
  } else {
    bodyMassIndex = "Obese";
  }
  return bodyMassIndex;
}
