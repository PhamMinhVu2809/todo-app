const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
function addTask() {
    const taskText = taskInput.value.trim(); 
    
    if (taskText === "") {
        alert("Vui lòng nhập tên công việc.");
        return;
    }
    const listItem = document.createElement('li');
    const textNode = document.createTextNode(taskText);
    listItem.appendChild(textNode);
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'X';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        listItem.remove();
    });
    listItem.appendChild(deleteBtn);

    taskList.appendChild(listItem);
    taskInput.value = "";
}
addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
addBtn.addEventListener('click', addTask);