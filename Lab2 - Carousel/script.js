/**
 * Created by Daniel on 1/21/2016.
 */
var position = 0;
var scrollImage = document.getElementById('over');
var next = document.getElementById('next');
var prev = document.getElementById('prev');
var underButtons = document.getElementsByClassName('underButtons');
var isRolling = false;
var totalImages = 6;
var actImage = 0;
var reset = true;

window.onload=function(){
    next.addEventListener('click', function(){if(!isRolling){scroll(1, 2.5); reset = true;}});
    prev.addEventListener('click', function(){if(!isRolling){scroll(1, -2.5); reset = true;}});
    underButtons[0].addEventListener('click', function(){if(!isRolling){warpImage(0); reset = true;}});
    underButtons[1].addEventListener('click', function(){if(!isRolling){warpImage(1); reset = true;}});
    underButtons[2].addEventListener('click', function(){if(!isRolling){warpImage(2); reset = true;}});
    underButtons[3].addEventListener('click', function(){if(!isRolling){warpImage(3); reset = true;}});
    underButtons[4].addEventListener('click', function(){if(!isRolling){warpImage(4); reset = true;}});
    underButtons[5].addEventListener('click', function(){if(!isRolling){warpImage(5); reset = true;}});

    underButtonsColor(actImage);
}

function carrousel(){
    if(!reset){
        scroll(1,2.5);
    }
    reset = false;
    setTimeout(carrousel, 3000);
}

function scroll(nbImages, vitesse){
    var nextImage;
    isRolling = true;
    if(vitesse > 0){
        nextImage = (actImage + nbImages)%totalImages;

    } else {
        nextImage = (actImage - nbImages)%totalImages;
        if(nextImage < 0){
            nextImage = totalImages - 1;
        }
    }
    if(position != nextImage*500){
        position += vitesse;
        if(position >= totalImages*500){
            position = 0;
        } else if(position < 0){
            position = totalImages * 500;
        }
        scrollImage.style.left =  "-" + position + "px";
        setTimeout(function(){scroll(nbImages, vitesse)}, 1);
    } else {
        actImage = nextImage;
        underButtonsColor(actImage);
        isRolling = false;
    }
}

function warpImage(noImage){
    var gap = noImage - actImage;
    var v = 10;
    if(gap<0){
        gap = -(totalImages + gap);
        v *= -1;
    }
    scroll(gap, v);
}

function underButtonsColor(noImage){
    for (var i = 0; i < underButtons.length; i++){
        underButtons[i].style.color = "#c2d3c7";
        underButtons[noImage].style.color = "#d3664b";
    }
}

carrousel();
