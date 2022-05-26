const d = document,
  w = window

  /**
   * 
   * @param {query} query Breakpoint
   * @param {String} element Id del elemento a modificar
   * @param {String} mobileContent Contenido cuando no se cumpla la condicion
   * @param {String} desktopContent Contenido cuando se cumpla la condicion
   */

function responsiveDesign (query, element, mobileContent, desktopContent) {
  const myQuery = w.matchMedia(query),
    $element = d.getElementById(element)

  const displayContent = (event) => {
    if(event.matches){
      $element.innerHTML = desktopContent
    } else {
      $element.innerHTML = mobileContent
    }
  }

  displayContent(myQuery);

  myQuery.addEventListener("change", (e) => displayContent(e))

}

export default responsiveDesign