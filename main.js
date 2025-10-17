import { conhecimentos } from "./conhecimentos.js";
import { projetos } from "./projetos.js";

// ---------------- Elementos ----------------
const navigation = document.querySelector("#navigation");
const backToTopButton = document.querySelector("#backToTopButton");
const toggle = document.querySelector("#sw-checkbox");

const notebook_1 = document.querySelector("#notebook-1");
const notebook_2 = document.querySelector("#notebook-2");
const notebook_2_white = document.querySelector("#notebook-2-white");
const vidro = document.querySelector("#vidro");

// Seções
const about = document.querySelector("#about");
const projects = document.querySelector("#projects");
const knowledge = document.querySelector("#conhecimentos");
const contact = document.querySelector("#contact");

// Wrappers
const projectsWrapper = projects ? projects.querySelector(".wrapper") : null;
const knowledgeWrapper = knowledge ? knowledge.querySelector(".wrapper") : null;

// ---------------- On Load ----------------
window.addEventListener("load", () => {
  // Carregar projetos e conhecimentos
  if (projectsWrapper) projetos(projectsWrapper);
  if (knowledgeWrapper) conhecimentos(knowledgeWrapper);

  // Menu abrir/fechar
  document.querySelectorAll(".open").forEach(btn =>
    btn.addEventListener("click", () => document.body.classList.add("menu-expanded"))
  );
  document.querySelectorAll(".close").forEach(btn =>
    btn.addEventListener("click", () => document.body.classList.remove("menu-expanded"))
  );

  // Fechar menu ao clicar em qualquer link
  document.querySelectorAll(".menu a").forEach(link =>
    link.addEventListener("click", () => document.body.classList.remove("menu-expanded"))
  );

  // Light mode
  if (toggle) {
    toggle.addEventListener("change", () => {
      document.body.classList.toggle("light-mode");
    });
  }

  // Botão "Desafio"
  const desafioBtn = document.querySelector("#desafio");
  if (desafioBtn) {
    desafioBtn.addEventListener("click", () => {
      desafios(projectsWrapper);
      const backBtn = document.querySelector("#backToProjectsBtn");
      if (backBtn) {
        backBtn.addEventListener("click", () => {
          if (projectsWrapper) projetos(projectsWrapper);
          if (knowledgeWrapper) conhecimentos(knowledgeWrapper);
        });
      }
    });
  }

  // Animações iniciais
  setTimeout(() => {
    if (notebook_1) notebook_1.style.opacity = 0;
    if (notebook_1) notebook_1.style.animation = "none";
    if (notebook_2) notebook_2.style.animation = "none";
    if (notebook_2_white) notebook_2_white.style.animation = "none";
    if (vidro) vidro.style.animation = "none";
  }, 4000);
});

// ---------------- Scroll ----------------
window.addEventListener("scroll", onScroll);
onScroll();

function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(projects);
  activateMenuAtCurrentSection(knowledge);
  activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
  if (!section) return;

  const targetLine = scrollY + innerHeight / 2;
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;

  const sectionTopReached = targetLine >= sectionTop;
  const sectionEndPassed = sectionTop + sectionHeight <= targetLine;

  const inSection = sectionTopReached && !sectionEndPassed;

  const sectionId = section.getAttribute("id");
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);
  if (!menuElement) return;

  menuElement.classList.remove("active");
  if (inSection) menuElement.classList.add("active");
}

function showNavOnScroll() {
  if (scrollY > 0) navigation.classList.add("scroll");
  else navigation.classList.remove("scroll");
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) backToTopButton.classList.add("show");
  else backToTopButton.classList.remove("show");
}

// ---------------- ScrollReveal ----------------
ScrollReveal({
  origin: "bottom",
  distance: "50px",
  duration: 1000,
}).reveal(
  `#home, 
   #home img, 
   #about, 
   #about header, 
   #about p,
   #about img,
   #projects,
   #projects header,
   #projects .card,
   #conhecimentos,
   #conhecimentos header,
   #conhecimentos .card,
   #contact,
   #contact header`
);
