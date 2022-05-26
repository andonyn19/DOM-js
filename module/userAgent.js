const d = document,
  n = navigator

function userAgent(element) {
  const $userAgentElement = d.getElementById(element),
    mobile = {
      android: () => n.userAgent.match(/android/i),
      ios: () => n.userAgent.match(/iphone|ipad|ipod/i),
      windows: () => n.userAgent.match(/windows phone/i),
      any: function () {
        return (
          this.android() ||
          this.ios() ||
          this.windows()
        )
      }
    },

    desktop = {
      linux: () => n.userAgent.match(/linux/i),
      mac: () => n.userAgent.match(/mac os/i),
      windows: () => n.userAgent.match(/windows nt/i),
      any: function () {
        return (
          this.linux() ||
          this.mac() ||
          this.windows()
        )
      }
    },

    browser = {
      chrome: () => n.userAgent.match(/chrome/i),
      safari: () => n.userAgent.match(/safari/i),
      firefox: () => n.userAgent.match(/firefox/i),
      opera: () => n.userAgent.match(/opera|opera mini/i),
      ie: () => n.userAgent.match(/msie|iemobile/i),
      edge: () => n.userAgent.match(/edge/i),
      any: function () {
        return (
          this.chrome() ||
          this.safari() ||
          this.firefox() ||
          this.opera() ||
          this.ie() ||
          this.edge()
        )
      }
    }

  $userAgentElement.innerHTML = `${n.userAgent} <br>
    <b>Plataforma</b>: ${mobile.any() ? mobile.any() : desktop.any()}<br>
    <b>Navegador</b>: ${browser.any()} <br><br>`

  if (browser.chrome()) {
    $userAgentElement.innerHTML += `<b>Contenido exclusivo para Chrome<b>`
  }
  if (browser.firefox()) {
    $userAgentElement.innerHTML += `<b>Contenido exclusivo para Firefox<b>`
  }

  //window.location.href(URL)

}

export default userAgent;