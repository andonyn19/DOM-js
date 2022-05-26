const d = document,
  n = navigator

/**
 * 
 * @param {String} id Id del elemento a imprimir la info
 */

function geolocalizacion(id) {
  const $setInfoElement = d.getElementById(id),
    options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

  const successCallBack = (position) => {
    console.log(position);
    $setInfoElement.innerHTML = `<b>Latitude:</b> ${position.coords.latitude}<br>
      <b>Lontitude:</b> ${position.coords.longitude}<br>
      <b>Accuracy:</b> ${position.coords.accuracy} m<br><br>
      <a href="https://www.google.com/maps/@${position.coords.latitude},${position.coords.longitude},20z" target="_blank" rel="noopener">Abrir ubicación en Maps</a>`
  } 

  const errorCallBack = (error) => {
    $setInfoElement.innerHTML = `${error.message}`
  }

  n.geolocation.getCurrentPosition(successCallBack, errorCallBack, options);
}

export default geolocalizacion