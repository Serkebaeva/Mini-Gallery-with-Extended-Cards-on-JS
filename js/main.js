const cards = document.querySelectorAll(".card");

/*cards.forEach((card) => {
  card.addEventListener("click", () => {
    removeActiveClasses();
    card.classList.add("active");
  });
});*/

function removeActiveClasses() {
  cards.forEach((card) => {
    card.classList.remove("active");
  });
}

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function () {
    removeActiveClasses();
    cards[i].classList.add("active");
  });
}
