const taskIdDom = document.querySelector(".task-edit-id");
const taskNameDom = document.querySelector(".task-edit-name");
const taskCompletedDom = document.querySelector(".task-edit-completed");
const taskFormDom = document.querySelector(".task-form");
const formAlertDom = document.querySelector(".form-alert");

const params = window.location.search;
const id = new URLSearchParams(params).get("id");
console.log(id);

const showTask = async () => {
    try {
        const {data: task} = await axios.get(`/api/tasks/${id}`);
        const {_id, completed, name} = task;
        taskIdDom.textContent = _id;
        taskNameDom.value = name;
        if(completed) {
            taskCompletedDom.checked = true;
        }
    } catch (error) {
        console.log(error);
    }
};

showTask();

taskFormDom.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
        const taskName = taskNameDom.value;
        taskCompleted = taskCompletedDom.checked;
        const {data: task} = await axios.patch(`/api/tasks/${id}`, {
            name: taskName,
            completed: taskCompleted,
        });
        formAlertDom.style.display = "block";
        formAlertDom.textContent = "Edit successfully";
    } catch (error) {
        console.log(error);
    }
    setTimeout(() => {
        formAlertDom.style.display = "none";
    }, 3000);
});