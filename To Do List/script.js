let inputBox = document.querySelector("#input-box");
let taskList = document.querySelector(".task-list");
let addBtn = document.querySelector(".add-btn");

inputBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    if (inputBox.value === "") {
        alert("You must enter some task");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        taskList.appendChild(li);
    }
    inputBox.value = "";
    saveData(); 
}

taskList.addEventListener("click", (event) => {
    if(event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        saveData(); 
    }
    else if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem("data", taskList.innerHTML);
}

function showSavedData() {
    taskList.innerHTML = localStorage.getItem("data");
}

showSavedData();