//IIFE: Immediately Invoked Function Expressions

///IIFE is made for immediately executing a func when write

// function chai(){
//     console.log("DB Connected!");
    
// }
// chai()               //this is normal function and its calling


//but when we make that function normal function to IIFE function then we do it like this:
(function chai(){

    //named IIFE                //this is named iife because this fucntion has name e.g. chai()
    console.log("DB Connected!");
    
})();         ///()()the first parenthesis is for defenitin of function and second parenthesis is for execution/calling.


///why we use IIFE??
///sometimes, there might be poosible that there ocuurs problems due to global scopes, global scopes variable etc.
///so, for resolving this pollution/problem we use IIFE, which immediately execute when write.



// ( () => {
// console.log("DB executed!");

// })()                ////now this gives error not because of any error in the written arrow function.
                    ///but because we dont put a semicolon(;) in above IIFE function.
                ////in IIFE func if we dont put. a semicolon then it doesn't know where to stop or where 
                ///its context ends ...so we have to put a semicolon at last of the IIFE func.




( () => {
console.log("DB executed!");

})();  


( (name) => {
    //simple IIFE                   ///this is simple IIFE because it doesn't have a name.
console.log(`DB executed! ${name}`);

})('NIKITA!')     