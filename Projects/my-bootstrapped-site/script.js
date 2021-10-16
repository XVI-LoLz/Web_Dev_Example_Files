function createCard({ image, title, text, cta }) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.width = "18rem";

  card.innerHTML = `
	<img src=${image} alt="" class="card-img-top" />
	<div class="card-body">
		<h5 class="card-title">${title}</h5>
		<p class="card-text">${text}</p>
		<a href="" class="btn btn-primary">
			${cta}
		</a>
	</div>`;

  return card;
}

const cardsToRender = [
  {
    image: "https://dummyimage.com/300x200/000/fff",
    title: "Some title",
    text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
		labore at totam nam esse quos impedit debitis iusto error qui,
		similique deleniti maiores, perspiciatis tempora dolorum magni
		aliquid. Deleniti, molestias.`,
    cta: "Go somewhere",
  },
  {
    image: "https://dummyimage.com/300x200/000/fff",
    title: "Some title",
    text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
		labore at totam nam esse quos impedit debitis iusto error qui,
		similique deleniti maiores, perspiciatis tempora dolorum magni
		aliquid. Deleniti, molestias.`,
    cta: "Go somewhere",
  },
  {
    image: "https://dummyimage.com/300x200/000/fff",
    title: "Some title",
    text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
		labore at totam nam esse quos impedit debitis iusto error qui,
		similique deleniti maiores, perspiciatis tempora dolorum magni
		aliquid. Deleniti, molestias.`,
    cta: "Go somewhere",
  },
];

const cardContainer = document.getElementById("card-container");

for (const cardData of cardsToRender) {
  const currentCard = createCard(cardData);
  cardContainer.appendChild(currentCard);
}
