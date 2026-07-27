// script.js
// Day 1: placeholder / init log
// Day 3: basic contact form submit handler
// Day 7: real DOM manipulation - button events, scroll-to-top,
//        active nav link highlighting on scroll

console.log("Portfolio project initialized");

document.addEventListener("DOMContentLoaded", () => {

  // ---------- Contact form (placeholder, real validation on Day 10) ----------
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thanks for reaching out! (Full validation coming Day 10.)");
      form.reset();
    });
  }

  // ---------- Back to top button ----------
  const backToTopBtn = document.getElementById("back-to-top");

  if (backToTopBtn) {
    // Show the button only after scrolling down a bit
    const toggleBackToTopVisibility = () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    };

    window.addEventListener("scroll", toggleBackToTopVisibility);
    toggleBackToTopVisibility(); // set initial state

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ---------- Active nav link highlighting on scroll ----------
  const navLinks = document.querySelectorAll("#main-nav a");
  const sections = document.querySelectorAll("main section, header#home");

  const highlightActiveNavLink = () => {
    let currentSectionId = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active-link");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active-link");
      }
    });
  };

  window.addEventListener("scroll", highlightActiveNavLink);
  highlightActiveNavLink(); // set initial state on page load

});
