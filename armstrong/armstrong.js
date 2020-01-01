function threeDigitArmstrongNumber() {
    for (var i = 1; i < 10; ++i) {
        for (var y = 0; y < 10; ++y) {
            for (var x = 0; x < 10; ++x) {
                var armstrong = (Math.pow(i, 3) + Math.pow(y, 3) + Math.pow(x, 3));
                var sum = (i * 100 + y * 10 + x);
                if (armstrong == sum) {
                    console.log(armstrong);
                }
            }
        }
    }
}
threeDigitArmstrongNumber();