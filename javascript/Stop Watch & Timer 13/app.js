var minutes = 0;
var seconds = 0;
var miliseconds = 0;
var getmin = document.getElementById('min');
var getsec = document.getElementById('sec');
var getmili = document.getElementById('msec');
var interval;

function start(){
    interval = setInterval(function(){
        miliseconds++
        getmili.innerHTML = miliseconds
        if (miliseconds >= 100){
            seconds++
            getsec.innerHTML = seconds
            miliseconds = 0
        }
        else if (seconds >=60){
            minutes++
            getmin.innerHTML = minutes
            seconds = 0

        }
    },10)
    document.getElementById('sss').disabled=true
}

function stop(){
    clearInterval(interval)
    document.getElementById('sss').disabled=false
}

function reset(){
    minutes = 0
    seconds = 0
    miliseconds = 0
    getmili.innerHTML = miliseconds
    getsec.innerHTML = seconds
    getmin.innerHTML = minutes
    location.reload()

}




// Premitive & Non Premitive (we will never change value of premitive values)

/*  var str = "test";
str[0] = "b";
// console.log(str); */  