const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const yearNode = document.getElementById("year");

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const open = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const auditForm = document.getElementById("audit-form");
const auditResult = document.getElementById("audit-result");

if (auditForm && auditResult) {
  auditForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(auditForm);
    const keys = ["message", "offer", "structure", "trust", "cta"];
    const total = keys.reduce((sum, key) => sum + Number(data.get(key) || 0), 0);

    let label = "Strong foundation";
    let advice = "You likely need focused optimization, not a full rebuild.";

    if (total <= 10) {
      label = "Clarity is blocking conversions";
      advice = "Start with messaging, offer definition, and one primary call to action.";
    } else if (total <= 17) {
      label = "Some friction is costing leads";
      advice = "Tighten page structure and simplify your path from impression to action.";
    }

    auditResult.innerHTML = `<strong>Score: ${total}/25</strong><br>${label}. ${advice}`;
    auditResult.hidden = false;
  });
}

const siteHeader = document.querySelector(".site-header");

if (siteHeader) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      siteHeader.classList.add("scrolled");
    } else {
      siteHeader.classList.remove("scrolled");
    }
  });
}
