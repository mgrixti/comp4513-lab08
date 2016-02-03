
/* add your code for exercise 2 here */
window.addEventListener("load", function(){
    var thumbs = document.querySelector("div#thumbnails");

    thumbs.addEventListener("click", function(e){
            var feature = document.querySelector("#featured");
            feature.querySelector('img').src = e.target.src.replace("/small/", "/medium/"); // '/' used in the case of image name containing 'small'
            feature.title = e.target.title;
            feature.querySelector('figcaption').innerHTML = feature.title

        });

    var feature = document.querySelector("#featured");

    feature.addEventListener("mouseover", function(){
        var caption = document.querySelector("#featured > figcaption");
        caption.style.transition = "opacity 1s";
        caption.style.opacity ='0.7';
    });
    feature.addEventListener("mouseout", function(){
        var caption = document.querySelector("#featured > figcaption");
        caption.style.opacity ='0';
    });

});