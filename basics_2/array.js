///Arrays
//ways of declaring arrays
const array = [0, 1, 2, 3, 4, 5]
const array2 = ["Nikita", "Khushi", "Shatakshi"]
const myArray = new Array(0, 1, 2, 8, 4,5)
// console.log(myArray[3]);
// console.log(myArray.length);

// myArray.push(6) /// it insert teh elemt at last of teh array elembnt.
// myArray.push(7)
// myArray.pop() /// it remove the last element of the array.

// myArray.unshift(10) ////add the element  at the beginning but it is not so much good because when there are a lot of elemnt present in array , eg, 1000 elemnt and 
//we perform unshift then it shif all elemnt position by 1 which incresse the system load and it is not good practice but 
//we used it when we require it. 

// myArray.shift() ///it remove the first elemebnt of the array.
// console.log(myArray);
// console.log(myArray.includes(4));
// console.log(myArray.indexOf(8));


// const newArray = myArray.join()
// console.log(newArray);

// console.log(typeof newArray);
// console.log(myArray);

////slice and splice methods
// console.log("A", myArray);
// const n1 = myArray.slice(1,5) ////slice method doesnot include the upper range value in the result
// console.log(n1);

// console.log("B", myArray);
// const n2 = myArray.splice(1,4) ///splice methjod include the upper range value into the result as well as
//                                 /// remove the element frm the orginal array.
// console.log(n2);
 
// console.log("C", myArray);


const fruits = ["Mango", "Banana", "Grapes"]
const state = ["UP", "MP", "AP"]
// state.push(fruits)
// console.log(state);
// console.log(state[3][1]);

// state.concat(fruits)
// console.log(state);
// console.log(fruits);

// const array3 = state.concat(fruits) //// this is a way of join two array .
// console.log(array3);


const allValue = [...fruits, ...state] ////this is also way of joining array but here tehre is no limitation, 
                                        ///and this operator is claaed spread operator
// console.log(allValue);

const another_Array = [1, 2, 3, [4,5,6], 7, [6, 7, [2, 3, 4]]]
const newAnotherArray = another_Array.flat(Infinity) ////flat combines all array into sngle array 
                             //and through infinity wew dont have to give the number of depth level.
                                               
// console.log(newAnotherArray);


// console.log(Array.isArray("Nikita")); ///isArray tells that the pararmeter value is array or not.

// console.log(Array.from("Nikita")); ///frm convert the parameter value in array.

console.log(Array.from({name: "Nikita"}));  ///special case

const score1 = 100
const score2 = 200
const score3 = 400
console.log(Array.of(score1 , score2, score3));   ///of make all elemnts into array.
