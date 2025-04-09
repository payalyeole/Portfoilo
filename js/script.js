// Navbar toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger?.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute("href"));
    section?.scrollIntoView({ behavior: "smooth" });
  });
});

// Contact form alert
const form = document.querySelector("form");
form?.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been submitted.");
  form.reset();
});

// Auto testimonial slider
const testimonials = [
  "Payal is an amazing developer. Her designs are clean and sharp!",
  "Loved working with Payal. Truly professional and creative!",
  "If you're looking for style + substance, she's the one."
];
let index = 0;
function showTestimonial() {
  const tEl = document.querySelector("#testimonial-text");
  if (tEl) {
    tEl.textContent = testimonials[index];
    index = (index + 1) % testimonials.length;
  }
}
setInterval(showTestimonial, 4000);

// Navbar background scroll effect
window.addEventListener("scroll", () => {
  document.querySelector(".navbar")?.classList.toggle("scrolled", window.scrollY > 50);
});

// Scroll progress bar
window.addEventListener("scroll", () => {
  const scrollBar = document.getElementById("scroll-bar");
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  scrollBar.style.width = (scrollTop / docHeight) * 100 + "%";
});

// Typed text effect
const textArray = ["Java Full Stack Developer", "Frontend Enthusiast", "Problem Solver", "Tech Explorer"];
let typedText = document.querySelector(".typed-text");
let i = 0, j = 0, isDeleting = false;
function typeEffect() {
  if (i < textArray.length) {
    if (!isDeleting && j <= textArray[i].length) {
      typedText.textContent = textArray[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      typedText.textContent = textArray[i].substring(0, j--);
    }

    if (!isDeleting && j === textArray[i].length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % textArray.length;
    }
  }
  setTimeout(typeEffect, isDeleting ? 50 : 150);
}

// Popup and typed text init
window.onload = () => {
  // Show popup after delay (optional: remove if annoying)
  setTimeout(() => {
    const popup = document.getElementById("popup");
    if (popup) popup.style.display = "flex";
  }, 5000);

  typeEffect();
};

// Close popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Counter animation (on scroll)
const counters = document.querySelectorAll(".count");
let hasCounted = false;
function animateCount() {
  counters.forEach(counter => {
    const target = +counter.dataset.target;
    const increment = Math.ceil(target / 200);
    const update = () => {
      const current = +counter.innerText;
      if (current < target) {
        counter.innerText = current + increment;
        setTimeout(update, 30);
      } else {
        counter.innerText = target;
      }
    };
    update();
  });
}
window.addEventListener("scroll", () => {
  const statsSection = document.getElementById("stats");
  if (statsSection.getBoundingClientRect().top < window.innerHeight && !hasCounted) {
    hasCounted = true;
    animateCount();
  }
});

// Back to Top Button
const backToTopBtn = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
backToTopBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Reveal elements immediately (no scroll required)
document.querySelectorAll(".reveal").forEach(el => el.classList.add("active"));

// ScrollReveal simplified (if needed at all)
ScrollReveal({
  distance: "60px",
  duration: 1000,
  delay: 200,
  reset: false
});
ScrollReveal().reveal(".hero h1, .hero p, .hero .btn", { origin: "top" });

// Particles.js init
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    size: { value: 3 },
    color: { value: "#ffffff" },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: { speed: 2 }
  },
  interactivity: {
    events: { onhover: { enable: true, mode: "repulse" } }
  }
});

// Confetti function (can trigger manually)
function startConfetti() {
  confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
}
