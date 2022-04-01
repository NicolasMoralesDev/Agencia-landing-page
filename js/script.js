/* Cambio de color en el nav al scrolear */

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (document.documentElement.scrollTop > 200) {
    let cambio = document.getElementById("nav-cambio");
    return (cambio.style.backgroundColor = "black");
  } else {
    let cambio = document.getElementById("nav-cambio");
    return (cambio.style.backgroundColor = "rgba(0, 0, 0, 0.5)");
  }
}

/* ScrolReveal */

ScrollReveal().reveal(".carousel");
ScrollReveal().reveal(".footer-col", { delay: 500 });
ScrollReveal().reveal(".icon-whatsapp", { delay: 500 });
ScrollReveal().reveal(".nosotros-container", { delay: 500 });
ScrollReveal().reveal("iframe", { delay: 500 });
ScrollReveal().reveal(".text", { delay: 500 });
ScrollReveal().reveal(".container-section-1", { delay: 500 });
ScrollReveal().reveal(".container-form", { delay: 500 });
