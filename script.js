/*
  ================================
  A&A TRAVEL SOLUTIONS - CONFIG
  ================================
  Change ONLY these two values to control the social buttons.

  Instagram: enter your username WITHOUT @
  WhatsApp: enter the full international phone number WITHOUT + or spaces.
  Example Sri Lanka: 94779453090
*/
const CONFIG = {
  instagramUsername: "aadhil__03",
  whatsappNumber: "@aadhil.cmb",
  whatsappMessage: "Hello A&A Travel Solutions! I would like to plan a trip."
};

const instagramUrl = `https://instagram.com/${CONFIG.instagramUsername.replace(/^@/, "")}`;
const whatsappUrl = `https://wa.me/message/2RO2573XB46ZL1`;

document.querySelectorAll(".js-instagram").forEach(link => link.href = instagramUrl);
document.querySelectorAll(".js-whatsapp").forEach(link => link.href = whatsappUrl);

document.getElementById("year").textContent = new Date().getFullYear();

const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    const open = mobileMenu.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });
}
document.querySelectorAll(".mobile-menu a").forEach(a => {
  a.addEventListener("click", () => mobileMenu.classList.remove("open"));
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

const backTop = document.querySelector(".back-top");
window.addEventListener("scroll", () => {
  backTop.classList.toggle("show", window.scrollY > 500);
});
backTop.addEventListener("click", () => window.scrollTo({top: 0, behavior: "smooth"}));
