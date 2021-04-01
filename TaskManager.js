class TaskManager {
    tasks /*Task[]*/;

    constructor() {
        this.tasks = [];
    }

    add(task /*task*/) {
        /*
        add a task to the tasks list
        */
        this.tasks.push(task);
    }
}