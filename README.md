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

- Basicamente, toggle de clases.
- QuerySelector ("**[meta-datos]**").

## 6. Aplicando LocalStorage al "Modo Oscuro"

Para eso usaremos la propiedad de **Window**.**localStorage**, esto nos va a permitir almacenar la informacion. 

https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

Comenzamos, la primera vez que ingresamos al sitio web, no existe la llave (key) "theme" en localStorage, por lo que inicializamos como "default" o **"light"**:

<pre><code>if (localStorage.getItem("theme") === null) localStorage.setItem("theme", "light")</code></pre>

Luego, cuando realizamos un evento "click" con el **"darkModeBtn"**, el valor de la llave (key) va a cambiar utilizando un operador ternario.

Si leemos la llave (key) "theme" y nos devuelve como resultado **"light"**, entonces su nuevo valor sera **"dark"**, de mismo modo, al ocurrir este evento, se esta aplicando o quitando el modo oscuro.


<pre><code>localStorage.getItem("theme") === "light" ? 

localStorage.setItem("theme", "dark") : 

localStorage.setItem("theme", "light")</code></pre>

Finalmente, si refrescamos la pagina, el valor de la llave (key) se guarda, pero no aplica ningun cambio, para esto debemos agregar una condicional, **SOLO** si el valor que devuelve la llave "theme" es **dark**.

<pre><code>if(localStorage.getItem("theme") === "dark") btnContent($btn.textContent);
</code></pre>

## 7. Responsible Responsive Design

Leer blog:

https://webdevetc.com/blog/matchmedia-events-for-window-resizes/

`@param {query} query Breakpoint`

`@param {String} element Id del elemento a modificar`

`@param {String} mobileContent Contenido cuando no se cumpla la condicion`

`@param {String} desktopContent Contenido cuando se cumpla la condicion`

Creamos una variable para el breakpoint:

<pre><code>const myQuery = w.matchMedia(query)</code></pre>

Luego, se asigna un evento "change" que se dispara cuando confirma un cambio:

<pre><code>  myQuery.addEventListener("change", (e) => displayContent(e))</code></pre>


## 8. Responsive Tester 

Ejercicio "simple", recibimos los valores del formulario con el atributo **"name"** de cada **input**.

`@param {String} form Id del formulario`

https://www.javatpoint.com/javascript-window-close-method#:~:text=JavaScript%20provides%20an%20in%2Dbuilt,does%20not%20contain%20any%20parameter.

<pre><code> let newWindow = Window.open(URL, name, newWindowConfiguration)

newWindow.close()
</code></pre>

## 9. User agent

La propiedad **Navigator.userAgent** nos devuelve una cadena de texto con informacion del usuario relacionado al navegador/SO.

Principalmente nos permite conocer desde que dispositivo visitan nuestro sitio web, para poder mostrar contenido exclusivo o redireccionar.

