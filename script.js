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

