const list=document.querySelector("#list");
const add=document.querySelector("#add");
function addfunc()
{
    const task=prompt("new task:");
    if(!task) return;
    const li=document.createElement("li");
    const check=document.createElement("input");
    check.type="checkbox";
    const text=document.createElement("span");
    text.className="task";
    text.textContent=task;
    check.addEventListener("change",function(){
        text.classList.toggle("completed");
    });
    li.append(check,text);
    list.append(li);
}
add.addEventListener("click",()=>addfunc());