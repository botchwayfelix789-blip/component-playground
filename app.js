// UI Playground — behaviour for the interactive components.

/* ---------- Theme toggle (persisted) ---------- */
const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
  try { localStorage.setItem("playground-theme", theme); } catch {}
}

(function initTheme() {
  let saved = null;
  try { saved = localStorage.getItem("playground-theme"); } catch {}
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(saved || (prefersDark ? "dark" : "light"));
})();

themeToggle.addEventListener("click", () => {
  applyTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
});

/* ---------- Modal (accessible, reusable) ---------- */
const modal = document.getElementById("demo-modal");
const openModalBtn = document.getElementById("open-modal");
let lastFocused = null;

function openModal() {
  lastFocused = document.activeElement;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  const focusable = modal.querySelector(".ui-modal__close");
  if (focusable) focusable.focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
  if (lastFocused) lastFocused.focus();
}

openModalBtn.addEventListener("click", openModal);
modal.querySelectorAll("[data-modal-close]").forEach((el) =>
  el.addEventListener("click", closeModal)
);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.hidden) closeModal();
});

/* ---------- Form input validation ---------- */
const form = document.getElementById("demo-form");
const field = form.querySelector(".ui-field");
const emailInput = document.getElementById("email");
const help = document.getElementById("email-help");
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate() {
  const value = emailInput.value.trim();
  field.classList.remove("is-valid", "is-error");
  if (value === "") { help.textContent = "We'll never share it."; return false; }
  if (emailRe.test(value)) {
    field.classList.add("is-valid");
    help.textContent = "Looks good ✓";
    return true;
  }
  field.classList.add("is-error");
  help.textContent = "That doesn't look like a valid email.";
  return false;
}

emailInput.addEventListener("input", () => {
  if (field.classList.contains("is-error")) validate();
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validate()) {
    help.textContent = "Submitted ✓ (demo — nothing was sent)";
    emailInput.value = "";
    field.classList.remove("is-valid");
  }
});
