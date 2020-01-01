var n = 1331;
function palindrome(num) {
    num = num.toString().split('')
    // var t = true
    for (var i = 0; i < num.length; i++) {
        console.log(num[i], num[num.length - 1 - i])
        if (num[i] !== num[num.length - 1 - i]) {
           return false
        } 
    }
    console.log('number is palindrome')
    // if (t == false) {
    //     console.log('number is not apalindrome')
    // } else { console.log('number is palindrome') }
}
palindrome(n)