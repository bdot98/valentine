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
function showPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Function to handle button clicks
function answer(choice) {
    if (choice === 'yes') {
        modal.style.display = "block";  // Show the modal
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
    modal.style.display = "none";
}
