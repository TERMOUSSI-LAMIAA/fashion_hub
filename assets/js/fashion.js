// document.addEventListener('DOMContentLoaded', function(){
//     const fleche =document.querySelectorAll('.visible-content img');
//     console.log(fleche);
//     fleche.forEach(element => {
//         element.addEventListener('click',function(){
//             if (this.src.includes('circle-add')){
//                 this.src='assets/images/circle-minus-svgrepo-com.svg';
//             }
//             else if (this.src.includes('circle-minus')){
//                 this.src='assets/images/circle-add-svgrepo-com.svg';
//             }
//         })
//     });
// })
// Sélectionner tous les boutons de bascule et sections FAQ

const toggleButtons = document.querySelectorAll(".toggleButton");
const answers = document.querySelectorAll(".answers");

// Ajouter des gestionnaires d'événement de clic à chaque bouton
toggleButtons.forEach((button, index) => {
  button.addEventListener("click", function() {
    // Basculez la classe "hidden" de la section FAQ associée pour l'afficher ou la masquer
    answers[index].classList.toggle("answers");
  });
});
//burger menu
const menuToggle = document.getElementById('menu-toggle');
const menu_desktop = document.querySelector('.menu-desktop');

menuToggle.addEventListener('click', () => {
    menu_desktop.classList.toggle('active');
});