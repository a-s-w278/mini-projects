let clock=document.querySelector(".time");

function updateclock()
{
    let time=new Date();
    let hour=String(time.getHours()).padStart(2,"0");
    let min=String(time.getMinutes()).padStart(2,"0");
    let sec=String(time.getSeconds()).padStart(2,"0");
    clock.textContent=`${hour}:${min}:${sec}`;
}
setInterval(updateclock,1000);
updateclock();