let counter = 0; // Initialize counter

export function incrementCounter() {
    counter += 1; // Increase counter by 1
    console.log("Counter:", counter); // Log the new value (for debugging)
    
    // Update UI if there's an element to display the count
    const counterDisplay = document.getElementById("counterDisplay");
    if (counterDisplay) {
        counterDisplay.textContent = counter;
    }
}
