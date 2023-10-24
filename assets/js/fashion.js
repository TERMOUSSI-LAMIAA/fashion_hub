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
//validation formulaire
document.getElementById('my-form').addEventListener('submit', function(event) {
  var prenom = document.getElementById('prenom').value;
  var nom = document.getElementById('nom').value;
  var email = document.getElementById('email').value;
  var telephone = document.getElementById('telephone').value;
  var motdepasse = document.getElementById('motdepasse').value;
  
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var telPattern = /^\d{10}$/;
  var passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  
  if (prenom.trim() === '' || nom.trim() === '' || email.trim() === '' || telephone.trim() === '' || motdepasse.trim() === '') {
    alert('Tous les champs sont obligatoires. Veuillez remplir tous les champs.');
    event.preventDefault();
  } else {
    if (!emailPattern.test(email)) {
        alert('Adresse électronique invalide');
        event.preventDefault();
    }
    
    if (!telPattern.test(telephone)) {
        alert('Téléphone portable invalide');
        event.preventDefault();
    }
    
    if (!passPattern.test(motdepasse)) {
        alert('Mot de passe invalide. Le mot de passe doit contenir au moins 8 caractères, dont au moins une lettre majuscule, une lettre minuscule et un chiffre.');
        event.preventDefault();
    }
}
});

})




