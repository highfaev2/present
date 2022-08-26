let name_color = ["#DC5BC1", "#FF8B58", "#F47335", "#D87E5D", "#CE666E", "#FC5588"];
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

}, 700);
