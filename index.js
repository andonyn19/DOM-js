const d = document,
  w = window, 
  n = navigator

import menuHamburguesa from './module/menuHamburguesa.js';
import { relojDigital, alarma } from './module/relojAlarma.js';
import cuentaRegresiva from './module/cuentaRegresiva.js';
import scrollBackToTop from './module/scrollBackToTop.js';
import darkModeBtn from './module/darkModeBtn.js';

d.addEventListener("DOMContentLoaded",e =>{
  menuHamburguesa(".hamburger", ".panel", ".menu");
  relojDigital("activar-reloj", "desactivar-reloj", "reloj");
  alarma("activar-alarma", "desactivar-alarma", "./alarm.mp3");
  cuentaRegresiva("countdown", "2023, 03, 11");
  scrollBackToTop(".scroll");
  darkModeBtn(".dark-modeBtn");
})