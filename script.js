const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const traceButtons = document.querySelectorAll("[data-step]");
const traceEvidence = document.querySelector("[data-trace-evidence]");

const evidenceByStep = {
  enterprise:
    "AI Strategy Lead & AI Compliance Officer for Bosch Mobility Electronics, with portfolio cadence across a 40,000-employee organization.",
  ecosystem:
    "Rollout work includes 20+ AI solutions and agentic AI tooling for 1,600 software developers, supported by developer community feedback loops.",
  governance:
    "Public work in agent governance and robotics explores runtime controls, evidence, and physical-AI deployment risk."
};

const setHeaderState = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 16);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

if (menuToggle && header && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    header.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("nav-open", !isOpen);
  });

  nav.addEventListener("click", event => {
    if (event.target instanceof HTMLAnchorElement) {
      menuToggle.setAttribute("aria-expanded", "false");
      header.classList.remove("is-open");
      document.body.classList.remove("nav-open");
    }
  });
}

traceButtons.forEach(button => {
  button.addEventListener("click", () => activateTraceStep(button));
  button.addEventListener("focus", () => activateTraceStep(button));
  button.addEventListener("mouseenter", () => activateTraceStep(button));
});

function activateTraceStep(button) {
  traceButtons.forEach(item => item.classList.toggle("is-active", item === button));
  const step = button.getAttribute("data-step");
  if (traceEvidence && step && evidenceByStep[step]) {
    traceEvidence.textContent = evidenceByStep[step];
  }
}
