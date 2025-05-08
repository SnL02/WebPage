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
  function showPhase(phase) {
    const phases = document.querySelectorAll('.phase-content');
    const buttons = document.querySelectorAll('.progress-nav button');
    
    phases.forEach(p => p.style.display = 'none');
    buttons.forEach(b => b.classList.remove('active'));
  
    document.getElementById(phase).style.display = 'block';
    buttons.forEach(button => {
      if (button.textContent.trim().toLowerCase().includes(phase.split('phase')[1])) {
        button.classList.add('active');
      }
    });
  }
  
  // 默认展示 Phase 1
  showPhase('phase2');
  