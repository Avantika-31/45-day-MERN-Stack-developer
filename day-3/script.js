
document.addEventListener("DOMContentLoaded", function () {
  const scoreInput = document.getElementById("score");
  const gradeOutput = document.getElementById("garde");
  const button = document.querySelector("button");
  button.addEventListener("click", function () {
    let score = parseInt(scoreInput.value);
    let grade = "";

    if (isNaN(score) || score < 0 || score > 100) {
      grade = "Invalid input!";
    } else if (score >= 90) {
      grade = "A- pass";
    } else if (score >= 80) {
      grade = "B-pass";
    } else if (score >= 70) {
      grade = "C -pass";
    } else if (score >= 60) {
      grade = "D - pass";
    } else {
      grade = "F-fail";
    }

    gradeOutput.value = grade;
  });
});
