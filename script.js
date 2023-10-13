document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");
    
    addButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML =
            `
                <span class="task-text">${taskText}</span>
                <div class="task-options">
                    <button class="complete-button">Complete</button>
                    <button class="delete-button">Delete</button>
                </div>
            `;

            taskList.appendChild(listItem);

            taskInput.value = "";

            const completeButton = listItem.querySelector(".complete-button");
            completeButton.addEventListener("click", function() {
                toggleTaskCompletion(listItem);
            });

            const deleteButton = listItem.querySelector(".delete-button");
            deleteButton.addEventListener("click", function() {
                listItem.remove();
            });
        }
    });

    taskInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addButton.click();
        }
    });

    function toggleTaskCompletion(taskItem) {
        taskItem.classList.toggle("completed");
    }
});


