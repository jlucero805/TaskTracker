class Stopwatch {
    time /*Time*/;

    constructor() {
        this.time = new Time();
        this.stopwatchInterval = null;
    }

    incrementTime() {
        /*
        increment the time object by one interval
        */
        this.time.increment();
        console.log(this.time.getSeconds());
    }
}