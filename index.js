
//-------- INICIO FUNCIONALIDAD NAVBAR Y MENUS DESPLEGABLE
{
const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");

btnMenu.addEventListener("click", function () {
  console.log("funciona");
  menu.classList.toggle("mostrar");
});

const subMenubtn = document.querySelector(".submenu-btn");
const flecha = document.querySelector(".fa-angle-down")

subMenubtn.addEventListener("click", function () {
 
  if (window.innerWidth < 1024) {
    const subMenu = subMenubtn.nextElementSibling;
    const height = subMenu.scrollHeight;

    if (subMenu.classList.contains("desplegar")) {
      subMenu.classList.remove("desplegar");
      subMenu.removeAttribute("style");
      flecha.classList.remove("fa-angle-up")
      flecha.classList.add("fa-angle-down")

    } else {
      subMenu.classList.add("desplegar");
      subMenu.style.height = height + "px";
      flecha.classList.add("fa-angle-up")
      flecha.classList.remove("fa-angle-down")
    }
  }
});
};
//-------- FIN FUNCIONALIDAD NAVBAR Y MENUS DESPLEGABLE
