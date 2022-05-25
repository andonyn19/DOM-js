const d = document 

function cuentaRegresiva (idElemento, fecha) {
  const $id = d.getElementById(idElemento),
    $fecha = new Date(fecha).getTime()

  let timer = setInterval(() =>{
    const $remaining = $fecha - Date.now()
    let dias = Math.floor(($remaining/(1000*60*60*24))),
      horas = Math.floor(($remaining%(1000*60*60*24))/(1000*60*60)),
      minutos = Math.floor(($remaining%(1000*60*60))/(1000*60)),
      segundos = Math.floor(($remaining%(1000*60))/(1000))

    $id.innerHTML = `
      Faltan ${dias} dias
      ${horas} horas
      ${minutos} minutos
      ${segundos} segundos
    `
  }, 1000)

  

}

export default cuentaRegresiva