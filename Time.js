class Time {
    seconds /*number*/;
    minutes /*number*/;
    hours /*number*/;

    constructor() {
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
    }

    increment() {
        /*
        Increments seconds by one.
        Minutes and hours are automatically adjusted
        to increment as needed.
        */
        this.seconds++;
        this.distribute();
    }

    distribute() {
        /*
        Distributes the seconds into minutes or
        hours as needed. 
        */
        if (this.seconds == 60) {
            this.seconds = 0;
            this.minutes++;
        }

        if (this.minutes == 60) {
            this.minutes = 0;
            this.hours++;
        }
    }

    getSeconds() /*string*/ {
        /*
        Returns the seconds.
        */
       if (this.seconds >= 10) {
           return String(this.seconds);
       }
       return "0" + this.seconds;
    }

    getMinutes() /*string*/ {
        /*
        Returns minutes.
        */
       if (this.minutes >= 10) {
           return String(this.minutes);
        }
        return "0" + this.minutes;
    }

    getHours() /*string*/ {
        /*
        Returns hours.
        */
        if (this.hours >= 10) {
            return String(this.hours);
        }
        return "0" + String(this.hours);
    }
}
