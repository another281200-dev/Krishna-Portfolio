// script.js
// Day 1: placeholder / init log
// Day 3: basic contact form submit handler
// Day 7: real DOM manipulation - button events, scroll-to-top,
//        active nav link highlighting on scroll
// Day 10: professional contact form validation
// Day 11: scroll-reveal animations via IntersectionObserver
// Day 13: performance - throttled scroll handlers via requestAnimationFrame

console.log("Portfolio project initialized");

document.addEventListener("DOMContentLoaded", () => {

  // ---------- Contact form validation (Day 10) ----------
  const form = document.getElementById("contact-form");

  if (form) {
    const nameInput = document.getElementById("contact-name");
    const emailInput = document.getElementById("contact-email");
    const messageInput = document.getElementById("contact-message");

    const errorName = document.getElementById("error-name");
    const errorEmail = document.getElementById("error-email");
    const errorMessage = document.getElementById("error-message");
    const formStatus = document.getElementById("form-status");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function validateName() {
      const value = nameInput.value.trim();
      if (value.length < 2) {
        errorName.textContent = "Please enter your name (at least 2 characters).";
        nameInput.classList.add("invalid");
        return false;
      }
      errorName.textContent = "";
      nameInput.classList.remove("invalid");
      return true;
    }

    function validateEmail() {
      const value = emailInput.value.trim();
      if (!emailPattern.test(value)) {
        errorEmail.textContent = "Please enter a valid email address.";
        emailInput.classList.add("invalid");
        return false;
      }
      errorEmail.textContent = "";
      emailInput.classList.remove("invalid");
      return true;
    }

    function validateMessage() {
      const value = messageInput.value.trim();
      if (value.length < 10) {
        errorMessage.textContent = "Message should be at least 10 characters.";
        messageInput.classList.add("invalid");
        return false;
      }
      errorMessage.textContent = "";
      messageInput.classList.remove("invalid");
      return true;
    }

    // Validate each field as the user leaves it (blur)
    nameInput.addEventListener("blur", validateName);
    emailInput.addEventListener("blur", validateEmail);
    messageInput.addEventListener("blur", validateMessage);

    // Clear an error as soon as the user starts fixing that field
    nameInput.addEventListener("input", () => { if (nameInput.classList.contains("invalid")) validateName(); });
    emailInput.addEventListener("input", () => { if (emailInput.classList.contains("invalid")) validateEmail(); });
    messageInput.addEventListener("input", () => { if (messageInput.classList.contains("invalid")) validateMessage(); });

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const isNameValid = validateName();
      const isEmailValid = validateEmail();
      const isMessageValid = validateMessage();

      if (!isNameValid || !isEmailValid || !isMessageValid) {
        formStatus.textContent = "Please fix the errors above before submitting.";
        formStatus.classList.remove("success");
        formStatus.classList.add("error");
        return;
      }

      // All fields valid - simulate a successful submission
      formStatus.textContent = "Thanks for reaching out! I'll get back to you soon.";
      formStatus.classList.remove("error");
      formStatus.classList.add("success");
      form.reset();
    });
  }

  // ---------- Back to top button ----------
  const backToTopBtn = document.getElementById("back-to-top");

  const toggleBackToTopVisibility = () => {
    if (!backToTopBtn) return;
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  };

  if (backToTopBtn) {
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

  // Day 13 performance fix: both scroll handlers used to run on every
  // single "scroll" event, which fires far more often than the browser
  // can actually repaint. Batching them behind requestAnimationFrame
  // means the work runs at most once per frame instead of dozens of
  // times per second, cutting unnecessary layout/style recalculation.
  let scrollTicking = false;

  const onScroll = () => {
    if (!scrollTicking) {
      window.requestAnimationFrame(() => {
        toggleBackToTopVisibility();
        highlightActiveNavLink();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });

  // Run once on load to set correct initial state
  toggleBackToTopVisibility();
  highlightActiveNavLink();

  // ---------- Scroll-reveal animations (Day 11) ----------
  const revealElements = document.querySelectorAll(".reveal-on-scroll");

  if (revealElements.length && "IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            revealObserver.unobserve(entry.target); // animate in once
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback: just show everything if IntersectionObserver isn't supported
    revealElements.forEach((el) => el.classList.add("active"));
  }

});
