let todo=[];

function addTask(task)
{
    todo.push(task);
    console.log("task added");
}
function showTask()
{
    for(let i=0;i<todo.length;i++)
    {
    console.log(`${i+1}. ${todo[i]}`);
    }

}
function deleteTask(task)
{
    if(todo.includes(task))
    {
        let i=todo.indexOf(task);
        todo.splice(i,1);
    }
    console.log("task deleted");
}
addTask("Cricket");
addTask("Gym");
addTask("Football");
deleteTask("Football");
showTask();