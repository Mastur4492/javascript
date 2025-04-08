class Task {
    constructor(title) {
        this.title = title;
        this.completed = false;
    }

    toggleStatus() {
        this.completed = !this.completed;
    }
}

class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(title) {
        if (title.trim() === "") {
            alert("Task cannot be empty!");
            return;
        }
        const task = new Task(title);
        this.tasks.push(task);
        this.renderTasks();
    }

    removeTask(index) {
        this.tasks.splice(index, 1);
        this.renderTasks();
    }

    toggleTask(index) {
        this.tasks[index].toggleStatus();
        this.renderTasks();
    }

    renderTasks() {
        const taskList = document.getElementById("taskList");
        taskList.innerHTML = "";

        this.tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.className = task.completed ? "completed" : "";
            li.innerHTML = `
                <span onclick="taskManager.toggleTask(${index})">${task.title}</span>
                <button class="delete-btn" onclick="taskManager.removeTask(${index})">Delete</button>
            `;
            taskList.appendChild(li);
        });
    }
}

// Create Task Manager instance
const taskManager = new TaskManager();

// Function to handle adding a task
function addNewTask() {
    const taskInput = document.getElementById("taskInput");
    taskManager.addTask(taskInput.value);
    taskInput.value = "";
}
