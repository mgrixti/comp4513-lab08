/**
 * Created by Matthew on 2/1/2016.
 */

window.onload = function(){
    var thumbs = document.querySelectorAll(".thumb");

    for (i = 0; i < thumbs.length; i++){
        thumbs[i].addEventListener("mouseover", function(e){
            var node = document.createElement("span");
            node.innerHTML=('<img class="thumb" src="'+ e.target.src +'"  alt="'+ e.target.alt +'" />').replace('/thumbs/','/small/');


            e.target.parentNode.appendChild(node);

        });
        thumbs[i].addEventListener("mouseout", function(e){

            var node = e.target.nextSibling.style.display = 'none';

        });
    }

};


