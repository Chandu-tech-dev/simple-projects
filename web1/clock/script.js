function clock(){
    const now=new Date();
    let hour=now.getHours();
    const mariden=hour>=12 ? "PM" : "AM";
    hour=hour%12||12;
    hour=hour.toString().padStart(2, '0');
    const minute=now.getMinutes().toString().padStart(2, '0');;
    const second=now.getSeconds().toString().padStart(2, '0');;
    const stringtime=`${hour}:${minute}:${second} ${mariden}`;
    document.getElementById("clock").textContent = stringtime;
}
clock();
setInterval(clock,1000);