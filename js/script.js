// Theme toggle

const themeBtn = document.getElementById("themeBtn");

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  themeBtn.textContent = theme === "dark" ? "☀️" : "🌙";
}

const savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);

themeBtn.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  setTheme(current === "dark" ? "light" : "dark");
});

// Form interaction 

const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formMessage = document.getElementById("formMessage");
  formMessage.textContent = "Message sent successfully!";
  formMessage.style.color = "green";

  form.reset();
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

document.querySelectorAll(".fade-up").forEach((el) => {
  observer.observe(el);
});
