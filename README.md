# Librería JS

Biblioteca con funciones escritas en **JavaScript** que proporciona varias funcionalidades, asimismo son **fáciles** de implementar.

Previsualizacion: https://dom-js.pages.dev/

## 1. Menu Hamburguesa 

Menu de **hamburguesa** que muestra el menu completo del sitio web.

Importar "HamburgerCSS", puedes utilizar **cdn.js.**

```js
@param {String} hamburgerBtn: Boton del menu
```
```js
@param {String} panelCompleto: Contenedor elementos del menu (Toggle class "active")
```
```js
@param {String} listaPanel: Lista de elementos del menu dentro del $panel (Toggle class "active" al seleccionar ruta a ir)
```
```css
Class active: transform: translateX(0);
```

- Toggle element Class using JS.
- QuerySelector.
- Event "click".

## 2. Reloj Digital y Alarma Sonora

Reloj digital que muestra los **dias**, **minutos** y **segundos** despues de inicializar con un botón. 

```js
@param {String} idActivar: Id elemento -> btn activar
```

```js
@param {String} idDesactivar: Id elemento -> btn desactivar
```

```js
@param {String} idElement: Elemento donde se va a imprimir la hora
```

Alarma sonora, **sonará** 2 segundos una vez es inicializada.

```js
@param {String} idActivar: Id elemento -> btn activar
```
```js
@param {String} idDesactivar: Id elemento -> btn desactivar
```

```js
@param {String} soundLocation: Ruta del archivo de audio
```

- SetInterval.
- Date Object.
- SetTimeOut.
- Audio tag.

## 3. Cuenta regresiva

Cuenta regresiva hasta el dia de mi cumpleaños!

```js
@param {String} idElemento: Elemento donde se va a imprimir la info
```
```js
@param {String} fecha: Fecha a llegar
```
- Date Object.
- Resto (%).

Kinda tricky, ngl.

## 4. Scroll "Back to Top Button"

Uno de mis ejercicios favoritos.

```js
@param {String} scrollBtn: Clase del boton "Back to Top"
```

A pesar de ser una función que recibe solo 1 **parametro** y son pocas lineas de codigo, siento que es un ejercio muy **util** e **interesante**.

- Evento "Scroll".
- Window.**pageYOffset** (Numero de pixeles alejado del axis-vertical/top).
- Agregar y eliminar clases (hidden).
- Window.**scrollTo**({options}) (Desplazar a punto especifico).

## 5. Dark mode button

El efecto favorito de muchos, creado utilizando **HTML, CSS** Y algo de **JavaScript**, es fácil de implementar.

```js
@param {String} btn: Clase del Dark mode Btn
```
Para aplicar el modo oscuro debes utilizar metadatos en el elemento HTML en especifico **[meta-dark]**.

- Basicamente, toggle de clases.
- QuerySelector ("**[meta-datos]**").

## 6. Aplicando LocalStorage al "Modo Oscuro"

Para eso usaremos la propiedad de **Window**.**localStorage**, esto nos va a permitir almacenar la informacion. 

https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

Comenzamos, la primera vez que ingresamos al sitio web, no existe la llave (key) "theme" en localStorage, por lo que inicializamos como "default" o **"light"**:
```js
if (localStorage.getItem("theme") === null) localStorage.setItem("theme", "light")
```
Luego, cuando realizamos un evento "click" con el **"darkModeBtn"**, el valor de la llave (key) va a cambiar utilizando un operador ternario.

Si leemos la llave (key) "theme" y nos devuelve como resultado **"light"**, entonces su nuevo valor sera **"dark"**, de mismo modo, al ocurrir este evento, se esta aplicando o quitando el modo oscuro.

```js
localStorage.getItem("theme") === "light" ? 

localStorage.setItem("theme", "dark") : 

localStorage.setItem("theme", "light")
```

