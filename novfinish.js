let newplay = document.getElementById('newplay')
let startd = document.getElementById('startdisplay')
let teams = document.getElementById('teams')
let mainteams = document.getElementById('main')
let next = document.getElementById('next')
let div_time = document.getElementById('time')
let time = 10;
let words = 0;
let timer = document.getElementById('timer');
let tim_time=10;
let words_for_user=["подпись","вырез","гранит","кругозор","блузка","фараон","клапан","ёж","вымя","турист","колготки","кран","питание","свёрток","дочерь","шампунь","броня","зайчатина","гимназист","стелька","подделка","виза","затычка","решение","алкоголь","шуруп","воровка","колодец","кабан","команда","ловушка","буква","опера","сектор","математика","пароварка","невезение","глубина","штука","справочник","вождь","хобот","ширинка","усталость","служитель","жар","спальная","видео"]
function startgame(){
    startd.style.display = "none";
    teams.style.display = "block";

}
count_team=0;
text_box=document.getElementsByClassName("text");
function newteam(){
    if (count_team<=2){
        text_box[count_team].innerText = "Команда  " + (count_team+1);
        count_team++;}
    else{
        alert("Больше нельзя")
    }

}
function ttime(){
    teams.style.display = "none";
    div_time.style.display = "block";
}
function moretime(){
    if (time<=50){
        time = time + 10;
        text_time.innerText=time;}
    else{
        time = 10;
        text_time.innerText=time;
    }
    tim_time=time;
    console.log(tim_time)
}
function play(){
    div_time.style.display = "none";
    play_game.style.display = "block";
    setInterval(function(){
        tim_time--;
        if (tim_time==0){
            tim_time=time;
            words = 0;
            text_words.innerText=words;
            setTimeout(function(){ word.innerText="hjtgg"},2000)
            setTimeout(new_word,2000)
        }
        timer.innerText=tim_time;
    },1000)

}
let i=0;
new_word()
function accept(){
    words = words + 1;
    text_words.innerText=words;
    i++;
    new_word()
}

function new_word(){
    word.innerText=words_for_user[i];
}
function redjected(){
    i++;
    new_word()
}

