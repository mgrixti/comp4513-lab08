
/* add your code for exercise 1 here */

window.onload = function(){

     var divs = document.querySelectorAll(".fa-close");

    for (i=0; i<divs.length; i++){
        divs[i].addEventListener("click", function(e){
            e.target.parentNode.style.transition = "opacity 1s";
            e.target.parentNode.style.opacity = 0;
        });
    }
};