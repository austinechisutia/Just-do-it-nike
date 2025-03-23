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

    // Add smooth fade transition
    mainImage.style.opacity = "0";
        mainImage.src = clothingStyle[style].images[0]; // First image of selected clothing
        mainImage.style.opacity = "1";

    // Save selection to localStorage
    localStorage.setItem("selectedClothing", style);

    // Update styles panel
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

        // Change main image on hover
        img.onmouseover = () => {
            mainImage.src = imageSrc;
        };

        stylesPanel.appendChild(img);
    });

    updateSizes(clothingStyle[style].sizes);
}

// Restore last selected clothing from localStorage
document.addEventListener("DOMContentLoaded", () => {
    const savedStyle = localStorage.getItem("selectedClothing") || "green";
    changeClothing(savedStyle);
});

document.querySelectorAll(".js-icon").forEach(icon => {
    icon.addEventListener("click", () => {
        window.location.href = "index.html";
    });
});

function updateSizes(sizes) {
    const sizeContainer = document.querySelector(".js-sizes"); // Select the size buttons container
    if (!sizeContainer) {
        console.error("Size container element not found.");
        return;
    }

    sizeContainer.innerHTML = ""; // Clear previous sizes

    sizes.forEach(size => {
        let button = document.createElement("button");
        button.classList.add("bx");
        button.textContent = size;
        button.addEventListener("click", () => {
            console.log("Selected size:", size);
        });

        sizeContainer.appendChild(button);
    });
}

// Restore last selected clothing from localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedStyle = localStorage.getItem("selectedClothing") || "green";
    changeClothing(savedStyle);
});