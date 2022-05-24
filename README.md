# Librería JS

Biblioteca con funciones escritas en JavaScript que proporciona varias funcionalidades, asimismo son fáciles de implementar.

Finalmente, las puedes incluir en un proyecto sin depender de una estructura en particular.

## 1. Menu Hamburguesa 

Menu de hamburguesa que muestra el menu completo del sitio web.

Importar "HamburgerCSS", puedes utilizar cdn.js.

`@param {String} hamburgerBtn: Boton del menu`

`@param {String} panelCompleto: Contenedor elementos del menu (Toggle class "active")`

`@param {String} listaPanel: Lista de elementos del menu dentro del $panel (Toggle class "active" al seleccionar ruta a ir)`

Class active: transform: translateX(0);

- Toggle element Class using JS.
- QuerySelector.
- Event "click".

## 2. Reloj Digital y Alarma Sonora

Reloj digital que muestra los minutos y segundos despues de inicializar con un botón. 

`@param {String} idActivar Id elemento -> btn activar`

`@param {String} idDesactivar Id elemento -> btn desactivar`

`@param {String} idElement Elemento donde se va a imprimir la hora`

Alarma sonora, sonará 2 segundos una vez es inicializada.

`@param {String} idActivar Id elemento -> btn activar`

`@param {String} idDesactivar Id elemento -> btn desactivar`

`@param {String} soundLocation Ruta del archivo de audio`

- SetInterval.
- Date Object.
- SetTimeOut.
- Audio tag.