
//these comparisons are simple nad create no confusion because both are of same data type

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 != 1);
// console.log(2 == 1);



//these two can create confusion because data types is not same 

// console.log("2" > 1);
// console.log("02" > 1);




//and these gives different types of output because conversion may be different and this is not a good practice
// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined >= 0);



// === this is a strict equivalent comparison because it strictly compare the dataype and then do the comaparison
console.log("2" === 2);
