function fuel() {
    var averagePerKm = 7 / 100
    var start = 0
    for (i = 0; i < 43; i++) {
        var spend = Math.floor(start += averagePerKm)
    }
    console.log(spend)
}
fuel();