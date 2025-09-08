// Dark Mode Toggle
const toggleBtn = document.getElementById("darkModeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.innerHTML = document.body.classList.contains("dark") 
    ? '<i class="fas fa-sun"></i>' 
    : '<i class="fas fa-moon"></i>';
});

// Animate skill bars
const skillBars = document.querySelectorAll(".fill");

function animateSkills() {
  skillBars.forEach(bar => {
    const score = bar.getAttribute("data-score");
    bar.style.width = score + "%";
  });
}

// Run animation on scroll OR on first load
window.addEventListener("scroll", () => {
  const skillsSection = document.querySelector("#skills");
  const sectionTop = skillsSection.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (sectionTop < screenHeight - 100) {
    animateSkills();
  }
});
window.addEventListener("load", animateSkills);
