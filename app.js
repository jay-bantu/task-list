// UI vars

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load event listeners
loadEventListeners();

function loadEventListeners() {
  // add task event
  form.addEventListener('submit', addTask);

  //   remove event
  taskList.addEventListener('click', removeTask);

  //   clear all events
  clearBtn.addEventListener('click', clearTasks);

  //   filter task events
  filter.addEventListener('keyup', filterTasks);
}

//  add Task

function addTask(e) {
  if (taskInput.value === '') {
    alert('add task');
  }

  //create li element
  const li = document.createElement('li');
  //   add class
  li.className = 'collection-item';
  //   create textnode
  li.appendChild(document.createTextNode(taskInput.value));

  //   create link element
  const link = document.createElement('a');
  // add class
  link.className = 'delete-item secondary-content';
  //   add icon
  link.innerHTML = '<i class="fa fa-remove"></i>';

  li.appendChild(link);
  //   console.log(li);
  taskList.appendChild(li);

  taskInput.value = '';

  e.preventDefault();
}

// Remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    console.log(e.target);
    if (confirm('Are you sure you want to delete the task?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// clear tasks

function clearTasks() {
  // taskList.innerHTML=''

  //   faster
  while (tasklist.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}
// filter tasks
function filterTasks(e) {
  //   e.preventDefault();
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(
    function(task){
        const item = task.firstChild.textContent
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block'
        } else {
            task.style.display='none'
            
        }
    }
  )

  console.log(text);
}
