document.addEventListener("DOMContentLoaded", function (event) {
  let cardWrapper = document.createElement("div");
  var card = document.createElement("a");
  var mainGrid = document.querySelector(".main-grid");
  var front = document.createElement("front");
  var back = document.createElement("front");
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
});
