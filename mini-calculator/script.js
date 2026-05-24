const btn=document.querySelector("#btn");
function calculate()
{
    const num1=Number(document.querySelector("#num1").value);
    const num2=Number(document.querySelector("#num2").value);
    const op=document.querySelector("#op").value;
    let result;
    if(op==="+")
    {
        result=num1+num2;
    }
    else if(op==="-")
    {
        result=num1-num2;
    }
    else if(op==="x")
    {
        result=num1*num2;
    }
    else
    {
        if(num2===0)
        {
            result="cannot divide by zero";
        }
        else
        {
            result=num1/num2;
        }
    }
    document.querySelector("#result")
    .textContent=`Result:${result}`;
}
btn.addEventListener("click",calculate);
