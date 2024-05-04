const quizData = [
    {
      question: "Evet hayır oyunu oynayacağız. Sana 2 soru soracağım ve sadece bir kere evet ya da hayır deme hakkın var. Hazır mısın?",
      options: ["Evet", "Hayır", "Emin Değilim"],
      answer: "Evet"
    },
    {
      question: "Gay misin?",
      options: ["Evet", "Hayır"],
      answer: ["Evet", "Hayır"]
    },
  {
      question: "Yalan mı söylüyorsun?",
      options: ["Evet", "Hayır"],
      answer: ["Evet", "Hayır"]
    },
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
  }
  
  showQuestion();
