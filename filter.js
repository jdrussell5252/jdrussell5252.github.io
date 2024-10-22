function filterProjects(category) {
    // Select all elements with the class 'profile-card'
    const cards = document.querySelectorAll('.profile-card');
    // Select all filter buttons within the 'filter-buttons' container
    const buttons = document.querySelectorAll('.filter-buttons .w3-button');

    // Iterate over each card to show or hide based on the selected category
    cards.forEach(card => {
        // If the selected category is 'all', display all cards
        if (category === 'all') {
            card.style.display = 'block'; // Show all cards
        } else {
            // If the card's category matches the selected category, show it; otherwise, hide it
            card.dataset.category === category ? 
            card.style.display = 'block' : 
            card.style.display = 'none'; // Show matching category cards
        }
    });

    // Remove the 'active' class from all filter buttons to reset their state
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Find the button corresponding to the selected category
    const activeButton = Array.from(buttons).find(button => {
        // Check if the button text matches the category or if 'Show All' is selected
        return button.textContent.trim() === category || (category === 'all' && button.textContent.trim() === 'Show All');
    });

    // If a matching button is found, add the 'active' class to it
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// Initialize the filter when the window loads
window.onload = function() {
    filterProjects('all'); // Show all projects by default on page load
};