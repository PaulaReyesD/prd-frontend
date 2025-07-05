const btnComprar = document.querySelectorAll('.producto__btn')

btnComprar.forEach(function(boton){
  boton.addEventListener("click", function(){
    const id = this.getAttribute("data-ventana");
    const fondo = document.getElementById(id);
    const ventana = fondo.querySelector(".ficha-producto");
    
    if (fondo) fondo.style.display = "flex";
    if (ventana) ventana.style.display = "flex";
  });
});

const btnCerrar = document.querySelectorAll('.btn__cerrar')

btnCerrar.forEach(function(boton){
  boton.addEventListener("click", function(){
    const fondo = this.closest(".producto__ventana");
    const ventana = this.closest(".ficha-producto");

    if (fondo) fondo.style.display = "none";
    if (ventana) ventana.style.display = "none";
  });
});