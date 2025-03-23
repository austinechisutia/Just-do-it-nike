const clothingStyle = {
    green: {
        images: ["images/green/1.jpeg", "images/green/2.jpeg", "images/green/3.jpeg", "images/green/4.jpeg", "images/green/5.jpeg", "images/green/6.jpeg", "images/green/7.png"],
        sizes: ["S", "M", "L", "XL"]
    },
    black: {
        images: ["images/black/black1.png", "images/black/black2.png", "images/black/black3.png", "images/black/black4-logo.jpeg"],
        sizes: ["XS", "S", "M", "L"]
    },
    grey: {
        images: ["images/grey/grey1.jpeg", "images/grey/grey2.jpeg", "images/grey/grey3.png", "images/grey/grey4.jpeg"],
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
    setTimeout(() => {
        mainImage.src = clothingStyle[style].images[0]; // First image of selected clothing
        mainImage.style.opacity = "1";
    }, 50);

    // Save selection to localStorage
    localStorage.setItem("selectedClothing", style);

    // Update styles panel (thumbnails)
    const stylesPanel = document.querySelector(".js-styles-panel");
    if (!stylesPanel) {
        console.error("Styles panel element not found.");
        return;
    }

    stylesPanel.innerHTML = ""; // Clear previous styles

    clothingStyle[style].images.forEach(imageSrc => {
        let img = document.createElement("img");
        img.src = imageSrc;
        img.alt = "Clothing style";
        img.classList.add("style-thumbnail");
        img.loading = "lazy"; // Lazy load images

        // Change main image on hover
        img.onmouseover = () => {
            mainImage.src = imageSrc;
        };

        stylesPanel.appendChild(img);
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
