const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

const tasks = [];

let username = "Hamza";

let taskCount = 0;
let isTaskListActive = true;

const afficher_tasks = () => {
  taskList.innerHTML = "";

  //si j'ai au moins une tache dans mon tableau
  if (tasks.length > 0) {
    //je parcours l'ensemble des taches de mon tableau
    tasks.forEach((task, index) => {
      //pour chaque tache de mon tableau, je créer un element
      const taskDiv = document.createElement("div");
      taskDiv.className = "task-item";
      taskDiv.textContent = task;

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "task-delete";
      deleteBtn.textContent = "Supprimer";

      deleteBtn.addEventListener("click", () => supprimer_task(index));

      taskDiv.appendChild(deleteBtn);

      //une fois l'élément remplie avec les infos de la taches, je l'ajoute au container de taches.
      taskList.appendChild(taskDiv);
    });
  } else {
    //sinon j'indque qu'il n'y a pas de tache
    taskList.innerHTML = "Aucune tache pour le moment";
  }
};

const supprimer_task = (index) => {
  if (typeof index !== "number" || index < 0 || index >= tasks.length) {
    throw new Error("Index invalide");
  }
  tasks.splice(index, 1);
  afficher_tasks();
};

function ajouter_task(event) {
  event.preventDefault();

  const nouvelleTask = taskInput.value.trim();

  if (!nouvelleTask) {
    throw new Error("La tache ne peut pas etre vide");
  }

  tasks.push(nouvelleTask);

  afficher_tasks();

  taskInput.value = "";
}

try {
  taskForm.addEventListener("submit", ajouter_task);
  afficher_tasks();
} catch (error) {
  console.error(error);
}
