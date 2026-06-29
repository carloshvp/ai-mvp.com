const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const traceButtons = document.querySelectorAll("[data-step]");
const traceEvidence = document.querySelector("[data-trace-evidence]");

const evidenceByStep = {
  enterprise: "20+ AI solutions advanced toward deployment in a large industrial context.",
  agents: "16 merged Microsoft Agent Governance Toolkit PRs and 4 merged AgenTrust example PRs.",
  embodied:
    "A runnable embodied-agent lab plus a robotics research notebook connect governance to physical AI."
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
