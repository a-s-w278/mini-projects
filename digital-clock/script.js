let clockjs=document.querySelector(".time");
let datejs=document.querySelector(".date");
function updateclock()
{
    let time=new Date();
    let hour=time.getHours()
    let min=String(time.getMinutes()).padStart(2,"0");
    let sec=String(time.getSeconds()).padStart(2,"0");
    let date=String(time.getDate()).padStart(2,"0");
    let month=String(time.getMonth()+1).padStart(2,"0");
    let year=String(time.getFullYear());
    let displayhour;
    let meridiem;
    if(hour>=12)
    {
        displayhour=hour%12;
        meridiem="pm";
    }
    else
    {
        displayhour=String(hour).padStart(2,"0");
        meridiem="am";
    }
    if(displayhour===0)
    {
        displayhour=12;
    }
    clockjs.innerHTML=`${displayhour}:${min}:${sec}<span class="meridiem">${meridiem}</span>`;
    datejs.textContent=`${date}/${month}/${year}`;
    if(hour>=5 && hour<12)
    {
        document.body.style.background="#d9eaf3";
    }
    else if(hour>=12 && hour<19)
    {
        document.body.style.background="#e1bfb5";
    }
    else
    {
        document.body.style.background="gray";
    }
}
setInterval(updateclock,1000);
updateclock();