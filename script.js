document.addEventListener("DOMContentLoaded", () => {
    const bars = document.querySelectorAll(".progress-bar div");
    bars.forEach(bar => {
      const percentage = bar.getAttribute("data-percentage");
      bar.style.width = percentage + "%";
      bar.querySelector("span").textContent = percentage + "%";
    });
  });