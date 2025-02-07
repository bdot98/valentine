let noButton = document.getElementById('noButton');
let noButtonSize = 1;
let modal = document.getElementById('valentineModal');

// Function to trigger confetti
function celebrate() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.5, y: 0.5 }
    });
}

// Function to handle button clicks
function answer(choice) {
    if (choice === 'yes') {
          modal.style.display = "block";  // Show the modal
             document.getElementById("modalMessage").innerText = "Yay! You're my Valentine! 💖";
        document.getElementById("modalImage").src = "pic.jpg"; // Change this to your image file
        document.getElementById("valentineModal").style.display = "block";
        celebrate();  // Trigger the confetti effect
    } else if (choice === 'no') {
        if (noButtonSize > 0.2) {
            noButtonSize -= 0.1;  // Shrink the "No" button
            noButton.style.transform = `scale(${noButtonSize})`;
        } else {
            noButton.style.display = 'none';  // Hide the "No" button once it becomes too small
        }
    }
}

// Function to close the modal
function closeModal() {
    document.getElementById("valentineModal").style.display = "none";
}
