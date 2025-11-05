document.addEventListener("DOMContentLoaded", () => {
  // 1. Saare zaroori elements ko select karna
  const challengeCircles = document.querySelectorAll(
    ".challenge-circle-white"
  );
  const startButton = document.getElementById("startBtn");
  const errorMessage = document.getElementById("challengeError");

  // === CHANGE 1: Ab hum element ki jagah uska index (0-6) store karenge ===
  let selectedChallengeIndex = -1; // -1 ka matlab hai kuch bhi select nahi hai

  // 2. Har circle par click event lagana (Selection logic)
  // === CHANGE 2: Loop mein 'index' ko bhi get kiya ===
  challengeCircles.forEach((circle, index) => {
    circle.addEventListener("click", () => {
      // Pehle sabse 'selected' class hatao
      challengeCircles.forEach((c) => {
        c.classList.remove("selected");
      });

      // Sirf click kiye gaye circle par 'selected' class lagao
      circle.classList.add("selected");

      // === CHANGE 3: Element ki jagah 'index' ko store kiya ===
      selectedChallengeIndex = index; // index (0 se 6) store ho jayega

      // Agar user ne select kar liya hai, toh error hata do
      errorMessage.style.display = "none";
    });
  });

  // 3. Button par click event lagana (Validation logic)
  startButton.addEventListener("click", () => {
    // === CHANGE 4: Ab 'null' ki jagah '-1' se check kiya ===
    if (selectedChallengeIndex === -1) {
      // Agar kuch bhi select nahi kiya hai
      errorMessage.style.display = "block"; // Error dikhao
    } else {
      // Agar select ho gaya hai
      errorMessage.style.display = "none"; // Error chhupao

      // === CHANGE 5: Naya redirect logic ===
      let targetPage = "";
      if (selectedChallengeIndex === 0) {
        // Pehla circle (index 0) hamesha 3.html par jayega
        targetPage = "3.html";
      } else {
        // Baaki circles (index 1 se 6) 3_2.html, 3_3.html... par jayenge
        // Isliye hum index + 1 ka istemaal karenge (index 1 -> 3_2.html, index 2 -> 3_3.html)
        targetPage = `3_${selectedChallengeIndex + 1}.html`;
      }
      
      console.log(`Redirecting to ${targetPage}`);
      window.location.href = targetPage;
    }
  });
});