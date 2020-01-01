function flirting(tries, hitpoints) {
    var flirt = 0
    for (var i = 0; i < tries; i++) {
        if (i % 10 === 0) {
            flirt -= 12
        } else if (i % 5 === 0) {
            flirt += 10
        } else if (i % 3 === 0) {
            flirt += 5
        } else {
            flirt += 1
        }
    }
    console.log(flirt)
    if(flirt > hitpoints){
        console.log("flirting was succsessfull")
    }else{
        console.log("flirting was not succsessfull")
 
    }

}
flirting(10, 35)