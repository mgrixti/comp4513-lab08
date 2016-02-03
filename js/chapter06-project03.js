/**
 * Created by Matthew on 2/1/2016.
 */

window.addEventListener("load", function(){
    var thumbs = document.querySelectorAll(".thumb");

    for (i = 0; i < thumbs.length; i++){
        thumbs[i].addEventListener("mouseover", function(e){
            var node = document.createElement("div");
            var img = document.createElement('img');

            img.setAttribute('src', e.target.src.replace('/thumbs/','/small/'));

            node.setAttribute('class', 'floatingImg');
            //Node css style
            node.style.position = 'absolute';
            node.style.top = e.clientY + 'px';
            node.style.left = (e.clientX + 25)+ 'px';
            node.style.border = '5px solid black';
            node.style.backgroundColor = "white";
            node.style.padding = '7px';

            node.appendChild(img);
            e.target.parentNode.appendChild(node);

        });
        thumbs[i].addEventListener("mouseout", function(){

            var node = document.querySelector(".floatingImg");
            var parent = node.parentNode;
            parent.removeChild(node);

        });
    }

});


