const createLst = document.getElementById('todo-button');
const mainPage = document.getElementById('main');
const lstBlock = document.getElementById('create-task');
const inpt = document.querySelector('input');
const submitTask = document.getElementById('task-submit');
const chbox = document.getElementById('checkbox');
const lst = document.createElement('ol');
lstBlock.appendChild(lst);

function createTask() {
    const task = document.createElement('li');
    let taskContent = inpt.value;
    if (taskContent.trim() !== '') {
        task.textContent = taskContent;
        lst.appendChild(task);
        importantTask(task);
        taskContent.onclick = function() {
            inpt.value = '';
        }();
    } 
}

function importantTask(task) {
    if (chbox.checked) {
        task.style.cssText = `color: red;`;
        lst.insertBefore(task, lst.firstElementChild);
        chbox.checked = false;
    }
}

function doneTask() {
    let currentTask = event.target;
    if (currentTask.tagName == 'LI') {
        currentTask.style.cssText = `color: #A8A8A8;
        text-decoration: line-through;`;
    }
}

function removeTask() {
    let currentTask = event.target;
    if (currentTask.tagName == 'LI') {
        currentTask.remove(lst);
    }
}

createLst.addEventListener('click', function() {
    mainPage.style.cssText = `display: none;`;
    lstBlock.style.cssText = `display: inline-block;`;
});



submitTask.addEventListener('click', createTask);
lst/addEventListener('click', doneTask);
lst.addEventListener('dblclick', removeTask);


















