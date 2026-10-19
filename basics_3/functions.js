

function sayMyName(){
console.log("N");
console.log("I");
console.log("K");
console.log("I");
console.log("T");
console.log("A");
}

//sayMyName()

// function add(number1, number2){
//    console.log( number1 + number2);
   
// }

function add(number1, number2){
 let result = number1 + number2
 return result
   
}
const result = add(2, 3)
// console.log("result", result);


function loginUserMsg(username){
    // if(username === undefined){
    if(!username){
console.log("Please enter a username");
return
    }
return `${username} just logged in`
}
// console.log(loginUserMsg("Nikita"))
// console.log(loginUserMsg())




///shopping kart examples

function calculatePrice(val1, val2, ...num1){           ////here ... is rest operator (... is known as rest/ spread operator depending where we want to used it.)
return num1
}
console.log(calculatePrice(100, 200, 3000));


//aceesing object using function
const user = {
    name: "Nikita",
    age: 22
}


// function handleObject(anyobject){
//     console.log(`username is ${anyobject.name} and its age is ${anyobject.age}`);
    
// }

// handleObject(user)

const myArr = [100, 200, 300]
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myArr));
console.log(returnSecondValue([199, 2900, 399]));
