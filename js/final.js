let main1 = document.getElementById("main");
let congrats = document.getElementById("congrats");

document.getElementById("tortik").addEventListener("click", cutscene);

function cutscene(){
    main1.removeChild(congrats);
    document.getElementById("final-cutscene").style.opacity = "1";
    document.getElementById("player1").play();
    setTimeout(giftapear(), 4000);
    function giftapear(){
        let start = Date.now(); // запомнить время начала

        let timer1 = setInterval(function() {
            // сколько времени прошло с начала анимации?
            let timePassed = Date.now() - start;

            if (timePassed >= 8000) {
                clearInterval(timer1); // закончить анимацию через 2 секунды
                return;
            }

            // отрисовать анимацию на момент timePassed, прошедший с начала анимации
            draw1(timePassed);
        }, 20);

        let timer2 = setInterval(function() {
            // сколько времени прошло с начала анимации?
            let timePassed = Date.now() - start;

            if (timePassed >= 38000) {
                clearInterval(timer2); // закончить анимацию через 2 секунды
                document.getElementById("tortik2").addEventListener("click", cutscene2);
                return;
            }

            // отрисовать анимацию на момент timePassed, прошедший с начала анимации
            if (timePassed >= 33000) {
                draw2(timePassed);
            }

        }, 20);

    }
}

function cutscene2(){
    document.getElementById("player2").play();
    document.getElementById("player3").play();
    document.getElementById("final-cutscene").style.background = "linear-gradient(90deg, #d600c4, #a205f6, #7a0cef)";
    clearInterval(animtort);
    document.getElementById("tortik2").src = "img/tort4.png";

    let start = Date.now(); // запомнить время начала

    let timer4 = setInterval(function() {
        // сколько времени прошло с начала анимации?
        let timePassed = Date.now() - start;

        if (timePassed >= 8000) {
            clearInterval(timer4); // закончить анимацию через 2 секунды
            return;
        }

        // отрисовать анимацию на момент timePassed, прошедший с начала анимации
        draw4(timePassed);
    }, 20);
}

function draw1(timePassed) {
    document.getElementById("tortik2").style.opacity = timePassed / 8000 + "";
}

function draw2(timePassed) {
    document.getElementById("main-text-4").style.opacity = (timePassed - 33000) / 5000 + "";
}

function draw4(timePassed) {
    document.getElementById("final-words").style.opacity = timePassed/ 8000 + "";
    //document.getElementById("myfoto").style.opacity = timePassed/ 8000 + "";
    document.getElementById("main-text-5").style.opacity = timePassed/ 8000 + "";
    document.getElementById("tortik2").style.opacity = 1 - timePassed / 8000 + "";
    document.getElementById("main-text-4").style.opacity = 1 - timePassed/ 8000 + "";
    document.getElementById("final-cutscene").style.opacity = 1 - timePassed/ 8000 + "";
}