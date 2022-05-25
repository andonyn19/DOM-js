const d = document,
  w = window

/**
 * 
 * @param {String} scrollBtn Clase del boton "Back to Top"
 */

function scrollBackToTop(scrollBtn) {
  const $scrollBtn = d.querySelector(scrollBtn)

  d.addEventListener("scroll", _ => {
    if (w.pageYOffset > 800) {
      $scrollBtn.classList.remove("hidden")
    } else {
      $scrollBtn.classList.add("hidden")
    }
  })

  d.addEventListener("click", e => {
    if (e.target == $scrollBtn) {
      w.scrollTo({
        top: 0,
        behavior: "smooth"
      })

    }
  })
}

export default scrollBackToTop;