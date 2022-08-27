let name_color = ["#C355D0", "#6061C9", "#F62076", "#A556C6", "#5948B0", "#00AABF"];
let tables = ["table-1", "table-2", "table-3"];
let doors = ["img-1", "img-2", "img-3"];
let func_open_name = ["open1", "open2", "open3"];

let text = [["Здоровья тебе и всем, кем ты дорожишь",
            "Повышенную регенирацию нервных клеток",
            "Text Text Text Text Text Text Text"],
            ["Ведь здоровье это фундамент счастливой жизни. Поэтому на него нужно обращать особое внимание, особенно, если часто попадаешь в неприятные ситуации)",
            "Грядет последний учебный год, а после него почтупление. Думаю не нужно объяснять, какой это важный этап в жизни)",
            "Text Text Text Text Text Text Text"],
            ["img/sasha-est.png",
            "img/porko-spit.png",
            "Text Text Text Text Text Text Text"]];


let opened = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];

let k = 0;
let page = 0;
let change = true;

function open1(){
    opened[page][0] = 0;
    change = true;
}

function open2(){
    opened[page][1] = 0;
    change = true;
}

function open3(){
    opened[page][2] = 0;
    change = true;
}

function onclick2(){
    page= (page+1) % 3;
    change = true;
}

setInterval(function() {

    if(change === true){
        for(let i = 0; i < 3; i++){

            if(i !== 2){
                document.getElementById(tables[i]).textContent = text[i][page];
            } else{
                document.getElementById("pozel-img").src = text[i][page];
            }


            let pos = document.getElementById(tables[i]).getBoundingClientRect();

            console.log(pos);
            console.log();

            let pageYOffset = window.pageYOffset;
            let width = document.getElementById(tables[i]).clientWidth;
            let height = document.getElementById(tables[i]).clientHeight;

            document.getElementById(doors[i]).style.left = pos.left + "px";
            document.getElementById(doors[i]).style.top = pageYOffset + pos.top + "px";

            document.getElementById(doors[i]).style.width = width + "px";
            document.getElementById(doors[i]).style.height = height + "px";

            document.getElementById(doors[i]).style.opacity = opened[page][i] + "";

            switch (i){
                case 0:
                    document.getElementById(doors[i]).addEventListener("click", open1);
                    break;
                case 1:
                    document.getElementById(doors[i]).addEventListener("click", open2);
                    break;
                case 2:
                    document.getElementById(doors[i]).addEventListener("click", open3);
            }
        }
        change = false;
    }


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
