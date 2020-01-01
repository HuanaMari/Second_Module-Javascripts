function maxNumber() {
    var arr = [];
    for (var i = 0; i < 10; i++) {
        arr.push(Math.round(Math.random() * 10))
    }
    console.log(arr);

    var maxOfArray =  Math.max(...arr)
    console.log(maxOfArray)
}
maxNumber();

