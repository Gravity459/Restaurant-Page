(()=>{"use strict";function e(e){const t=document.createElement("li");return t.textContent=e,t.setAttribute("id",e),t}const t=function(){const t=document.createElement("nav");return t.setAttribute("id","nav"),t.appendChild(function(){const t=document.createElement("div");return t.classList.add("nav-elements"),t.appendChild(function(){const t=document.createElement("ul");return t.appendChild(e("Home")),t.appendChild(e("Menu")),t.appendChild(e("Contact")),t}()),t}()),t};function n(e,t,n){const r=document.createElement("div");if(r.classList.add(e),""!=t&""!=n)r.appendChild(function(e,t){var n=document.createElement("span");return n.classList.add(e),n.textContent=t,c(n,"classy-font"),n}(t,n));else if(""!=n){const e=document.createElement("img");e.setAttribute("src",n),e.setAttribute("alt","burger image"),r.appendChild(e)}return r}function c(e,t){e.classList.add(t)}var r="";function o(e){if(r!==e){if(""==r){r=e;var t=document.querySelector(`#${r}`);t=document.querySelector(`#${r}`)}else(t=document.querySelector(`#${r}`)).classList.remove("current"),r=e,t=document.querySelector(`#${r}`);t.classList.add("current")}}function d(){document.querySelector("#content").appendChild(function(){var e=n("main-area","","");c(e,"home-area");const t=n("first","ftext","Welcome to the best burger joint in town!"),r=n("second","","../images/burgers.jpg"),o=n("third","ltext","And there is plenty more of where that came from!");return e.appendChild(t),e.appendChild(r),e.appendChild(o),e}()),o("Home")}!function(){const e=document.querySelector("#content");e.appendChild(function(){const e=document.createElement("header");return e.setAttribute("id","header"),e.appendChild(function(){const e=document.createElement("i");return e.classList.add("fas"),e.classList.add("fa-hamburger"),e.appendChild(function(){const e=document.createElement("span");return e.textContent="OH MY CHEESE!!!!",e.classList.add("classy-font"),e}()),e}()),e}()),e.appendChild(t()),d(),function(){const e=document.querySelector("#Home"),t=document.querySelector("#Menu"),n=document.querySelector("#Contact");e.addEventListener("click",(()=>{"Home"!==r&&(o("Home"),d())})),t.addEventListener("click",(()=>{"Menu"!==r&&o("Menu")})),n.addEventListener("click",(()=>{"Contact"!==r&&o("Contact")}))}()}()})();