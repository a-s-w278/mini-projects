let chancejs=document.querySelector("#chance");
let chance=Number(chancejs.textContent);
let scorejs=document.querySelector("#score");
let score=Number(scorejs.textContent);
let responsejs=document.querySelector("#response");
function guessfunc(button)
{
    let secret=Math.floor(Math.random()*9)+1;
    let guess=Number(button.textContent);
    if(chance===0 || score===3)
    {
        return;
    }
    else if(guess===secret)
    {
        chance=chance+2;
        score++;
        chancejs.innerHTML=chance
        scorejs.innerHTML=score
        if(score===3)
        {
            responsejs.innerHTML="YOU WON!";
        }
        else if(chance===0)
        {
            responsejs.innerHTML="YOU LOSE!";
        }
        else
        {
            responsejs.innerHTML="CORRECT!"
        }
    }
    else
    {
        chance--;
        chancejs.innerHTML=chance;
        if(chance===0)
        {
            responsejs.innerHTML="YOU LOSE!";
        }
        else
        {
            responsejs.innerHTML="WRONG!"
        }
    }
}
document.querySelectorAll("button")
.forEach(function(button){
button.addEventListener("click",function(){guessfunc(button)});});
