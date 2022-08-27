let start = Date.now();
let main = document.getElementById("main");
let preloader = document.getElementById("preloader");
sessionStorage.setItem("phase", "1");




let timer1 = setInterval(function() {

    let state = sessionStorage.getItem("phase");
    if(state >= "3"){
        clearInterval(timer1);
        return;
    }

    document.getElementById("music1").play();
    let timePassed = Date.now() - start;
    let image_width = document.getElementById("gift").width;
    let image_height = document.getElementById("gift").height;



    //данимаческое расположение подарка
    document.getElementById("gift").style.right = (document.documentElement.offsetWidth - image_width) / 2 + "px";
    document.getElementById("gift").style.top = (document.documentElement.offsetHeight - image_height) / 2 + "px";

    //данимаческое расположение звезды


    //удаление прелоадера
    if((timePassed >= 10000 && timePassed <= 10500) && state === "1"){
        main.removeChild(preloader);
        sessionStorage.setItem("phase", "2");
    }

    //анимация с 3 сек до 9500 сек
    if(timePassed >= 9000 && (timePassed <= 15500 || document.getElementById("gift").style.opacity !== "1")){
        //alert(document.getElementById("gift").style.opacity);
        draw(timePassed);
    }
}, 1);

function draw(timePassed) {
   document.getElementById("gift").style.opacity = (timePassed - 9000) / 15500;
}



