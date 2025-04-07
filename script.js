document.addEventListener("DOMContentLoaded", () => {
    const bars = document.querySelectorAll(".progress-bar div");
    bars.forEach(bar => {
      const percentage = bar.getAttribute("data-percentage");
      bar.style.width = percentage + "%";
      bar.querySelector("span").textContent = percentage + "%";
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
    
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navMenu.classList.remove('active');
        }
      });
    });
  });