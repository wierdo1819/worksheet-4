
---

# quiz.js

```javascript
// quiz.js
// Author: Anuroop Singh Arora
// Roll No: 2501660001
// Implements a console-based quiz using prompt() and alert().

const quizQuestions = [
  { question: "What is the capital of France?", answer: "paris" },
  { question: "How many continents are there on Earth?", answer: "7" },
  { question: "Which language is primarily used for web pages (short)?", answer: "html" },
  { question: "What is 5 + 7 ?", answer: "12" },
  { question: "Which planet is known as the Red Planet?", answer: "mars" }
  // Add more questions here if you want
];

function askQuestion(qObj, index, total) {
  const raw = prompt(`Question ${index + 1}/${total}:\n${qObj.question}`);
  // If user clicked "Cancel", raw will be null. Treat it as empty string.
  const answer = (raw === null) ? "" : raw.toLowerCase().trim();
  return answer;
}

function runQuiz() {
  let score = 0;
  const total = quizQuestions.length;

  for (let i = 0; i < total; i++) {
    const qObj = quizQuestions[i];
    const userAnswer = askQuestion(qObj, i, total);

    if (userAnswer === qObj.answer.toLowerCase().trim()) {
      score++;
      alert(`Correct! ✅\nYour current score: ${score}/${i + 1}`);
    } else {
      // Show the correct answer
      alert(`Wrong ❌\nCorrect answer: "${qObj.answer}"\nYour current score: ${score}/${i + 1}`);
    }
  }

  alert(`Quiz finished! 🎉\nFinal score: ${score}/${total}`);

  // Optional: offer a restart
  const playAgain = prompt("Type 'yes' to play again, or press Cancel/leave empty to finish.").toLowerCase().trim();
  if (playAgain === "yes") {
    runQuiz();
  } else {
    alert("Thanks for playing! Goodbye 👋");
  }
}

// Automatically start the quiz if this script is pasted in the console.
// Comment out the next line if you want to run runQuiz() manually.
runQuiz();
