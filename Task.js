class Task {
    taskContainer /*string*/;
    stopwatch /*Stopwatch*/

    constructor() {
        this.taskContainer = document.getElementById("taskContainer");
        let newDiv = document.createElement("div");
        newDiv.className = "task";
        this.taskContainer.appendChild(newDiv);
    }
}