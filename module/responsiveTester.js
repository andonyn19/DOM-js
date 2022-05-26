const d = document,
  w = window

/**
 * 
 * @param {String} form Id del formulario
 */

function responsiveTester(form) {
  const $form = d.getElementById(form)

  let textWindow;

  $form.addEventListener("submit", e =>{
    e.preventDefault();
    textWindow = window.open($form.url.value, "textWindow", `innerWidth=${$form.width.value}, innerHeight=${$form.height.value}`);
  })

  d.addEventListener("click", e => {
    if(e.target === $form.close){
      e.preventDefault()
      textWindow.close();
    }
  })
  
}

export default responsiveTester