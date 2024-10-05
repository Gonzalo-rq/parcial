function showGameDetails(title, description) {
  const modal = document.getElementById("gameModal");
  document.getElementById("gameTitle").textContent = title;
  document.getElementById("gameDescription").textContent = description;
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("gameModal").style.display = "none";
}

function toggleFavorite(event, button) {
  event.stopPropagation();
  button.classList.toggle("favorited");

  if (button.classList.contains("favorited")) {
    button.textContent = "Favorited";
    button.style.backgroundColor = "red";
  } else {
    button.textContent = "Add to Favorites";
    button.style.backgroundColor = "#007bff";
  }
}

const favoriteButtons = document.querySelectorAll(".favorite-btn");

favoriteButtons.forEach((button) => {
  button.addEventListener("click", function () {
    if (!this.classList.contains("favorited")) {
      this.classList.add("favorited");
      this.textContent = "Favorito";
    } else {
      this.classList.remove("favorited");
      this.textContent = "Favorite";
    }
  });
});
