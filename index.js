const d = document,
  w = window, 
  n = navigator

import menuHamburguesa from './module/menuHamburguesa.js'

d.addEventListener("DOMContentLoaded",e =>{
  menuHamburguesa(".hamburger", ".panel", ".menu");
})