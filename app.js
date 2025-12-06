

const input =
document.getElementById("taskInput");
const list = document.getElementById("taskList");


window.onload = () =>{
    const saved=
    JSON.parse(localStorage.getItem("tasks")) || [];
    saved.forEach(task => showTask(task));
};


function addtask(){

    const task = input.value.trim();
    if(!task)return;

    showTask(task);
    
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
        element.parentElement.remove();
    }

  let saved =
  JSON.parse(localStorage.getItem("tasks")) || [];
  saved = saved.filter(t=>t!==tasktext);
  localStorage.setItem("tasks", JSON.stringify(saved));

function clearAll() {
    list.innerHTML = "";
    localStorage.removeItem("tasks");
} 
