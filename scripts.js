document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    function createTaskElement(taskText) {
        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = taskText;
        li.appendChild(span);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });
        li.appendChild(deleteButton);

        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        return li;
    }

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const taskElement = createTaskElement(taskText);
            taskList.appendChild(taskElement);
            taskInput.value = '';
        }
    });

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTaskButton.click();
        }
    });
});
