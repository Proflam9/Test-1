document.addEventListener("DOMContentLoaded", function () {
    const movieCards = document.querySelectorAll(".movie-card");

    movieCards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.transition = "transform 0.3s ease, opacity 0.3s ease";
            card.style.transform = "scale(1.1)";
            card.style.opacity = "0.8";
        });

        card.addEventListener("mouseout", () => {
            card.style.transform = "scale(1)";
            card.style.opacity = "1";
        });
    });
});
