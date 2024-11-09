const taskTodoList = document.getElementById("taskTodoList");
const taskInprogressList = document.getElementById("taskInprogressList");
const taskDoneList = document.getElementById("taskDoneList");
const taskBlockedList = document.getElementById("taskBlockedList");
const btnAdd = document.getElementById("btnAdd");
const garchig = document.getElementById("garchig");
const delgerengui = document.getElementById("delgerengui");
const taskStatus = document.getElementById("status");
const btnTrash = document.getElementById("btnTrash");
const countTodo = document.getElementById("countTodo");
const countInprogress = document.getElementById("countInprogress");
const countDone = document.getElementById("countDone");
const countBlocked = document.getElementById("countBlocked");

let isEdited = false;
let editedIndex = -1;
const task = [];

function zurah() {
  taskTodoList.innerHTML = "";
  taskInprogressList.innerHTML = "";
  taskDoneList.innerHTML = "";
  taskBlockedList.innerHTML = "";
  let todoCount = 0;
  let inProgressCount = 0;
  let doneCount = 0;
  let blockCount = 0;

  for (let i = 0; i < task.length; i++) {
    const newTask = ` 
    <div class="col  bg-dark text-light d-flex justify-content-between gap-5 m-2 rounded-1 text-start">
       <div class="form-check m-1">
          <label
         id=""
         class="form-check-label text-start text-uppercase"
         for="flexCheckIndeterminateDisabled"
          >
          ${task[i].title}
           </label>
          <p class="text-start" id="">${task[i].words}</p>
       </div>
       <div class="gap-3 d-flex fs-6 m-1">
         <button class="btn m-o p-0" onclick="editBtn(${i})"  data-bs-toggle="modal" data-bs-target="#newModal" ><i class="fa-solid fa-pen-to-square text-light fs-5"></i></button> 
         <button class="btn m-o p-0" onclick="deleteTask(${i})"><i class="fa-solid fa-trash text-danger-emphasis fs-5"></i></button> 
       </div>
     </div>
    `;
    switch (task[i].status) {
      case "Todo": {
        taskTodoList.innerHTML += newTask;

        todoCount++;
        // countTodo.textContent = taskTodoList.children.length;
        break;
      }
      case "Inprogress": {
        taskInprogressList.innerHTML += newTask;
        inProgressCount++;
        // countInprogress.textContent = taskInprogressList.children.length;
        break;
      }
      case "Done": {
        taskDoneList.innerHTML += newTask;
        // countDone.textContent = taskDoneList.children.length;
        doneCount++;
        break;
      }
      case "Blocked": {
        taskBlockedList.innerHTML += newTask;
        blockCount++;
        // countBlocked.textContent = taskBlockedList.children.length;
      }
      default: {
        console.log("Status aa songonuu aldaa garlaa");
      }
    }
  }
  countTodo.textContent = taskTodoList.children.length;
  countInprogress.textContent = taskInprogressList.children.length;
  countDone.textContent = taskDoneList.children.length;
  countBlocked.textContent = taskBlockedList.children.length;
}

btnAdd.addEventListener("click", function () {
  if (isEdited) {
    task[editedIndex].title = garchig.value;
    task[editedIndex].words = delgerengui.value;
    task[editedIndex].status = taskStatus.value;
    isEdited = false;
    btnAdd.textContent = "Нэмэх";
    staticBackdropLabel.textContent = "Add task";
  } else {
    const newTaskElement = {
      title: garchig.value,
      words: delgerengui.value,
      status: taskStatus.value,
    };

    task.push(newTaskElement);
  }
  garchig.value = "";
  delgerengui.value = "";
  taskStatus.value = "Todo";
  zurah();
});

function deleteTask(index) {
  console.log(index);
  task.splice(index, 1);
  zurah();
}

function editBtn(editIndex) {
  console.log("ET", editIndex);
  garchig.value = task[editIndex].title;
  delgerengui.value = task[editIndex].words;
  taskStatus.value = task[editIndex].status;
  btnAdd.textContent = "Хадгалах";
  staticBackdropLabel.textContent = "Change to card";
  isEdited = true;
  editedIndex = editIndex;
}
