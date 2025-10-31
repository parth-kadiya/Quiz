document.addEventListener("DOMContentLoaded", () => {
  // 1. Saare zaroori elements ko select karein
  const submitButton = document.getElementById("submitBtn"); // 'nextBtn' se 'submitBtn' kiya
  const quizOptions = document.querySelectorAll('input[name="quiz1"]');
  const errorMessage = document.getElementById("quizError");
  const correctAnswer = document.querySelector(".correct-answer");
  const rationaleBox = document.querySelector(".rationale-box");
  const finalNextButton = document.querySelector(".quiz-final-controls"); // Naya 'Next' button container

  // 2. Button par click listener add karein
  submitButton.addEventListener("click", () => { // 'nextButton' se 'submitButton' kiya
    let isSelected = false;

    // 3. Check karein ki koi option select hua hai ya nahi
    for (const option of quizOptions) {
      if (option.checked) {
        isSelected = true;
        break;
      }
    }

    // 4. Logic apply karein
    if (isSelected) {
      // Agar select hua hai:
      errorMessage.style.display = "none"; // Error chhupayein
      correctAnswer.style.display = "flex"; // Answer dikhayein
      rationaleBox.style.display = "block"; // Rationale dikhayein
      submitButton.style.display = "none"; // 'Submit' Button ko hide kar dein
      finalNextButton.style.display = "block"; // Naya 'Next' button dikhayein
    } else {
      // Agar select nahi hua hai:
      errorMessage.style.display = "block"; // Error dikhayein
      correctAnswer.style.display = "none"; // Answer chhupayein
      rationaleBox.style.display = "none"; // Rationale chhupayein
      finalNextButton.style.display = "none"; // Naya 'Next' button bhi chhupayein
    }
  });
});