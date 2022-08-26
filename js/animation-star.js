let anim_end = false;

function onclick1(){
    let start = Date.now(); // запомнить время начала

let timer = setInterval(function() {

    let state = sessionStorage.getItem("phase");
    if(state === "3"){
        clearInterval(timer);
        return;
    }

    let star_width = document.getElementById("star").width;
    let star_height = document.getElementById("star").height;

    let timePassed = Date.now() - start;

    //alert(star_width + " " + star_height);
    document.getElementById("star").style.right = (document.documentElement.clientWidth - star_width) / 2 + "px";
    document.getElementById("star").style.top = (document.documentElement.clientHeight - star_height) / 2 + "px";

    if (timePassed <= 2100) {
        draw(timePassed);
    }

    if(timePassed >= 4000) {
        document.getElementById("main").removeChild(document.getElementById("gift-box"));
        document.getElementById("main").style.overflow = "scroll";
        sessionStorage.setItem("phase", "3");
    }

    }, 5);

    function draw(timePassed) {
        document.getElementById("star").style.opacity = timePassed / 2000;
        document.getElementById("star").style.width = timePassed * 5 + "px";
    }

}
