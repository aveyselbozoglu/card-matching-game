let kutuSayisi = 4;

const imageUrls = [
  "https://i.picsum.photos/id/669/200/200.jpg?hmac=lAa_bMRK0BRBCTEvl1acVqTfEDrXQc0yNwi683-13cE",
  "https://i.picsum.photos/id/202/200/200.jpg?hmac=eGzhW5P2k0gzjc76Tk5T9lOfvn30h3YHuw5jGnBUY4Y",
];

document.addEventListener("DOMContentLoaded", function (event) {
  setupBoard();
  createCards();
});

const setupBoard = () => {
  let score = document.querySelector("#score");
  score.innerHTML += "0";
};

function createCards() {
  for (let i = 0; i < kutuSayisi; i++) {
    let mainGrid = document.querySelector(".main-grid");
    let cardWrapper = document.createElement("div");
    let card = document.createElement("a");
    let front = document.createElement("front");
    let back = document.createElement("front");
    cardWrapper.className = "card-wrapper";
    card.className = "card";
    front.className = "front";
    back.className = "back";
    card.setAttribute("id", "card-" + i.toString());
    card.onclick = function () {
      cl(card);
    };

    if (i % 2 === 0) back.innerHTML += "<img src=" + imageUrls[0] + " />";
    else back.innerHTML += "<img src=" + imageUrls[1] + " />";

    back.firstElementChild.classList.add("image-style");
    card.appendChild(front);
    card.appendChild(back);
    cardWrapper.appendChild(card);
    mainGrid.appendChild(cardWrapper);
  }
}

function cl(card) {
  const clickedCardId = card.getAttribute("id");
  console.log(clickedCardId);
  const clickedCard = document.querySelector("#" + clickedCardId);

  const clickedCardFront = clickedCard.firstElementChild;
  const clickedCardBack = clickedCard.lastElementChild;

  clickedCardFront.classList.add("clickedCardFront");
  clickedCardBack.classList.add("clickedCardBack");

  console.log(clickedCardFront);
}
