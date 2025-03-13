const display=document.getElementById("display");
const clear=document.getElementById("clear");

function appendtodisplay(input) {
    display.value+=input;
}
clear.addEventListener("click",() =>{
    display.value="";
});
function calcualte(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
}