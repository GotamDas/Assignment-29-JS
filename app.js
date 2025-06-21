const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const clearBtn = document.getElementById('clear-btn');
const todoList = document.getElementById('todo-list');

// Add Task
addBtn.addEventListener('click', () => {
  const taskText = input.value.trim();
  if (taskText === '') return alert("Please enter a task.");

  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = taskText;

  // Edit button
  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.onclick = () => {
    const newTask = prompt("Edit task:", span.textContent);
    if (newTask !== null && newTask.trim() !== '') {
      span.textContent = newTask.trim();
    }
  };

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = () => {
    todoList.removeChild(li);
  };

  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  input.value = '';
});

// Clear All Tasks
clearBtn.addEventListener('click', () => {
  if (confirm("Are you sure you want to delete all tasks?")) {
    todoList.innerHTML = '';
  }
});