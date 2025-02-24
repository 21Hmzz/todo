const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

const tasks = ["tache par defaut"];

let username = "Hamza";

let taskCount = 0;
let isTaskListActive = true;

taskList.innerHTML = "";

//si j'ai au moins une tache dans mon tableau
if (tasks.length > 0) {
  //je parcours l'ensemble des taches de mon tableau
  tasks.forEach((task, index) => {
    //pour chaque tache de mon tableau, je créer un element
    const taskDiv = document.createElement("div");
    taskDiv.className = "task-item";
    taskDiv.textContent = task;

    //une fois l'élément remplie avec les infos de la taches, je l'ajoute au container de taches.
    taskList.appendChild(taskDiv);
  });
} else {
  //sinon j'indque qu'il n'y a pas de tache
  taskList.innerHTML = "Aucune tache pour le moment";
}

console.log(taskForm);
console.log(taskInput);
console.log(taskList);
