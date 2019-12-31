function Racer(speed, fuel, tireHealth, avarageSpeed) {
    this.speed = speed;
    this.fuel = fuel;
    this.tireHealth = tireHealth;
    this.avarageSpeed = avarageSpeed;


    this.getAvarageSpeed = function () {
        return this.avarageSpeed;
    };
    this.setAvarageSpeed = function (newAvarageSpeed) {
        return this.avarageSpeed = newAvarageSpeed;
    };
    this.getSpeed = function () {
        return this.speed;
    };
    this.setSpeed = function (newSpeed) {
        return this.speed = newSpeed;
    };
    this.getFuel = function () {
        return this.fuel;
    };
    this.setFuel = function (newFuel) {
        this.fuel = newFuel;
    };
    this.getTireHealth = function () {
        return this.tireHealth;
    };
    this.setTireHealth = function (newTireHealth) {
        return this.tireHealth = newTireHealth;
    };

}

