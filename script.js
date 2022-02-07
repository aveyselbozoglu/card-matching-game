let kutuSayisi;
let randomNumbers = [];
let mainGrid = document.querySelector(".main-grid");

const imageUrls = [
  "https://i.picsum.photos/id/669/200/200.jpg?hmac=lAa_bMRK0BRBCTEvl1acVqTfEDrXQc0yNwi683-13cE",
  "https://i.picsum.photos/id/202/200/200.jpg?hmac=eGzhW5P2k0gzjc76Tk5T9lOfvn30h3YHuw5jGnBUY4Y",
  "https://i.picsum.photos/id/511/200/200.jpg?hmac=QTzrMGu9nrJDRE4TMoboI_EAM5ZdwXF09ylHr7LFZCg",
  "https://i.picsum.photos/id/352/200/200.jpg?hmac=HPgFQ0Sto_7261sbYIaRW0-z2Jq0-C92RSt0vkdC6Uc",
];

document.addEventListener("DOMContentLoaded", function (event) {
  //fillRandoms(kutuSayisi);
  //setupBoard();
  //createCards();

  setTimeout(() => {
    alert("first");
  }, 100);
});

const fillRandoms = (kutuSayisi) => {
  let flatArray = [];
  for (let i = 0; i < kutuSayisi / 2; i++) {
    flatArray.push(i);
    flatArray.push(i);
  }
  randomNumbers = flatArray.sort(() => Math.random() - 0.5);
};

const setupBoardForNewGame = () => {
  while (mainGrid.firstChild) {
    mainGrid.removeChild(mainGrid.firstChild);
  }
  let score = document.querySelector("#score");
  score.innerHTML = "Score : 0";
};

function createCards() {
  for (let i = 0; i < kutuSayisi; i++) {
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
  clickedCardFront.classList.toggle("clickedCardFront");
  clickedCardBack.classList.toggle("clickedCardBack");
}

function startGame() {
  setupBoardForNewGame();
  generateCardPositions();
  createCards();
}

function generateCardPositions() {
  kutuSayisi = 8;
  let flatArray = [];
  for (let i = 0; i < kutuSayisi / 2; i++) {
    flatArray.push(i);
    flatArray.push(i);
  }

  randomNumbers = flatArray.sort(() => Math.random() - 0.5);
}

function clears() {
  if (mainGrid.hasChildNodes()) {
    let frontChildNodes = mainGrid.querySelectorAll(".front");
    let backChildNodes = mainGrid.querySelectorAll(".back");

    Array.from(frontChildNodes).forEach((element) => {
      element.classList.remove("clickedCardFront");
    });

    Array.from(backChildNodes).forEach((element) => {
      element.classList.remove("clickedCardBack");
    });
    //    frontChildNodes.classList.removeChild("clickedCardFront");
  }
}
