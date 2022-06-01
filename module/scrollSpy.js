const d = document

function scrollSpy() {

  const $section = d.querySelectorAll(`section[data-scroll-spy]`);

  const callback = (entries) => {
    //console.log("Entries", entries)

    entries.forEach(entry => {
      //console.log("Entry", entry)
      const id = entry.target.getAttribute("id")

      if (entry.isIntersecting) {
        //console.log(id)
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active")
      } else {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active")
      }
    })
  }

  const params = {
    //rootMargin: "-400px",
    threshold: [.5, .75], //Se va a activar cuando tenga una visibilidad del 50-75%
  }
   
  //Creando el observador
  const observer = new IntersectionObserver(callback, params);
  console.log(observer)

  //Asignando a un elemento que va a "observar"
  $section.forEach(section => observer.observe(section))

}

export default scrollSpy;
