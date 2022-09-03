const name = document.getElementById("name");  
const desc = document.getElementById("desc"); 
const taskcontainer = document.getElementById("task-container");
function addtask(){
    let taskname=name.value;
    if(taskname==""|| taskname == null) return;
    let taskdesc=desc.value;
    let task=`
    <div class="task">
        <div class="task-detail">
            <div class="task-number">${taskname}</div>
            <div class="task-description">${taskdesc}</div>
        </div>
        <div class="task-action">
            <div class="complete-btn center" onclick="completetask(this)">Complete</div>
            <div class="delete-btn center" onclick="deletetask(this)">Delete</div>
        </div>
    </div>
    `
    taskcontainer.innerHTML+=task;
}
function deletetask(e) {
    e.parentNode.parentNode.remove();
}
function completetask(e){
    let task=e.parentNode.parentNode.childNodes[1].childNodes[1];
    let taskd=e.parentNode.parentNode.childNodes[1].childNodes[3];
    task.style.textDecoration = "line-through";
    task.style.color = "#252525"
    taskd.style.textDecoration = "line-through";
    taskd.style.color = "#252525"
    e.remove();
}
