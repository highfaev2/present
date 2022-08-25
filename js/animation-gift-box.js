let start = Date.now();

let timer = setInterval(function() {
    // сколько времени прошло с начала анимации?
    let timePassed = Date.now() - start;

    if (timePassed >= 9000) {
        clearInterval(timer); // закончить анимацию через 2 секунды
        return;
    }

    // отрисовать анимацию на момент timePassed, прошедший с начала анимации
    if(timePassed > 2500){
        //alert(document.getElementById("gift").style.opacity);
        draw(timePassed);
    }
}, 5);

function draw(timePassed) {

   document.getElementById("gift").style.opacity = (timePassed - 2500) / 6500;
   document.getElementById("light").style.opacity = (timePassed - 2500) / 6500;
}

document.getElementById("gift").onclick = function (){
    alert("pressed");
}

