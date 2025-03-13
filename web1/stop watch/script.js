const display=document.getElementById("display");
let timer=null;
let ellipsedtime=0;
let starttime=0;
let isrunning=false;

function start() {
if(!isrunning){
    starttime=Date.now()-ellipsedtime;
    timer=setInterval(update,1);
    isrunning=true;


}

}
function stop() {

    if(isrunning){
        clearInterval(timer);
        ellipsedtime=Date.now()-starttime;
        isrunning=false;
    }
}
function reset() {
  clearInterval(timer);
  starttime=0;
  ellipsedtime=0;
  timer=null;
  display.textContent="00:00:00:00";

    
}
function update() {

    const currenttime=Date.now();
    ellipsedtime=currenttime-starttime;
    let hours=Math.floor(ellipsedtime / (1000 * 60 * 60) );
    let  minutes=Math.floor(ellipsedtime/(1000 * 60) % 60);
    let seconds=Math.floor(ellipsedtime/ 1000 % 60);
    let milliseconds=Math.floor(ellipsedtime % 1000 /10);
    hours=String(hours).padStart(2,"0");
    minutes=String(minutes).padStart(2,"0");

    seconds=String(seconds).padStart(2,"0");

    milliseconds=String(milliseconds).padStart(2,"0");

    
    display.textContent=`${hours}:${minutes}:${seconds}:${milliseconds}`;
    
}