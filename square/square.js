function square() {
    var arr = []
    for (var i = 101; i < 151; i++) {
        arr.push(i)
    }
    console.log(arr)

    var sum = 0
    for (var a = 0; a < arr.length; a++) {
        sum += Math.pow(arr[a], 2);
    }
    console.log(sum)
}
square();