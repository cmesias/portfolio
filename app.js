document.addEventListener("DOMContentLoaded", function() {

    // Get references
    const button = document.getElementById("fun-button");
    const audio = new Audio('/sounds/button-click.wav'); 
    
    let count = 0; // Initialize the counter

    // Button click event
    button.addEventListener("click", () => {

        count++; // Increment counter
        button.textContent = `${count}`; // Update the display
        audio.play();
        // Disable the button
        button.disabled = true;
        button.classList.add("disabled");

        // Re-enable the button after 1 second (1000ms)
        setTimeout(() => {
          button.disabled = false;
          button.classList.remove("disabled");
        }, 500);
    });
});