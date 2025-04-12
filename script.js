function printvowel(str) {
  let count = 0;
  for (char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(count);
}
printvowel("generate");

document.addEventListener('DOMContentLoaded', () => {
    // Get all project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    // Add click event to each project card
    projectCards.forEach(card => {
        // Make entire card clickable
        card.addEventListener('click', (e) => {
            // Don't trigger if clicking on links directly
            if (e.target.tagName === 'A') return;
            
            const demoLink = card.querySelector('.demo-link');
            if (demoLink) {
                window.open(demoLink.href, '_blank');
            }
        });

        // Add hover effect
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) translateZ(20px)';
            card.style.boxShadow = '0 10px 30px rgba(0, 255, 255, 0.3)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.boxShadow = '';
        });

        // Add click animation
        card.addEventListener('mousedown', () => {
            card.style.transform = 'translateY(-5px) scale(0.98)';
        });

        card.addEventListener('mouseup', () => {
            card.style.transform = 'translateY(-10px) translateZ(20px)';
        });
    });

    // Add loading animation for project cards
    const projectGrid = document.querySelector('.project-grid');
    if (projectGrid) {
        projectGrid.style.opacity = '0';
        setTimeout(() => {
            projectGrid.style.transition = 'opacity 0.5s ease';
            projectGrid.style.opacity = '1';
        }, 100);
    }
});

