const d = document,
  w = window,
  n = navigator 
  
/**
 * 
 */

function estadoRed() {
  const mensaje = d.createElement('p'),
    $body = d.querySelector("body")
  
  const displayText = (online) => {
    if(online){
      mensaje.textContent = "Conectado"
      mensaje.classList.add("online")
      mensaje.classList.remove("offline")
    } else {
      mensaje.textContent = "Desconectado"
      mensaje.classList.add("offline")
      mensaje.classList.remove("online")
      
    }

    $body.insertAdjacentElement("afterbegin", mensaje)

    setTimeout(() => $body.removeChild(mensaje), 2000)

  }

  w.addEventListener("online", _ => {
    displayText(n.onLine)
  })

  w.addEventListener("offline", _ => {
    displayText(n.onLine)
  })
}

export default estadoRed;