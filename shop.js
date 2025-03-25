const clothingStyle = {
    green: {
        images: ["images/green/1.jpeg", "images/green/2.jpeg", "images/green/3.jpeg", "images/green/4.jpeg", "images/green/5.jpeg", "images/green/6.jpeg", "images/green/7.png"],
        sizes: ["S", "M", "L", "XL"]
    },
    black: {
        images: ["images/black/black1.png", "images/black/black2.png", "images/black/black3.png", "images/black/black4-logo.jpeg", "images/black/black5.png", "images/black/black6.png", "images/black/black7.png"],
        sizes: ["XS", "S", "M", "L"]
    },
    grey: {
        images: ["images/grey/grey-main.jpeg", "images/grey/grey1.jpeg", "images/grey/grey2.jpeg", "images/grey/grey3.png", "images/grey/grey4.jpeg", "images/grey/grey5.jpeg", "images/grey/grey6.jpeg"],
        sizes: ["M", "L", "XL"]
    },
    white: {
        images: ["images/white/white.jpeg", "images/white/white2.jpeg", "images/white/white-3.jpeg", "images/white/white4.png", "images/white/qhite5.jpeg"],
        sizes: ["XS", "S", "M", "L", "XL"]
    }
};


export function changeClothing(style) {
    if (!clothingStyle[style]) {
        console.error("Style not found:", style);
        return;
    }

    console.log("Switching to:", style);

    const mainImage = document.getElementById("mainImage");
    if (!mainImage) {
        console.error("Main image element not found.");
        return;
    }

    // Smooth fade transition for the main image
    mainImage.style.opacity = "0";
        mainImage.src = clothingStyle[style].images[0]; // First image of selected clothing
        mainImage.style.opacity = "1";

    // Save selection to localStorage
    localStorage.setItem("selectedClothing", style);

    // Update styles panel (thumbnails)
    const stylesPanel = document.querySelector(".js-styles-panel");
    if (!stylesPanel) {
        console.error("Styles panel element not found.");
        return;
    }

    stylesPanel.innerHTML = ""; // Clear previous styles

    clothingStyle[style].images.forEach(mediaSrc => {
        let mediaElement;
    
        if (mediaSrc.endsWith('.mp4') || mediaSrc.endsWith('.webm') || mediaSrc.endsWith('.ogg')) {
            // Select the main video element
            mediaElement = document.getElementById("mainVideo");
            mediaElement.src = mediaSrc;
            mediaElement.style.display = "none"; // Hide initially
            mediaElement.load(); // Ensure it loads properly
    
            // Change main image on hover
            mediaElement.onmouseover = () => {
                document.getElementById("mainImage").style.display = "none"; // Hide image
                mediaElement.style.display = "block"; // Show video
                mediaElement.play(); // Play the video
            };
    
            mediaElement.onmouseout = () => {
                document.getElementById("mainImage").style.display = "block"; // Show image again
                mediaElement.style.display = "none"; // Hide video
                mediaElement.pause(); // Pause video
            };
        } else {
            // Create an image element
            mediaElement = document.createElement("img");
            mediaElement.src = mediaSrc;
            mediaElement.alt = "Clothing style";
            mediaElement.classList.add("style-thumbnail");
    
            // Change main image on hover
            mediaElement.onmouseover = () => {
                document.getElementById("mainImage").src = mediaSrc; // Change image
            };
        }
    
        stylesPanel.appendChild(mediaElement);
    });
    
    

    // Update size button styles
    updateSizeStyles(clothingStyle[style].sizes);
}

// Function to update size button styles (add line and reduce opacity for unavailable sizes)
function updateSizeStyles(availableSizes) {
    const sizeButtons = document.querySelectorAll(".bx"); // Select all size buttons

    sizeButtons.forEach(button => {
        const size = button.textContent.trim(); // Get the size value

        if (availableSizes.includes(size)) {
            // Size is available - normal styling
            button.style.opacity = "1";
            button.style.textDecoration = "none";
            button.style.pointerEvents = "auto"; // Make it clickable
        } else {
            // Size is unavailable - add strikethrough and reduce opacity
            button.style.opacity = "0.5";
            button.style.textDecoration = "line-through";
            button.style.pointerEvents = "none"; // Disable clicking
        }
    });
}

// Restore last selected clothing from localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedStyle = localStorage.getItem("selectedClothing") || "green";
    changeClothing(savedStyle);
});


// Get counter from localStorage or start at 0
let counter = localStorage.getItem("counter") ? parseInt(localStorage.getItem("counter")) : 0;

// Update UI on page load
window.onload = function () {
    const counterDisplay = document.getElementById("counterDisplay");
    if (counterDisplay) {
        counterDisplay.textContent = counter;
    }
};

// Define function globally
window.incrementCounter = function () {
    counter += 1; // Increase counter by 1
    localStorage.setItem("counter", counter); // Save new value in localStorage
    console.log("Counter:", counter);

    // Update UI
    const counterDisplay = document.getElementById("counter-display");
    if (counterDisplay) {
        counterDisplay.textContent = counter;
    }
};


incrementCounter(); // Call the function to increase the counter by 1


window.showCartPopup = function () {
    const cartPopup = document.querySelector(".js-cart-added-items");
    const overlay = document.querySelector(".js-overlay");

    if (!cartPopup || !overlay) {
        console.error("Cart popup or overlay element not found!");
        return;
    }

    setTimeout(() => {
        cartPopup.style.display = "block";  // Show popup
        overlay.style.display = "block";    // Show overlay

        let isMouseOver = false;

        // Prevent hiding when mouse is over popup
        cartPopup.addEventListener("mouseenter", () => isMouseOver = true);
        cartPopup.addEventListener("mouseleave", () => isMouseOver = false);

        // Hide popup & overlay after 10 sec if mouse is not over popup
        setTimeout(() => {
            if (!isMouseOver) {
                cartPopup.style.display = "none";
                overlay.style.display = "none";
            }
        }, 10000);

    }, 500); // Delay before appearing
};

// Function to manually hide the popup and overlay when clicking outside
document.querySelectorAll(".js-overlay, .js-close").forEach(element => {
    element.addEventListener("click", function () {
        document.querySelector(".js-cart-added-items").style.display = "none";
        document.querySelector(".js-overlay").style.display = "none";
    });
});


