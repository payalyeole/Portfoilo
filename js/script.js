// Navbar toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Alert on contact form submit
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your message has been submitted.");
    form.reset();
  });
}

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
setInterval(showTestimonial, 4000); // Rotate every 4 seconds

// Scroll Navbar Background
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Scroll progress bar
window.addEventListener("scroll", () => {
  const scrollBar = document.getElementById("scroll-bar");
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollBar.style.width = scrollPercent + "%";
});

// Typed Text Effect - FINAL
const textArray = ["Java Full Stack Developer", "Frontend Enthusiast", "Problem Solver", "Tech Explorer"];
let typedText = document.querySelector(".typed-text");
let i = 0, j = 0, currentText = "", isDeleting = false;

function typeEffect() {
  if (i < textArray.length) {
    if (!isDeleting && j <= textArray[i].length) {
      currentText = textArray[i].substring(0, j++);
      typedText.textContent = currentText;
    }

    if (isDeleting && j >= 0) {
      currentText = textArray[i].substring(0, j--);
      typedText.textContent = currentText;
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

// Popup + Typed Effect
window.onload = function () {
  // Show popup after 5 seconds
  setTimeout(() => {
    document.getElementById("popup").style.display = "flex";
  }, 5000);

  // Start type effect
  typeEffect();
};

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Counter animation
const counters = document.querySelectorAll('.count');
const speed = 200;
const animateCount = () => {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = Math.ceil(target / speed);
      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
};

window.addEventListener('scroll', () => {
  const statsSection = document.getElementById('stats');
  const top = statsSection.getBoundingClientRect().top;
  if (top < window.innerHeight - 100) {
    animateCount();
  }
});

// Back to Top button
const backToTopBtn = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Reveal Elements on Scroll
function revealElements() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);

// ScrollReveal library
ScrollReveal({
  distance: '60px',
  duration: 1000,
  delay: 200,
  reset: false
});
ScrollReveal().reveal('.hero h1, .hero p, .hero .btn', { origin: 'top' });
ScrollReveal().reveal('.section h2', { origin: 'left' });
ScrollReveal().reveal('.about-content, .service-cards, .project-grid, .contact form', {
  origin: 'bottom',
  interval: 100
});

  
  // Particles.js Load
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
      events: {
        onhover: { enable: true, mode: "repulse" }
      }
    }
  });

  function startConfetti() {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
  


  // certificate 

  function openCertificate(src) {
    document.getElementById("cert-popup-img").src = src;
    document.getElementById("cert-popup").style.display = "flex";
  }
  
  function closeCertPopup() {
    document.getElementById("cert-popup").style.display = "none";
  }
  