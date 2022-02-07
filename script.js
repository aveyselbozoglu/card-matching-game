let kutuSayisi = 8;

let randomNumbers = [];

const imageUrls = [
  "https://i.picsum.photos/id/669/200/200.jpg?hmac=lAa_bMRK0BRBCTEvl1acVqTfEDrXQc0yNwi683-13cE",
  "https://i.picsum.photos/id/202/200/200.jpg?hmac=eGzhW5P2k0gzjc76Tk5T9lOfvn30h3YHuw5jGnBUY4Y",
  "https://i.picsum.photos/id/511/200/200.jpg?hmac=QTzrMGu9nrJDRE4TMoboI_EAM5ZdwXF09ylHr7LFZCg",
  "https://i.picsum.photos/id/352/200/200.jpg?hmac=HPgFQ0Sto_7261sbYIaRW0-z2Jq0-C92RSt0vkdC6Uc",
];

document.addEventListener("DOMContentLoaded", function (event) {
  fillRandoms(kutuSayisi);
  setupBoard();
  createCards();
});

const fillRandoms = (kutuSayisi) => {
  let flatArray = [];
  for (let i = 0; i < kutuSayisi / 2; i++) {
    flatArray.push(i);
    flatArray.push(i);
  }
  randomNumbers = flatArray.sort(() => Math.random() - 0.5);
};

const setupBoard = () => {
  let score = document.querySelector("#score");
  score.innerHTML += "0";
};

function createCards() {
  for (let i = 0; i < kutuSayisi; i++) {
    let mainGrid = document.querySelector(".main-grid");
    let cardWrapper = document.createElement("div");
    let card = document.createElement("a");
    let front = document.createElement("div");
    let back = document.createElement("div");
    cardWrapper.className = "card-wrapper";
    card.className = "card";
    front.className = "front";
    back.className = "back";

    back.innerHTML += "<img src=" + imageUrls[randomNumbers[i]] + " />";
    //back.innerHTML += "<img src=" + imageUrls[random] + " />";

    back.firstElementChild.classList.add("image-style");
    card.appendChild(front);
    card.appendChild(back);
    cardWrapper.appendChild(card);
    mainGrid.appendChild(cardWrapper);

    card.setAttribute("id", "card-" + i.toString());
    card.onclick = function () {
      clickCard(card);
    };
  }
}

function clickCard(card) {
  const clickedCardId = card.getAttribute("id");

  const clickedCard = document.querySelector("#" + clickedCardId);

  const clickedCardFront = clickedCard.firstElementChild;
  const clickedCardBack = clickedCard.lastElementChild;

  clickedCardFront.classList.add("clickedCardFront");
  clickedCardBack.classList.add("clickedCardBack");
}
