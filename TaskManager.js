class TaskManager {
    tasks /*Task[]*/;
    interval /*interval*/;

    constructor() {
        this.tasks = [];
    }

    add(task /*task*/) {
        /*
        add a task to the tasks list
        */
        let newTask = new Task(task)
        this.tasks.push(newTask);
    }

    play() {
        if (this.tasks == []) {
            //pass
        } else {
            if (!this.interval) {
                this.interval = setInterval(this.incrementAll.bind(this), 1000);
            }
        }
    }

    pause() {
        clearInterval(this.interval);
        this.interval = null;
    }

    incrementAll() {
        for (let task of this.tasks) {
            task.incrementTime();
            task.updateTime();
        }
    }
}