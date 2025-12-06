

const input =
document.getElementById("taskInput");
const list = document.getElementById("tasklist");


window.onload = () =>{
    const saved=
    JSON.parse(localStorage.getItem("tasks")) || [];
    saved.forEach(task => showtTask(task));
};


function addtask(){

    const task = input.value.trim();
    if(!task)return;

    showtask(task);
    
    const saved =
    JSON.parse(localStorage.getItem("tasks")) || [];
    saved.push(task);
    localStorage.setItem("tasks",JSON.stringify(saved));

    input.value="";


}




function showTask(task){
         const li = document.createElement("li");
         li.classname = "item";
         li.innerHTML = ` 
         <span>${task}</span>
         <span class="delete" onclick="removeTask(this, '${task}')">❌</span>`;


     list.appendChild(li);}


    function removeTask(element, tasktext){
        element.parentelement.remove();
    }

  let saved =
  JSON.parse(localstorage.getItem("tasks")) || [];
  saved = saved.filter(t=>t!==tasktext);
  localstorage.setItem("tasks", JSON.stringify(saved));

function clearAll() {
    list.innerHTML = "";
    localstorage.removeItem("tasks");
} 