let name_color = ["#C355D0", "#6061C9", "#F62076", "#A556C6", "#5948B0", "#00AABF"];
let k = 0;


setInterval(function() {

    let state = sessionStorage.getItem("phase");
    if(state === "3"){
        document.getElementById("music2").play();
        sessionStorage.setItem("phase", "4");
    }

    for(let i = 0; i < 14; i++){
        document.getElementById("text-" + (i + 1)).style.color = name_color[(k + i) % 6];
    }
    k = (k + 1) % 6;

}, 300);
