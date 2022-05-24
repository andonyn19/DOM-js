const d = document,
  w = window, 
  n = navigator

import menuHamburguesa from './module/menuHamburguesa.js';
import { relojDigital, alarma } from './module/relojAlarma.js';

d.addEventListener("DOMContentLoaded",e =>{
  menuHamburguesa(".hamburger", ".panel", ".menu");
  relojDigital("activar-reloj", "desactivar-reloj", "reloj");
  alarma("activar-alarma", "desactivar-alarma", "./alarm.mp3")
})