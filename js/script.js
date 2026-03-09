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

// Project filter (Type/Tech)
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const noProjectsMessage = document.getElementById("noProjectsMessage");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    // active button UI
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    let visibleCount = 0;

    projectCards.forEach((card) => {
      const tags = (card.dataset.tags || "").split(" "); 

      const matches =
        filter === "all" || tags.includes(filter);

      card.style.display = matches ? "" : "none";
      if (matches) visibleCount++;
    });

    if (noProjectsMessage) {
      noProjectsMessage.style.display = visibleCount === 0 ? "block" : "none";
    }
  });
});

const projectSearch = document.getElementById("projectSearch");

function applyProjectFilters() {
  const activeBtn = document.querySelector(".filter-btn.active");
  const filter = activeBtn ? activeBtn.dataset.filter : "all";
  const query = (projectSearch?.value || "").trim().toLowerCase();

  let visibleCount = 0;

  projectCards.forEach((card) => {
    const tags = (card.dataset.tags || "").split(" ");
    const text = card.textContent.toLowerCase();

    const matchesType = filter === "all" || tags.includes(filter);
    const matchesSearch = query === "" || text.includes(query);

    const show = matchesType && matchesSearch;
    card.style.display = show ? "" : "none";
    if (show) visibleCount++;
  });

  if (noProjectsMessage) {
    noProjectsMessage.style.display = visibleCount === 0 ? "block" : "none";
  }
}

filterButtons.forEach((btn) => {
  btn.addEventListener("click", applyProjectFilters);
});


if (projectSearch) {
  projectSearch.addEventListener("input", applyProjectFilters);
}