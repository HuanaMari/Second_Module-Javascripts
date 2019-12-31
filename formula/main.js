function main() {
    var race = new Race("Formula 1");
    race.numberOfRacers();

    for (var i = 1; i <= 80; i++) {
        race.lapTime();
        race.race();
        console.log("It'\s " + i + " " + "lap");
        console.log("");
    }
    console.log(race);
}
main();

