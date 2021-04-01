class Task {
    task;
    taskContainer /*string*/;
    time /*Time*/;
    name;
    deleteButton;
    seconds;
    minutes;
    hours;

    constructor() {
        this.taskContainer = document.getElementById("taskContainer");
        this.task = document.createElement("div");
        this.task.className = "task";
        this.taskContainer.appendChild(this.task);
        this.time = new Time();


        this.createDeleteButton();
        this.createTimerText();

    }

    createDeleteButton() {
        this.deleteButton = document.createElement("button");
        this.deleteButton.className = "taskDelete";
        this.deleteButton.innerHTML = "-";
        this.task.appendChild(this.deleteButton);

        this.deleteButton.addEventListener("click", () => {
            this.task.style.display = "none";
        })
    }

    createTimerText() {
        this.createSecondsText();
        this.createMinutesText();
        this.createHoursText();
        this.createSeparatorText();
        this.createNameText();
    }

    createSeparatorText() {
        let separ = document.createElement("p");
        let separ1 = document.createElement("p");

        separ.innerHTML = ":";
        separ1.innerHTML = ":";

        separ.id = "separator1";
        separ1.id = "separator2";

        this.task.appendChild(separ);
        this.task.appendChild(separ1);
    }

    createSecondsText() {
        this.seconds = document.createElement("p");
        this.seconds.className = "seconds";
        this.seconds.innerHTML = this.time.getSeconds();
        this.task.appendChild(this.seconds);
    }

    createMinutesText() {
        this.minutes = document.createElement("p");
        this.minutes.className = "minutes";
        this.minutes.innerHTML = this.time.getMinutes();;
        this.task.appendChild(this.minutes);
    }

    createHoursText() {
        this.hours = document.createElement("p");
        this.hours.className = "hours";
        this.hours.innerHTML = this.time.getHours();
        this.task.appendChild(this.hours);
    }

    createNameText() {
        this.name = document.createElement("input");
        this.name.className = "taskName";
        this.task.appendChild(this.name);
    }

    incrementTime() {
        this.time.increment();
    }

    updateTime() {
        this.seconds.innerHTML = this.time.getSeconds();
        this.minutes.innerHTML = this.time.getMinutes();
        this.hours.innerHTML = this.time.getHours();
    }
}