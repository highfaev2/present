let name_color = ["#fff200", "#84ff00", "#00ff8c", "#00f7ff", "#00A5FF", "#DE527E"];
let tables = ["table-1", "table-2", "table-3"];
let doors = ["img-1", "img-2", "img-3"];
let func_open_name = ["open1", "open2", "open3"];

let text = [["Здоровья тебе и всем, кем ты дорожишь",
            "Повышенную регенирацию нервных клеток",
            "Что бы обстоятельства всегда складывались в твою пользу",
            "Уверенности в своем будущем",
            "Оставаться собой в любой ситуации"],
            ["Ведь здоровье это фундамент счастливой жизни. Поэтому на него нужно обращать особое внимание, особенно, если часто попадаешь в неприятные ситуации)",
            "Грядет последний учебный год, а после него почтупление. Думаю не нужно объяснять, какой это важный этап в жизни)",
            "Я не очень верю в термин удачи, так что написал так. Но и отричать тот факт, что многое в нашей жизни мы не можем еонтролировать, я не буду.",
            "Ну а как бех этого можно спокойно спать? (Лекарства не в счет)",
            "Оставаться собой и не менять принципы под действием внешнего мира бывает очень сложно. Так что желаю сил сохранить своб уникальность)"],
            ["img/12-watch.png",
            "img/porko-spit.png",
            "img/sasha-est.png",
            "img/eren.jpg",
            "img/pochot.png"]];


let opened = [[1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1]];

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
    page= (page + 1) % 5;
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


    for(let i = 0; i < 3; i++) {
        let pos = document.getElementById(tables[i]).getBoundingClientRect();
        let pageYOffset = window.pageYOffset;
        let width = document.getElementById(tables[i]).clientWidth;
        let height = document.getElementById(tables[i]).clientHeight;

        document.getElementById(doors[i]).style.left = pos.left + "px";
        document.getElementById(doors[i]).style.top = pageYOffset + pos.top + "px";

        document.getElementById(doors[i]).style.width = width + "px";
        document.getElementById(doors[i]).style.height = height + "px";
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
