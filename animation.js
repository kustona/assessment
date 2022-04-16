let header = document.getElementById('header');
let degree = 0;
function rotateHeader(){
    degree += 6;
    degree %= 360;
    if(degree < 90 || 270 < degree){
        header.setAttribute('class', 'face');
        header.style.opacity = 1;
    }else{
        header.setAttribute('class', 'back');
        header.style.opacity = 0.4;
    }
    header.style.transform = 'rotateX(' + degree + 'deg)';
    
}
setInterval(rotateHeader, 20);