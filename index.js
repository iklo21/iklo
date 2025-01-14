const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "A"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Venus", "Mars", "Jupiter"],
      answer: "C"
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "B"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  // Load the first question
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;
    document.getElementById("optionA").innerText = currentQuestion.options[0];
    document.getElementById("optionB").innerText = currentQuestion.options[1];
    document.getElementById("optionC").innerText = currentQuestion.options[2];
    document.getElementById("optionD").innerText = currentQuestion.options[3];
  }
  
  // Check answer and update score
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
      const answer = selectedOption.value;
      if (answer === questions[currentQuestionIndex].answer) {
        score++;
      }
      currentQuestionIndex++;
      selectedOption.checked = false;
      if (currentQuestionIndex < questions.length) {
        loadQuestion();
      } else {
        showResults();
      }
    } else {
      alert("Please select an answer.");
    }
  }
  
  // Display the final score
  function showResults() {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("submit-btn").style.display = "none";
    document.getElementById("result-container").innerText = `Your score: ${score} out of ${questions.length}`;
  }
  
  // Event listener for submit button
  document.getElementById("submit-btn").addEventListener("click", checkAnswer);
  
  // Load the first question on page load
  loadQuestion();