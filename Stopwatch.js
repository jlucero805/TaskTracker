class Stopwatch {
    time /*Time*/;

    constructor() {
        this.time = new Time();
    }

    incrementTime() {
        /*
        increment the time object by one interval
        */
        this.time.increment();
        console.log(this.time.getSeconds());
    }


}