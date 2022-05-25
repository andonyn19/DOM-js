const d = document

/**
 * 
 * @param {String} btn Clase del Dark mode Btn
 */

function darkModeBtn(btn) {
  const $elementsDark = d.querySelectorAll("[data-dark]"),
    $elementsLight = d.querySelectorAll("[data-light]"),
    $btn = d.querySelector(btn),
    moon = "🌙",
    sun = "🔆"

  $btn.textContent = moon;

  //Main function 

  const btnContent = (textContent) => {

    $btn.classList.toggle("dark")

    $elementsDark.forEach(element => {
      element.classList.toggle("darkTheme")
      element.style.transition = ".3s ease-in-out";
    })

    $elementsLight.forEach(element => {
      element.classList.toggle("defaultTheme")
      element.style.transition = ".3s ease-in-out";
    })

    textContent === moon ? $btn.textContent = sun : $btn.textContent = moon
  }

  d.addEventListener("click", e => {

    if(e.target === $btn){
      btnContent($btn.textContent);
    }

  })

}

export default darkModeBtn