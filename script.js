let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        const currentDate = new Date();
        const task = {
            text: taskText,
            completed: false,
            createdAt: currentDate.toLocaleString() // Format date and time as a string
        };
        tasks.push(task);
        renderTasks();
        taskInput.value = '';
    }
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.textContent = `${task.text} - Created at ${task.createdAt}`;
        if (task.completed) {
            taskItem.classList.add('completed');
        }

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.onclick = () => deleteTask(index);

        taskItem.appendChild(deleteButton);
        taskItem.onclick = () => toggleTask(index);
        taskList.appendChild(taskItem);
    });
}
