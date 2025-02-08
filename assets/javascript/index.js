document.addEventListener('DOMContentLoaded', function() {
    const skillsSection = document.querySelector('#skills');
    const skillCards = document.querySelectorAll('.skill-card'); // Select all skill cards
    const sectionPosition = skillsSection.offsetTop;
  
    function handleScroll() {
      if (window.pageYOffset >= sectionPosition - window.innerHeight) {
        skillCards.forEach(card => card.classList.add('show')); // Add 'show' to each card
      } else {
        skillCards.forEach(card => card.classList.remove('show')); // Remove 'show' from each card
      }
    }
  
    window.addEventListener('scroll', handleScroll);
  });