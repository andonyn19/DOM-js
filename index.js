const d = document,
  w = window,
  n = navigator

import menuHamburguesa from './module/menuHamburguesa.js';
import { relojDigital, alarma } from './module/relojAlarma.js';
import cuentaRegresiva from './module/cuentaRegresiva.js';
import scrollBackToTop from './module/scrollBackToTop.js';
import darkModeBtn from './module/darkModeBtn.js';
import responsiveDesign from './module/responsiveDesign.js';
import responsiveTester from './module/responsiveTester.js';
import userAgent from './module/userAgent.js';
import estadoRed from './module/estadoRed.js';
import geolocalizacion from './module/geolocalizacion.js';
import filter from './module/filter.js';

d.addEventListener("DOMContentLoaded", e => {
  menuHamburguesa(".hamburger", ".panel", ".menu");
  relojDigital("activar-reloj", "desactivar-reloj", "reloj");
  alarma("activar-alarma", "desactivar-alarma", "./alarm.mp3");
  cuentaRegresiva("countdown", "2023, 03, 11");
  scrollBackToTop(".scroll");
  responsiveDesign("(min-width: 600px)", "youtube", "Texto movil", "Texto desktop");
  responsiveDesign("(min-width: 600px)", "maps", "Texto movil", "Texto desktop");
  responsiveTester("responsive-tester");
  userAgent("uaContent");
  geolocalizacion("geoContent");
  filter(".card-filter", ".card");
})

darkModeBtn(".dark-modeBtn");
estadoRed();