// Fetch tasks from local storage or initialize an empty array
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// DOM Elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Function to display all tasks
function displayTasks() {
  taskList.innerHTML = ''; // Clear current list

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = 'task-item';
    li.innerHTML = `
      <span>${task}</span>
      <button class="remove-btn" onclick="removeTask(${index})">Remove</button>
    `;
    taskList.appendChild(li);
  });
}

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText) {
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Save to local storage
    taskInput.value = ''; // Clear input
    displayTasks(); // Refresh task list
  }
}

// Function to remove a task
function removeTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks)); // Update local storage
  displayTasks(); // Refresh task list
}

// Event Listeners
addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});

// Display tasks on page load
displayTasks();