const d = document

function validarFormulario() {
  const $contactForm = d.querySelector(".contact-form"),
    $inputs = d.querySelectorAll(".contact-form [required]")

  /*
    Agregamos "span" a cada "input"
  */
  $inputs.forEach(input => {
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("contact-form-error", "none");
    input.insertAdjacentElement("afterend", $span);
  })

  d.addEventListener("keyup", (e) => {

    if (e.target.matches(".contact-form [required")) {
      let $input = e.target,
        pattern = e.target.pattern || e.target.dataset.pattern;

      if (pattern && $input.value.length !== "") {
        let regExp = new RegExp(pattern)

        return !regExp.exec($input.value) ?
          d.getElementById($input.name).classList.add("is-active") :
          d.getElementById($input.name).classList.remove("is-active")
      }

      if (!pattern) {
        return $input.value === "" ?
          d.getElementById($input.name).classList.add("is-active") :
          d.getElementById($input.name).classList.remove("is-active")
      }

    }

  })

}

export default validarFormulario;