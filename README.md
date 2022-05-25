# Librería JS

Biblioteca con funciones escritas en **JavaScript** que proporciona varias funcionalidades, asimismo son **fáciles** de implementar.

## 1. Menu Hamburguesa 

Menu de **hamburguesa** que muestra el menu completo del sitio web.

Importar "HamburgerCSS", puedes utilizar **cdn.js.**

`@param {String} hamburgerBtn: Boton del menu`

`@param {String} panelCompleto: Contenedor elementos del menu (Toggle class "active")`

`@param {String} listaPanel: Lista de elementos del menu dentro del $panel (Toggle class "active" al seleccionar ruta a ir)`

Class active: transform: translateX(0);

- Toggle element Class using JS.
- QuerySelector.
- Event "click".

## 2. Reloj Digital y Alarma Sonora

Reloj digital que muestra los **dias**, **minutos** y **segundos** despues de inicializar con un botón. 

`@param {String} idActivar Id elemento -> btn activar`

`@param {String} idDesactivar Id elemento -> btn desactivar`

`@param {String} idElement Elemento donde se va a imprimir la hora`

Alarma sonora, **sonará** 2 segundos una vez es inicializada.

`@param {String} idActivar Id elemento -> btn activar`

`@param {String} idDesactivar Id elemento -> btn desactivar`

`@param {String} soundLocation Ruta del archivo de audio`

- SetInterval.
- Date Object.
- SetTimeOut.
- Audio tag.

## 3. Cuenta regresiva

Cuenta regresiva hasta el dia de mi cumpleaños!

`@param {String} idElemento Elemento donde se va a imprimir la info`

`@param {String} fecha Fecha a llegar`

- Date Object.
- Resto (%).

Kinda tricky, ngl.

## 4. Scroll "Back to Top Button"

Uno de mis ejercicios favoritos.

`@param {String} scrollBtn Clase del boton "Back to Top"`

A pesar de ser una función que recibe solo 1 **parametro** y son pocas lineas de codigo, siento que es un ejercio muy **util** e **interesante**.

- Evento "Scroll".
- Window.**pageYOffset** (Numero de pixeles alejado del axis-vertical/top).
- Agregar y eliminar clases (hidden).
- Window.**scrollTo**({options}) (Desplazar a punto especifico).

## 5. Dark mode button

El efecto favorito de muchos, me incluyo, utilizando **HTML, CSS** Y algo de **JavaScript** es fácil de implementar.

`@param {String} btn Clase del Dark mode Btn`

Para aplicar el modo oscuro debes utilizar metadatos en el elemento HTML en especifico **[meta-dark]**.

Para los elementos que NO quieres que se modifiquen con el modo oscuro (cabeceras, background-colors), aplique **[meta-light]**.

- Basicamente, toggle de clases.
- QuerySelector ("**[meta-datos]**").