Finalmente, si refrescamos la pagina, el valor de la llave (key) se guarda, pero no aplica ningun cambio, para esto debemos agregar una condicional, **SOLO** si el valor que devuelve la llave "theme" es **dark**.

```js
if(localStorage.getItem("theme") === "dark") btnContent($btn.textContent);
```

## 7. Responsible Responsive Design

Leer blog:

https://webdevetc.com/blog/matchmedia-events-for-window-resizes/

```js
@param {query} query: Breakpoint
```
```js
@param {String} element: Id del elemento a modificar
```
```js
@param {String} mobileContent: Contenido cuando no se cumpla la condicion
```
```js
@param {String} desktopContent: Contenido cuando se cumpla la condicion
```
Creamos una variable para el breakpoint:

```js
const myQuery = w.matchMedia(query);
```
Luego, se asigna un evento "change" que se dispara cuando confirma un cambio:

```js
myQuery.addEventListener("change", (e) => displayContent(e))
```

- Window.matchMedia(query).
- Evento "change"

## 8. Responsive Tester 

Ejercicio "simple", recibimos los valores del formulario con el atributo **"name"** de cada **input**.

```js
@param {String} form: Id del formulario
```

https://www.javatpoint.com/javascript-window-close-method#:~:text=JavaScript%20provides%20an%20in%2Dbuilt,does%20not%20contain%20any%20parameter.

```js
let newWindow = Window.open(URL, name, newWindowConfiguration);
newWindow.close();
```

- Window.open().

## 9. User agent

La propiedad **Navigator.userAgent** nos devuelve una cadena de texto con informacion del usuario relacionado al navegador/SO.

Principalmente nos permite conocer desde que dispositivo visitan nuestro sitio web, para poder mostrar contenido exclusivo o redireccionar.

- Regex.

## 10. Estado de la red

Nos permite conocer el estado de la red, esta función no recibe ningun parametro, lo que si necesitamos es el evento **online/offline** de la interfaz Window.

```js
window.addEventListener(online/offline , _ => (funcion))
```

https://lenguajejs.com/javascript/dom/insertar-elementos-dom/#los-m%C3%A9todos-insertadjacent

- InsertAdjacentElement.
- Remove child.

## 11. Geolocalizacion API

Nos permite conocer las coordenadas del usuario, al **aceptar** el permiso, se puede obtener la **latitud**, **longitud**, etc.

El metodo **getCurrentPosition** recibe 3 argumentos; el metodo de exito, de error y un objeto de opciones (presision alta, tiempo maximo de respuesta, cache).

```js
n.geolocation.getCurrentPosition(successCallBack, errorCallBack, options);
```

## 12. Filtros de busqueda 

Nos permite filtrar una lista de elementos con el valor que escribamos en el elemento **input**. 

```js
@param {String} input: Referencia al input que va a buscar
```


```js
@param {String} selector: Selector que va a buscar en propiedad textContent
```

Dependiendo de el valor que se ingresa en la etiqueta input:

```js
card.textContent.toLowerCase().includes(e.target.value.toLowerCase())
```
Se elimina o agrega la clase **"filter"**

```js
card.classList.remove("filter") || card.classList.add("filter")
```

## 13. Sorteo digital

Obtiene 1 elemento **random** de una lista de elementos.

```js
@param {String} list: Selector valido para CSS
```

```js
@param {String} btn: Btn del sorteo
```

- Math.random()
- CSS Selectors.

## 14. Responsive slider

Responsive slider que se puede aplicar a todo sitio web aplicando las siguientes reglas:

- Cada slide: class "slide"
- Boton siguiente: class "next"
- Boton anterior: class "previous"

Para que la imagen se muestre vamos a jugar con la clase "active", agregando o eliminando segun el boton que presionemos.

El primer **slider** debe llevar la clase "active".

```css
.active {
  opacity: 1;
  visibility: visible;
}
```

## 15. Scroll spy

