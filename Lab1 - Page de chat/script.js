/**
 * Created by Daniel on 2016-01-15.
 */

var retracted = false;
var buttons = document.getElementsByClassName("hidable");
var catImages = document.getElementsByClassName("catImage");
var posts = document.getElementsByClassName("post");

window.onload=function(){
    var element = document.getElementById('burger');
    if(element){
        element.addEventListener('click', changeSize);
    }
    document.addEventListener('scroll', changeSizeOnScroll);
    for(i=0; i<catImages.length; i++){
        catImages[i].addEventListener('mouseenter', imageFadeOut);
        catImages[i].addEventListener('mouseleave', imageFadeIn);
    }
}

function changeSize(){

    if(retracted){
        $('#sidebar').animate({width: '170px'}, 350);
        $('#titre').fadeIn();
        for(i=buttons.length-1; i>=0; i--){
            $(buttons[i]).animate({opacity: '1'}, i*150);
        }
        for(i=0; i<posts.length; i++){
            $(posts[i]).animate({marginLeft: '175px'}, "fast");
        }
        $('#burger').hide();
        $('#burger').fadeIn();
        retracted = false;
    }
    else if(!retracted) {
        $('#sidebar').animate({width: '40px'}, 350);
        $('#titre').hide();
        for(i=0; i<buttons.length; i++){
            $(buttons[i]).animate({opacity: '0'}, "fast");
        }
        for(i=0; i<posts.length; i++){
            $(posts[i]).animate({marginLeft: '45px', marginRight: '5px'}, "slow");
        }
        $('#burger').hide();
        $('#burger').fadeIn();
        retracted = true;
    }
}

function changeSizeOnScroll(){
    if(!retracted) {
        $('#sidebar').animate({width: '40px'}, 350);
        $('#titre').hide();
        for(i=0; i<buttons.length; i++){
            $(buttons[i]).animate({opacity: '0'}, "fast");
        }
        for(i=0; i<posts.length; i++){
            $(posts[i]).animate({marginLeft: '45px', marginRight: '5px'}, "slow");
        }
        $('#burger').hide();
        $('#burger').fadeIn();
        retracted = true;
    }
}

function imageFadeOut(){
    $(this).animate({opacity: '0.9'}, "fast");
}

function imageFadeIn(){
    $(this).animate({opacity: '1'}, "fast");
}