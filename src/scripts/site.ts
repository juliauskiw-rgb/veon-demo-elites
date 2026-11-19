// Page behaviour. Everything works without it: triggers are anchors to #kliniky, details are native, content is visible.
const mqMobile = window.matchMedia("(max-width: 767px)");

// Header: hairline once the page is scrolled.
const header = document.querySelector<HTMLElement>("[data-header]");
const onScroll = () => header?.classList.toggle("is-scrolled", window.scrollY > 8);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Clinic / messenger sheets (native <dialog>: Esc, focus inside, inert page).
let lastTrigger: HTMLElement | null = null;
document.querySelectorAll<HTMLElement>("[data-sheet-open]").forEach((trigger) => {
  trigger.addEventListener("click", (e) => {
    const dialog = document.getElementById(trigger.dataset.sheetOpen || "") as HTMLDialogElement | null;
    if (!dialog || typeof dialog.showModal !== "function") return; // fall back to the #kliniky anchor
    e.preventDefault();
    lastTrigger = trigger;
    closeMenu();
    dialog.showModal();
    dialog.querySelector<HTMLElement>("[data-sheet-close]")?.focus();
  });
});
document.querySelectorAll<HTMLDialogElement>("dialog.sheet").forEach((dialog) => {
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) dialog.close(); // tap on the backdrop
  });
  dialog.querySelectorAll<HTMLElement>("[data-sheet-close]").forEach((b) => b.addEventListener("click", () => dialog.close()));
  dialog.addEventListener("close", () => {
    lastTrigger?.focus();
    lastTrigger = null;
  });
});

// Mobile menu (<details>): close after choosing a section, on Esc and on outside click.
const menu = document.querySelector<HTMLDetailsElement>("[data-mmenu]");
function closeMenu() {
  if (menu?.open) menu.open = false;
}
menu?.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menu?.open) {
    closeMenu();
    menu.querySelector("summary")?.focus();
  }
});
document.addEventListener("click", (e) => {
  if (menu?.open && !menu.contains(e.target as Node)) closeMenu();
});

// Services index: all groups open on wide screens; on phones one open at a time (native exclusive details).
const rows = Array.from(document.querySelectorAll<HTMLDetailsElement>("[data-index] details"));
const applyIndex = () => {
  rows.forEach((d, i) => {
    if (mqMobile.matches) {
      d.name = "posluhy";
      d.open = i === 0;
    } else {
      d.removeAttribute("name");
      d.open = true;
    }
  });
};
applyIndex();
mqMobile.addEventListener("change", applyIndex);

// Bottom action bar: hidden while the clinics block (the same actions) is on screen.
const bar = document.querySelector<HTMLElement>("[data-actionbar]");
const clinics = document.getElementById("kliniky");
const footer = document.querySelector("footer");
if (bar && clinics && "IntersectionObserver" in window) {
  const seen = new Set<Element>();
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => (en.isIntersecting ? seen.add(en.target) : seen.delete(en.target)));
    bar.classList.toggle("is-hidden", seen.size > 0);
  }, { rootMargin: "0px 0px -20% 0px" });
  io.observe(clinics);
  if (footer) io.observe(footer);
}
