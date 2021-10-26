function createPossibleAnswer(text) {
  var answer = document.createElement("p");
  answer.innerHTML = text;

  return answer;
}

function createTriviaCard(cardData) {
  var cardElement = document.createElement("div");
  cardElement.classList.add("card");

  var section = document.createElement("section");

  var allAnswers = [...cardData.incorrect_answers, cardData.correct_answer];

  allAnswers.forEach((text) => {
    section.appendChild(createPossibleAnswer(text));
  });

  cardElement.innerHTML = `      <header><h1>${cardData.question}</h1></header>
	<h2>${cardData.category}</h2>
	<h2>${cardData.difficulty}</h2>`;

  cardElement.appendChild(section);
  document.body.appendChild(cardElement);
}

fetch("https://opentdb.com/api.php?amount=10")
  .then((response) => response.json())
  .then((data) => {
    data.results.forEach((el) => createTriviaCard(el));
  });
