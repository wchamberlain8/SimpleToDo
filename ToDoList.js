"use strict";

let toDoList = {
    name: "Edit Task Name", description: "Add a description", duedate: "date", priority: "high"  
};

function addTask(){

    let input1 = prompt("Enter Task Name: " );
    let input2 = prompt("")

}

function removeTask(){

}

function editTask(){

}

function displayTasks() {
    let taskListUl = document.getElementById("taskList");
    taskListUl.innerHTML = ""; // Clear previous content
    toDoList.forEach((task, index) => {
        let taskLi = document.createElement("li");
        taskLi.textContent = `Title: ${task.title}, Description: ${task.description}, Due Date: ${task.dueDate}, Priority: ${task.priority}`;
        taskListUl.appendChild(taskLi);
    });
}

console.log("Program runs! Yippee!");

// Example tasks
toDoList.push({
    title: "Complete homework",
    description: "Finish math assignment",
    dueDate: "2024-04-02",
    priority: "High"
});
toDoList.push({
    title: "Buy groceries",
    description: "Milk, eggs, bread",
    dueDate: "2024-04-01",
    priority: "Medium"
});
displayTasks();