class Controls {
    /*
    remember that .bind(this) is necesarry
    in order to use setInterval
    */
    playButton;
    pauseButton;
    newTaskButton;
    taskManager;

    constructor() {
        this.taskManager = new TaskManager();

        this.newTaskHandler();
        this.playHandler();
        this.pauseHandler();
    }

    playHandler() {
        this.playButton = document.getElementById("play");

        this.playButton.addEventListener("click", () => {
            this.taskManager.play();
        })
    }

    pauseHandler() {
        this.pauseButton = document.getElementById("pause");

        this.pauseButton.addEventListener("click", () => {
            this.taskManager.pause();
        })
    }

    newTaskHandler() {
        this.newTaskButton = document.getElementById("newTask");

        this.newTaskButton.addEventListener("click", () => {
            this.addNewTask();
            this.taskManager.pause();
        })
    }

    addNewTask() {
        /*
        Add a new task
        */
        this.taskManager.add("hello");
    }
}