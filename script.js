// script.js
// Day 1: placeholder only.
// DOM interactions, button events, and scroll-to-top

console.log("Portfolio project initialized - Day 1");

// Day 3: basic form handling placeholder.
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thanks for reaching out! (Form submission logic coming Day 10.)");
      form.reset();
    });
  }
});
