const tasksDom = document.querySelector(".tasks");
const formDom = document.querySelector(".task-form")
const taskInputDom = document.querySelector(".task-input")

const showTasks = async () => {
    try {
        const {data: tasks} = await axios.get("/api/tasks");

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
                <button type="submit" class="delete-btn">
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
    }
});