Scroll espia actualiza automaticamente la barra de navegacion dependiendo de donde nos encontremos.

Primero, vamos a selecccionar todas las tags que tengan en sus atributos **[data-scroll-spy]**

```js
const $section = document.querySelectorAll(`section[data-scroll-spy]`)
```

Vamos a crear una variable "observer" que es de tipo **IntersectionObserver**, que recibe 2 argumentos, una funcion y opciones.

```js
const observer = new IntersectionObserver(callback, params);
```

Esta variable va a observar a cada uno de los elementos que hemos almacenado, con su metodo **observe**.

```js
$section.forEach(section => observer.observe(section))
```

El callback de la variable **observer** va a recibir como paramtro un arreglo de los elementos que esta observando, por lo que debemos recorrer el arreglo para saber si se estan intersectando.

```
if (entry.isIntersecting)
```

Si se cumple, entonces, se busca el elemento de la barra de navegación que tenga como **id** el id de **entry**.

```js
d.querySelector(`a[data-scroll-spy][href="#${id}"]`)
```

Para agregar la clase "active" que va a cambiar el color del bg.

```js
classList.add("active")
```
       
Finalmente, las opciones que recibe el variable observer, es **threshold** que se va a activar cuando tenga una visibilidad del 50-75%. **[0.5, 0.75]**.

Para mas info visitar **module/scrollSpy.js** y **css/scrollSpy.css**.

## 16. Video inteligente

Luego de conocer como funciona el tipo de dato **IntersectionObserver** para realizar un scroll Spy.

Para este ejercicio tambien realizamos los pasos de crear una variable **observer** tipo IntersectionObserver que va a *observar* con tu metodo **observe** a todos los videos con el atributo [data-smart-video].

```js
const $videos = d.querySelectorAll("video[data-smart-video]");
```

En el callback de la variable **observer** recorremos los datos y si, se esta *intersectando* entonces el video se va a reproducir automaticamente.

```js
(entry.isIntersecting) ?
entry.target.play() :
entry.target.pause()
```

Si queremos que el video se detenga cuando cambiemos de pantalla, debemos hacer un evento en el objeto **window**, con el evento **visibilitychange**.

```js
d.visibilityState === "visible" ?
  entry.target.play() :
  entry.target.pause()
```

- Tipo de dato IntersectionObserver.
- Atributos HTML.
- Evento VisibilityChange.

## 17. Validar formulario

Primero debemos obtener todos los elementos que esten dentro de el formulario que tengan el atributo **required**.

```js
$inputs = d.querySelectorAll(".contact-form [required]")
```

Despues, creamos una etiqueta **span** por cada input, y le agremos la clase **none** para no representarlo/"ocultarlo".

Recorremos **$inputs** y agremos el span luego de cada **input**.

```js
input.insertAdjacentElement("afterend", $span);
```

Realizamos una delegacion de evento **keyup**, que si se esta realizando en un input, dependiendo si se esta cumpliendo la expresion regular se agrega o quita la clase **"is-active"** de cada input.

Para mas info ver **module/validarFormulario.js**.

## 18. Enviar formulario

Para enviar el formulario estoy usando **formSUbmit**.

https://formsubmit.co/

Para que funcione debemos agregar los siguiente atributos al formulario.

```html
<form action="https://formsubmit.co/your@email.com" method="POST" target="_blank">
```

Y listo :D .

## 19. Narrador

El ultimo ejercicio de la seccion de videos, para esto debemos tener 4 constantes.

La opcion del menu:

```js
$speechSelect = d.getElementById("speech-select")
```

El texto:

```js
$speechTextArea = d.getElementById("speech-text")
```

El boton submit:

```js
$speechBtn = d.getElementById("speech-btn")
```

Finalemnte, creamos una constante tipo **SpeechSynthesisUtterance**, que es una API del navegador que representa una solicitud de voz.

```js
speechMessage = new SpeechSynthesisUtterance();
```

https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance