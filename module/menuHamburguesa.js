const d = document 

/**
 * 
 * @param {String} hamburgerBtn Boton del menu
 * @param {String} panelCompleto Contenedor elementos del menu
 * @param {String} listaPanel Lista de elementos del menu dentro del $panel
 */

function menuHamburguesa (hamburgerBtn, panelCompleto, listaPanel) {
  const $hamburgerBtn = d.querySelector(hamburgerBtn),
    $panelCompleto = d.querySelector(panelCompleto)

  d.addEventListener("click", e =>{
    if(e.target === $hamburgerBtn || e.target.matches(`${hamburgerBtn} > *`)){
      $panelCompleto.classList.toggle("active")
      $hamburgerBtn.classList.toggle("is-active")
    }
    if(e.target.matches(`${listaPanel} > *`)){
      $panelCompleto.classList.toggle("active")
      $hamburgerBtn.classList.toggle("is-active")
    }
  })  
}

export default menuHamburguesa;