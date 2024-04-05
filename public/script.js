const tasksDom = document.querySelector(".tasks");
const formDom = document.querySelector(".task-form")
const taskInputDom = document.querySelector(".task-input")
const formAlertDom = document.querySelector(".form-alert")

const showTasks = async () => {
    try {
        const {data: tasks} = await axios.get("/api/tasks");

        if(tasks.length < 1) {
            tasksDom.innerHTML = `<h2 class="empty-message">There are no tasks!</h2>`;
            return;
        }

        const allTasks = tasks.map((task) => {
            const { completed, _id, name } = task;

            return `<div class="single-task">
            <h2>
                <span>
                    <i class="far fa-check-circle"></i>
                </span>
                ${name}
            </h2>
            <div class="task-links">
                <a href="#" class="edit-link">
                    <i class="fas fa-edit"></i>
                </a>
                <button type="submit" class="delete-btn" data-id="${_id}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>`;
        }).join("");
        tasksDom.innerHTML = allTasks;
    } catch (error) {
        console.log(error);
    }
};

showTasks();

formDom.addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = taskInputDom.value;

    try {
        await axios.post("/api/tasks", {name: name});
        showTasks();
        taskInputDom.value = "";
        taskInputDom.focus();
    } catch (error) {
        console.log(error);
        formAlertDom.innerHTML = "Please enter within 30 characters.";
    }
});

tasksDom.addEventListener("click", async (event) => {
    const element = event.target;
    console.log(element.parentElement);
    if(element.parentElement.classList.contains("delete-btn")) {
        const id = element.parentElement.dataset.id;
        try {
            await axios.delete(`/api/tasks/${id}`);
            showTasks();
        } catch (error) {
            console.log(error);
        }
    }
});