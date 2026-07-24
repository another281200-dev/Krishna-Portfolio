// script.js
// Day 1: placeholder only.
// DOM interactions, button events, and scroll-to-top
// get added on Day 7 per the task schedule.

console.log("Portfolio project initialized - Day 1");

// Day 3: basic form handling placeholder.
// Real validation and DOM interaction logic gets built out on Day 7 and Day 10.
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
