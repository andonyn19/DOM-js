const d = document

/**
 * 
 * @param {String} idActivar Id elemento -> btn activar
 * @param {String} idDesactivar Id elemento -> btn desactivar
 * @param {String} idElement Elemento donde se va a imprimir la hora
 */

export function relojDigital (idActivar, idDesactivar, idElement){

  const $idActivar = d.getElementById(idActivar),
    $idDesactivar = d.getElementById(idDesactivar),
    $idElement = d.getElementById(idElement)

  let setTime;

  d.addEventListener("click", e => {
    
    if(e.target == $idActivar ){
      $idActivar.disabled = true;
      $idDesactivar.disabled = false;
      setTime = setInterval(()=>{
        const date = new Date().toLocaleTimeString();
        $idElement.innerHTML = date;
      }, 1000)
    }

    if(e.target == $idDesactivar ){
      $idActivar.disabled = false;
      $idDesactivar.disabled = true;
      clearInterval(setTime);
      $idElement.innerHTML = null;
    }
  })

}

/**
 * 
 * @param {String} idActivar Id elemento -> btn activar
 * @param {String} idDesactivar Id elemento -> btn desactivar
 * @param {String} soundLocation Ruta del archivo de audio
 */

// https://developer.mozilla.org/es/docs/Web/HTML/Element/audio

export function alarma (idActivar, idDesactivar, soundLocation) {
  const $idActivar = d.getElementById(idActivar),
    $idDesactivar = d.getElementById(idDesactivar),
    $alarm = d.createElement("audio")

  $alarm.src = soundLocation;

  let setAlarma ;

  d.addEventListener("click", e => {
    if(e.target == $idActivar){

      $idActivar.disabled = true;
      $idDesactivar.disabled = false;

      setAlarma = setTimeout(()=> {
        $alarm.play();
        $alarm.loop = true;
      }, 2000)
    }

    if(e.target == $idDesactivar){
      $idActivar.disabled = false;
      $idDesactivar.disabled = true;
      clearInterval(setAlarma);
      $alarm.pause();
      $alarm.currentTime = 0;
    }
  })
}

