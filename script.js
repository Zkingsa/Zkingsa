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
window.addEventListener("scroll", () => {
  const skillsSection = document.querySelector("#skills");
  if (skillsSection.getBoundingClientRect().top < window.innerHeight - 100) animateSkills();
});
window.addEventListener("load", animateSkills);

// Reveal sections on scroll
const sections = document.querySelectorAll("section");
function revealOnScroll() {
  sections.forEach(sec => {
    if (sec.getBoundingClientRect().top < window.innerHeight - 120) sec.classList.add("visible");
  });
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector("nav ul");
menuToggle.addEventListener("click", () => navLinks.classList.toggle("active"));
