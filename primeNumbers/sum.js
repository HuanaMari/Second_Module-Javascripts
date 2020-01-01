function isPrime(num) {
    if (num === 1) {
        return false;
    }
    else if (num === 2) {
        return true;
    } else {
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                return false
            }
        }
    }
    return true
}

var primeNumArray = [];
var number = 0

function sumNumber(x, y) {
    for (x; x < y; x++) {
        var sum = x;
        if (!isPrime(sum)) {
            number += 0
        } else {
            number += x
            console.log(sum + ' is a prime number');
            primeNumArray.push(sum)
        }
    }
    console.log(number + ' is sum of prime numbers');
    console.log(primeNumArray + ' - array of prime numbers');

}
sumNumber(1, 20)






