function filterProjects(category) {

    // Select all project rows
    const projects = document.querySelectorAll('.project-row');

    // Select all filter buttons
    const buttons = document.querySelectorAll('.filter-buttons .w3-button');

    // Show or hide projects
    projects.forEach(project => {

        if (category === 'all') {
            project.style.display = 'flex';
        } 
        else {
            project.dataset.category === category
                ? project.style.display = 'flex'
                : project.style.display = 'none';
        }
    });

    // Remove active state from buttons
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Set active button
    const activeButton = Array.from(buttons).find(button => {
        return button.textContent.trim() === category ||
              (category === 'all' &&
               button.textContent.trim() === 'Show All');
    });

    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// Initialize page
window.onload = function () {
    filterProjects('all');
};