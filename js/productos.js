window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__lista'), {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: '.carousel__indicadores',
        arrows: {
          prev: '.carousel__anterior',
          next: '.carousel__siguiente'
        }
    });
});

let cerrar13 = document.querySelectorAll(".close13")[0];
let abrir13 = document.querySelectorAll(".cta13")[0];
let abrir14 = document.querySelectorAll(".cta14")[0];
let abrir15 = document.querySelectorAll(".cta15")[0];
let abrir16 = document.querySelectorAll(".cta16")[0];
let abrir17 = document.querySelectorAll(".cta17")[0];
let modal13 = document.querySelectorAll(".modal13")[0];
let modalC13 = document.querySelectorAll(".modal-container13")[0];

abrir13.addEventListener("click", function(e){
  e.preventDefault();
  modalC13.style.opacity = "1";
  modalC13.style.visibility = "visible";
  modal13.classList.toggle("modal-close13")
});

abrir14.addEventListener("click", function(e){
  e.preventDefault();
  modalC13.style.opacity = "1";
  modalC13.style.visibility = "visible";
  modal13.classList.toggle("modal-close13")
});

abrir15.addEventListener("click", function(e){
  e.preventDefault();
  modalC13.style.opacity = "1";
  modalC13.style.visibility = "visible";
  modal13.classList.toggle("modal-close13")
});

abrir16.addEventListener("click", function(e){
  e.preventDefault();
  modalC13.style.opacity = "1";
  modalC13.style.visibility = "visible";
  modal13.classList.toggle("modal-close13")
});

abrir17.addEventListener("click", function(e){
  e.preventDefault();
  modalC13.style.opacity = "1";
  modalC13.style.visibility = "visible";
  modal13.classList.toggle("modal-close13")
});

cerrar13.addEventListener("click", function(){
  modal13.classList.toggle("modal-close13")

  setTimeout(function(){
      modalC13.style.opacity = "0";
      modalC13.style.visibility = "hidden";
  },500)
});

window.addEventListener("click", function (e){
  console.log(e.target)
  if (e.target == modalC) {
      modal13.classList.toggle(modal-close);

      setTimeout(function(){
          modalC13.style.opacity = "0";
          modalC13.style.visibility = "hidden";
      },500)   
  }
});