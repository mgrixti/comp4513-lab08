
/* add your code for exercise 1 here */

window.addEventListener("load", function(){

     var closeBtns = document.querySelectorAll(".fa-close");

    for (i=0; i<closeBtns.length; i++){
        closeBtns[i].addEventListener("click", function(e){
            e.target.parentNode.style.transition = "opacity 1s";
            e.target.parentNode.style.opacity = 0;
        });
    }
});