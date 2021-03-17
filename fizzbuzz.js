// LOOP through numbers 0 - 100
// IF number is a multiple of 3 and 5
//     THEN output 'FIZZBUZZ'
// ELSE IF number is a multiple of 3
//     THEN output 'FIZZ'
// ELSE IF number is a multiple of 5
//     THEN output 'BUZZ'
// ELSE
//     THEN output number


for (i=0; i<101; i++) {
    let msg = "";
    if (i%3 == 0) {
        msg += "FIZZ";
    }
    if (i%5 == 0) {
        msg += "BUZZ";
    }
    if (!msg) {
        msg = i;
    }
    console.log(msg);
}