
/* add your code for exercise 1 here */

window.onload = function(){

     divs = document.querySelectorAll(".alert");

    for (i=0; i<divs.length; i++){
        divs[i].addEventListener("click", function(e){
            console.log(e.target);
            e.target.parentNode.style.transition = "opacity 1s";
            e.target.parentNode.style.opacity = 0;
        });
    }
};