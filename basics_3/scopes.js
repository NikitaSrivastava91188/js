
var c = 300
let a = 300
if(true){
let a = 10         ///every varible which is declared inside {} is known as block scope.and outside the { is known as global scope
const b = 20
 c = 30
 console.log("Inner a :", a);
 
}


 console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Nikita"

    function two(){
        const website = "youtube"
        console.log(username);
    }
//     console.log(website);

     two()

}

 one()


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
         console.log(username + website);
    }
     //console.log(website);
}

 //console.log(username);

// // ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5))
function addone(num){
    return num + 1
}





const addTwo = function(num){       ///function is defined also in this format and soetimes it is 
                                    ////also called expressions.
    return num + 2
}
console.log(addTwo(5))
