const user = {
    username: "Nikita",
    price: 999,

    welcomeMessage : function(){
       // console.log(`${this.username} , welcome!`);  ///the keyword this refers to current context.
        
    }
}

user.welcomeMessage()
//console.log(this);      ///this gives result a empty {} because it is present inside node, it means 
                        ///the file we are using inside nodejs not in the browser so it only refer to current context.
                       /// and if there is no any global object in this node js then it gives us {}.

//note: inside browser the global object is windowobject.

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);   ///thisgives result undefined because this keyword context only work in object not inside function.
// }

// chai()


// const chai = function() {
//     let username = "hitesh"
//     console.log(this.username);   ///thisgives result undefined because this keyword context only work in object not inside function.
// }

// chai()



const chai = () => {                ///arrow func is declare like this.
    let username = "hitesh"
    console.log(this.username);   ///thisgives result undefined because this keyword context only work in object not inside function.
}

// chai()


////Arrow function
// const addTwo = (num1, num2) => {
// return num1 + num2
// }
//const addTwo = (num1, num2) => num1 + num2  ///this type is known as implicit return in which we dont need to use {}
 ///this type is known as implicit return in which we dont need to use {}
                                            ///and no need to write return keyword.
const addTwo = (num1, num2) => (num1 + num2) 
console.log(addTwo(3, 4));
