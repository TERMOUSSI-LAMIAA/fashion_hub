document.addEventListener('DOMContentLoaded', function(){
  //changer le plus/moins img
  const fleche = document.querySelectorAll('.toggleButton');
  console.log(fleche);
  fleche.forEach(button => {
      button.addEventListener('click', function () {
          const image = this.querySelector('img');
          if (image.src.includes('circle-add')) {
              image.src = 'assets/images/circle-minus-svgrepo-com.svg';
          } else if (image.src.includes('circle-minus')) {
              image.src = 'assets/images/circle-add-svgrepo-com.svg';
          }
      })
  });
    //burger menu
    const menuToggle = document.querySelectorAll('.menu-toggle');
    const menuDesktop = document.querySelectorAll('.menu-desktop');

    menuToggle.forEach((toggle, index) => {
      toggle.addEventListener('click', () => {
          menuDesktop[index].classList.toggle('active');
      });
  });
//show /hide faq
    const toggleButtons = document.querySelectorAll(".toggleButton");
    const answer = document.querySelectorAll(".answer");
    toggleButtons.forEach((button, index) => {
      button.addEventListener("click", function() {
        // Basculez la classe "hidden" de la section FAQ associée pour l'afficher ou la masquer
        answer[index].classList.toggle("hidden");
      });
    });



})




