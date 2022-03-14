
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");




btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});


//modo nocturno prueba
let cambiarColor = document.getElementById("modoNocturno");
let body = document.getElementById("body");

cambiarColor.addEventListener("click", () => {
  body.style.backgroundColor = "black";
  alert("xdd");
});

//apartado tecnologias

const accordionHeader = document.querySelectorAll(".accordion-header");

accordionHeader.forEach((header) => {
header.addEventListener("click", function () {
    const accordionContent = header.parentElement.querySelector(".accordion-content");
    let accordionMaxHeight = accordionContent.style.maxHeight;

    // Condition handling
    if (accordionMaxHeight == "0px" || accordionMaxHeight.length == 0) {
    accordionContent.style.maxHeight = `${accordionContent.scrollHeight + 32}px`;
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


//mostrar y ocultar dbz
function cambiadisplay(id) {  
if (document.getElementById('desDBZ').style.display=='block') {  
document.getElementById('desDBZ').style.display='none';  
}
else {  
document.getElementById('desDBZ').style.display='block';  
}  
}



//mostrar y ocultar cusaem
function cambiadisplaydos(id) {  
  if (document.getElementById('descCusaem').style.display=='block') {  
  document.getElementById('descCusaem').style.display='none';  
  }
  else {  
  document.getElementById('descCusaem').style.display='block';  
  }  
  }


  
//mostrar y ocultar dentista
function cambiadisplaytres(id) {  
  if (document.getElementById('desDentista').style.display=='block') {  
  document.getElementById('desDentista').style.display='none';  
  }
  else {  
  document.getElementById('desDentista').style.display='block';  
  }  
  }