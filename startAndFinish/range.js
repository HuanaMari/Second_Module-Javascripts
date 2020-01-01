function sumNumbers(start, finish) {
    acumulator = 0
    for (var i = start; i < finish+1; i++) {
        acumulator += i
    }
    console.log(acumulator)
}
sumNumbers(1, 100)