const hamburgerIcon = document.querySelector('.hamburger-icon');
const sidePanel = document.querySelector('.side-panel');

hamburgerIcon.addEventListener('click', () => {
    // Toggle the 'open' class to show/hide the side panel
    sidePanel.classList.toggle('open');
});

// Function to close the side panel (if needed)


function closeSidePanel() {
    sidePanel.classList.remove('open');
}

function showPopup() {
    var overlay = document.getElementById("overlay");
    var popup = document.getElementById("popup");
    overlay.style.display = "block";
    popup.style.display = "block";
    popup.classList.add("show-popup");
}

function hidePopup() {
    var overlay = document.getElementById("overlay");
    var popup = document.getElementById("popup");
    overlay.style.display = "none";
    popup.style.display = "none";
    popup.classList.remove("show-popup");
}
window.onload = function() {
    showPopup();
};