import { arrayPortafol } from "./portafolio_object.js";

const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

document.getElementById('get-current-year').innerHTML = moment().format('YYYY'); + " ";

//modo nocturno prueba
const moonIcon = document.querySelector(".moon");
const sunIcon = document.querySelector(".sun");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches;

const iconToggle = () => {
  moonIcon.classList.toggle("display-none");
  sunIcon.classList.toggle("display-none");
};

const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    moonIcon.classList.add("display-none");
    return;
  }
  sunIcon.classList.add("display-none");
};

const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    iconToggle();
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  iconToggle();
};

sunIcon.addEventListener("click", () => {
  themeSwitch();
});
moonIcon.addEventListener("click", () => {
  themeSwitch();
});
themeCheck();
//cambiar a version movil
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

//cambiar banner cada que se cargue la pagina
function chageBanner() {
  let bannerArray = [
    { banner: "background.png" },
    { banner: "background-two.png" },
    { banner: "background-three.png" },
  ];
  //obtener un valor numerico aleatorio con Math
  let random_index = Math.floor(Math.random() * bannerArray.length);
  let selected_image = bannerArray[random_index];
  let nuevobanner = (document.getElementById(
    "banner"
  ).style.backgroundImage = `url(./img/${selected_image.banner})`);
}
window.onload = chageBanner;

//apartado tecnologias
const accordionHeader = document.querySelectorAll(".accordion-header");
accordionHeader.forEach((header) => {
  header.addEventListener("click", function () {
    const accordionContent =
      header.parentElement.querySelector(".accordion-content");
    let accordionMaxHeight = accordionContent.style.maxHeight;

    // Condition handling
    if (accordionMaxHeight == "0px" || accordionMaxHeight.length == 0) {
      accordionContent.style.maxHeight = `${accordionContent.scrollHeight + 32
        }px`;
      header.querySelector(".fas").classList.remove("fa-plus");
      header.querySelector(".fas").classList.add("fa-minus");
      header.parentElement.classList.add("bg-indigo-50");
    } else {
      accordionContent.style.maxHeight = `0px`;
      header.querySelector(".fas").classList.add("fa-plus");
      header.querySelector(".fas").classList.remove("fa-minus");
      header.parentElement.classList.remove("bg-indigo-50");
    }
  });
});

//generar targetas de proyectos realizados
let mostTarget = "";
arrayPortafol.forEach((target) => {
  mostTarget += `<div class="md:w-1/2 lg:w-1/3 py-4 px-4 one">
  <div class="">
    <div class="">
      <div class="bg-white dark:bg-gray-900 container shadow p-2 rounded-lg text-gray-800 hover:shadow-lg">
        <img src="./img/${target.banner}" autoplay loop muted
          class="cover h-32 rounded-lg w-full object-cover"></img>
        <div class="flex justify-center">
          <img src="./img/${target.avatar}"
            class="rounded-full -mt-6 border-4 object-center object-cover border-transparent mr-2 h-16 w-16">
        </div>
        <div class="py-2 px-2">
          <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-blue-500"></span>
          <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-blue-500"></span>
          <div class=" font-bold font-title text-center text-black dark:text-white">${target.tittle}</div>
          <div class="text-sm font-light text-center my-2 text-black dark:text-white">${target.subtitle}</div>
          <div class="text-sm font-light text-center my-2 leading-relaxed text-blue-500">${target.type}
          </div>
          <div
            class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l  border-blue-500 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <a id="mostProyect" class="mostProyect focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:bg-indigo-500 ml-0 md:ml-5 bg-blue-500 dark:bg-indigo-600 
            ease-in-out hover:bg-indigo-600 rounded text-white px-3 md:px-6 py-2 text-sm hover:shadow-lg transition duration-500 transform-gpu hover:scale-110"
              Target="_blank" href="${target.view}">¡Mirar!</a>
            <div id="${target.uuid}" class="${target.uuid} bg-white dark:bg-gray-900 border-l-4  border-blue-500 mt-4 p-3 text-gray-900 dark:text-white">
              <h6 class="mb-2 font-semibold leading-5">
                Descripción
              </h6>
              <p class="text-sm">
                <strong>Creación: </strong>${target.date}.
              </p>
              <p class="text-sm">
                <strong>Descripción: </strong>${target.description}
              </p>
              <p class="text-sm">
                <strong>Tecnologías: </strong>${target.tecnolog}.
              </p>
              <p class="text-sm">
                <strong>Versión: ${target.version}</strong>
              </p>
            </div>
            <button id="${target.buttonOcult}"
              class="mt-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:bg-indigo-500 ml-0 md:ml-5 bg-blue-500 dark:bg-indigo-600 
            ease-in-out hover:bg-indigo-600 rounded text-white px-3 md:px-6 py-2 text-sm hover:shadow-lg transition duration-500 transform-gpu hover:scale-110"
            onclick="changeDisplay(${target.uuid})">Descripción</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
  document.getElementById("targetPortafolio").innerHTML = mostTarget;

});
