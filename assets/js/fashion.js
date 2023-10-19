document.addEventListener('DOMContentLoaded', function(){
    const fleche =document.querySelectorAll('.visible-content img');
    console.log(fleche);
    fleche.forEach(element => {
        element.addEventListener('click',function(){
            if (this.src.includes('circle-add')){
                this.src='assets/images/circle-minus-svgrepo-com.svg';
            }
            else if (this.src.includes('circle-minus')){
                this.src='assets/images/circle-add-svgrepo-com.svg';
            }
        })
    });
})
