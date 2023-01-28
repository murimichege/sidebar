let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange(); //chama a função
});

searchBtn.addEventListener("click", () => {
  // Abre a barra lateral ao clicar
  sidebar.classList.toggle("open");
  menuBtnChange(); //chama a função
});

// Código que altera o botão da barra lateral
function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //substitui a classe iocns
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //substitui a classe iocns
  }
}
