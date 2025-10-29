function downloadCV() {
    const link = document.createElement('a');
    link.href = '../CV-Gomez-Mary-Ann-2025-Final-Cv.pdf'; 
    link.download = 'CV-Gomez-Mary-Ann-2025-Final-Cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Auto-close mobile menu when a nav link is clicked
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.list-menu a');
    const toggle = document.getElementById('menu-toggle');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggle.checked = false; // closes mobile menu
        });
    });
});







