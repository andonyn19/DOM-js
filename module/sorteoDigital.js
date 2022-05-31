const d = document

/**
 * 
 * @param {String} list Selector valido para CSS
 * @param {String} btn Btn
 */

function sorteoDigital(list, btn) {
  const $elements = d.querySelectorAll(list),
    $sorteoBtn = d.querySelector(btn)

  d.addEventListener("click", (e) => {
    if (e.target === $sorteoBtn) {
      e.preventDefault();
      const random = Math.floor(Math.random() * $elements.length);
      alert(`El ganador es ${$elements[random].textContent}`);
    }
  })

}

export default sorteoDigital;