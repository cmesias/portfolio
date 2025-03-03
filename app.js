
const saveClicks = (click_count) => {
  localStorage.setItem("site_clicks", click_count)
}

const loadClicks = () => {
  return localStorage.getItem("site_clicks") ? localStorage.getItem("site_clicks") : 0
}



document.addEventListener("DOMContentLoaded", function () {

  // Get references
  const funButton = document.getElementById("fun-button");
  const audio = new Audio('/sounds/button-click.wav');

  // Initialize the counter

  // Load amount of clicks from localStorage
  funButton.textContent = `${loadClicks()}`;

  // Button click event
  funButton.addEventListener("click", () => {
    if (audio.paused === true) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
      audio.play();
    }

    // Increment counter
    funButton.textContent++;

    // Save amount of clicks in local storage
    saveClicks(funButton.textContent)
  });
});