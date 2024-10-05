document
  .getElementById("categoryFilter")
  .addEventListener("change", function () {
    const selectedCategory = this.value;
    const gameCards = document.querySelectorAll(".game-card");

    gameCards.forEach((card) => {
      if (
        selectedCategory === "all" ||
        card.getAttribute("data-genre") === selectedCategory
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
