const displayjs=document.querySelector(".display");
const backspacejs=document.querySelector(".backspace");
const buttonsjs=document.querySelectorAll(".button-container button");
function calculate(button)
{
    const value=button.textContent;
    if(value==="=")
    {
        try
        {
            let out=eval(displayjs.value);
            if(isNaN(out) || !isFinite(out))
            {
                displayjs.value="Error";
            }
            else
            {
                displayjs.value=out;
            }
        }
        catch
        {
            displayjs.value="Error";
        }

    }
    else if(value==="C")
    {
        displayjs.value="";
    }
    else
    {
        displayjs.value+=value;
    }
}
buttonsjs.forEach(function(button)
{
    button.addEventListener("click",function(){calculate(button);});
});
function back()
{
    let updated=displayjs.value.slice(0,-1);
    displayjs.value=updated;
}
backspacejs.addEventListener("click",back);