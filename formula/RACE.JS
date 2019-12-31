function Race(name) {
    this.name = name;
    this.racer = [];

    this.numberOfRacers = function () {
        for (var i = 0; i < 20; i++) {
            var randomParam = getRandomNumber(300, 500);
            var newRacer = new Racer(randomParam, randomParam, randomParam, 0);
            this.racer.push(newRacer);
        }
    };
    this.race = function () {
        for (var i = 0; i < this.racer.length; i++) {
            console.log(this.racer[i].getSpeed(), this.racer[i].getFuel(),this.racer[i].getTireHealth());
        }
    };
    this.lapTime = function () {
        var random = getRandomNumber(200, 350);
        for (var i = 0; i < 10; i++) {
            for (var i = 0; i < this.racer.length; i++) {
                if (this.racer[i].getFuel() < 350 || this.racer[i].getTireHealth() < 350) {
                    this.racer[i].setFuel(random);
                    this.racer[i].setTireHealth(random);
                    console.log("racer" + " " + i + " is in the pit stop");
                }          
                this.racer[i].setFuel(this.racer[i].getFuel() - random);
                this.racer[i].setTireHealth(this.racer[i].getTireHealth() - random);
                console.log("racer number " + i, "speed" + " " + this.racer[i].getSpeed(), "fuel" + " " + this.racer[i].getFuel(), "tire health" + " " + this.racer[i].getTireHealth());
            }
        }
    };
}