let names = ["img/tort2.png", "img/tort3.png"];
let k1 = 0;

let animtort = setInterval(function() {
    document.getElementById("tortik2").src = names[k1];
    k1 =  (k1 + 1) % 2;
}, 300);

