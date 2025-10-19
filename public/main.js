import { conhecimentos } from "/conhecimentos.js";
import { projetos } from "/projetos.js";

const navigation = document.querySelector("#navigation");
const backToTopButton = document.querySelector("#backToTopButton");
const toggle = document.querySelector("#sw-checkbox");

const img_1 = document.querySelector("#img-col-1");
const img_2 = document.querySelector("#img-col-2");
const img_2_white = document.querySelector("#img-col-2-white");
const vidro = document.querySelector("#vidro");

const about = document.querySelector("#about");
const projects = document.querySelector("#projects");
const knowledge = document.querySelector("#knowledge");
const contact = document.querySelector("#contact");

const projectsWrapper = projects ? projects.querySelector(".wrapper") : null;
const knowledgeWrapper = knowledge ? knowledge.querySelector(".wrapper") : null;

window.addEventListener("load", () => {
  if (projectsWrapper) projetos(projectsWrapper);
  if (knowledgeWrapper) conhecimentos(knowledgeWrapper);

  document.querySelectorAll(".open").forEach(btn =>
    btn.addEventListener("click", () => document.body.classList.add("menu-expanded"))
  );
  document.querySelectorAll(".close").forEach(btn =>
    btn.addEventListener("click", () => document.body.classList.remove("menu-expanded"))
  );

  document.querySelectorAll(".menu a").forEach(link =>
    link.addEventListener("click", () => document.body.classList.remove("menu-expanded"))
  );

  if (toggle) {
    toggle.addEventListener("change", () => {
      document.body.classList.toggle("light-mode");
    });
  }

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

  setTimeout(() => {
    if (img_1) img_1.style.opacity = 0;
    if (img_1) img_1.style.animation = "none";
    if (img_2) img_2.style.animation = "none";
    if (img_2_white) img_2_white.style.animation = "none";
    if (vidro) vidro.style.animation = "none";
  }, 4000);
});

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