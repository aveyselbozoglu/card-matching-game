let kutuSayisi = 9;

document.addEventListener("DOMContentLoaded", function (event) {
  createCards();
});

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

    front.append("Deneme");
    back.append("Deneme2");
    card.appendChild(front);
    card.appendChild(back);
    cardWrapper.appendChild(card);
    mainGrid.appendChild(cardWrapper);
  }
}
