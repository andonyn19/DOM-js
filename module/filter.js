const d = document

/**
 * 
 * @param {String} input Referencia al input que va a buscar
 * @param {String} selector Selector que va a buscar en propiedad textContent
 */

function filter(input, selector) {
  const $input = d.querySelector(input),
    $cardList = d.querySelectorAll(selector)

  d.addEventListener("keyup", e => {

    if(e.key === "Escape") e.target.value = null;

    if (e.target === $input) {
      $cardList.forEach(card => {
        card.textContent.toLowerCase().includes(e.target.value.toLowerCase()) ?
          card.classList.remove("filter") :
          card.classList.add("filter")
      })
    }

  });

}

export default filter