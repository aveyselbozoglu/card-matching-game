let kutuSayisi;
let randomNumbers = [];
let mainGrid = document.querySelector(".main-grid");
let clickedCardsNumbers = [];
let clickedCardWrappers = [];
let clickedCards = [];
let gamePoint = 0;
let remainingTryCounter = 3;
let successfullyClickedCards = 0;

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
});

function startGame() {
  setupBoardForNewGame();
  resetGameValues();
  generateCardPositions();
  createCards();
}

function setupBoardForNewGame() {
  while (mainGrid.firstChild) {
    mainGrid.removeChild(mainGrid.firstChild);
  }
  let score = document.querySelector("#score");
  score.innerHTML = "Score : 0";
}

function resetGameValues() {
  randomNumbers = [];
  clickedCardsNumbers = [];
  clickedCardWrappers = [];
  kutuSayisi = 8;
  remainingTryCounter = 3;
  successfullyClickedCards = 0;
}

function generateCardPositions() {
  let sortedNumbers = [];
  for (let i = 0; i < kutuSayisi / 2; i++) {
    sortedNumbers.push(i);
    sortedNumbers.push(i);
  }
  randomNumbers = sortedNumbers.sort(() => Math.random() - 0.5);
}

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
    card.setAttribute("data-imageNumber", randomNumbers[i].toString());
    cardWrapper.classList.remove("make-unclickable");
    card.onclick = function () {
      clickCard(card, cardWrapper);
    };
  }
  0;
}

const fillRandoms = (kutuSayisi) => {
  let flatArray = [];
  for (let i = 0; i < kutuSayisi / 2; i++) {
    flatArray.push(i);
    flatArray.push(i);
  }
  randomNumbers = flatArray.sort(() => Math.random() - 0.5);
};

function openAllCards() {
  if (mainGrid.hasChildNodes()) {
    let cardWrappers = mainGrid.querySelectorAll(".card-wrapper");
    let frontChildNodes = mainGrid.querySelectorAll(".front");
    let backChildNodes = mainGrid.querySelectorAll(".back");

    Array.from(cardWrappers).forEach((element) => {
      element.classList.add("make-unclickable");
    });

    Array.from(frontChildNodes).forEach((element) => {
      element.classList.add("clickedCardFront");
    });

    Array.from(backChildNodes).forEach((element) => {
      element.classList.add("clickedCardBack");
    });
    //    frontChildNodes.classList.removeChild("clickedCardFront");
  }
}

function toggleBoardNonClickable() {
  mainGrid.classList.toggle("make-unclickable");
}

function clickCard(card, cardWrapper) {
  //const clickedCardId = card.getAttribute("id");
  toggleBoardNonClickable();
  cardWrapper.classList.add("make-unclickable");
  clickedCardWrappers.push(cardWrapper);
  const clickedCardDataImageNumber = card.getAttribute("data-imageNumber");
  const clickedCardFront = card.firstElementChild;
  const clickedCardBack = card.lastElementChild;
  clickedCardFront.classList.toggle("clickedCardFront");
  clickedCardBack.classList.toggle("clickedCardBack");
  clickedCardsNumbers.push(clickedCardDataImageNumber);
  clickedCards.push(clickedCardFront);
  clickedCards.push(clickedCardBack);

  if (clickedCardsNumbers.length === 2) {
    const isClickedCardsSame =
      new Set(clickedCardsNumbers).size === 1 ? true : false;

    if (isClickedCardsSame) {
      gamePoint += 10;
    } else {
      doAfterWrongChoice();
      //  toggleBoardNonClickable();
    }

    clickedCardsNumbers = [];
    clickedCards = [];
    clickedCardWrappers = [];
  } else {
    // setTimeout(() => {
    //   cardWrapper.classList.toggle("make-unclickable");
    // }, 1250);
  }
  setTimeout(() => {
    toggleBoardNonClickable();
  }, 1250);
}

function doAfterWrongChoice() {
  remainingTryCounter -= 1;
  let tempCards = clickedCards;
  let tempWrappers = clickedCardWrappers;
  setTimeout(() => {
    tempWrappers.forEach((element) => {
      element.classList.remove("make-unclickable");
    });
  }, 1250);
  // cardWrapper.classList.remove("make-unclickable");
  setTimeout(() => {
    tempCards.forEach((element, index) => {
      if (index === 0 || index === 2)
        element.classList.toggle("clickedCardFront");
      else element.classList.toggle("clickedCardBack");
    });
  }, 1250);

  if (remainingTryCounter === 0) {
    setTimeout(() => {
      openAllCards();
      alert(`Game is over , your point is ${gamePoint}`);
    }, 1250);
  }
}
