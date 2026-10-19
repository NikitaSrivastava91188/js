//Singleton
//object.create

//declaring a symbol
const mySym = Symbol("key1")


//object literal
// const JSuser = {
//     name: "Nikita",
//     "Full name": "Nikita Srivastava",
//     [mySym]: "KEY1",
//     age: 22,
//     email: "nikita@gmail.com",
//     location: "Deoria",
//     isLogegdIn: false,
//     lastLoginDays: ["Monday", "Sunday"]
// }
// console.log(JSuser.email);
// console.log(JSuser["email"]);
// console.log(JSuser["Full name"]);
// // console.log(JSuser["Full_name"]);
// console.log(JSuser[mySym]);
// console.log(typeof(JSuser[mySym]));


// JSuser.name = "Shwetank"
// console.log(JSuser);
// Object.freeze(JSuser)

// JSuser["Full name"] = "Shwetank Singh"
// console.log(JSuser);


// JSuser.greeting = function()
// {
//     console.log("HEllo!");
    
// }

// JSuser.greetingTwo= function()
// {
//     console.log(`HEllo! ${this.name}`);
    
// }
// console.log(JSuser.greetingTwo());

////////////////////sigleton//////////////

// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "nikita"
tinderUser.isLogegdIn = false
// console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Shwetank",
            lastName: "Singh"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// console.log(obj3);
//  const obj4 = {...obj1, ...obj2}/////just like array..use spread operator
//  console.log(obj4);
 

//  //another method
//  const obj5 = Object.assign({}, obj1, obj2)
//  console.log(obj5);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
     {
        id: 1,
        email: "g@gmail.com"
    },
     {
        id: 1,
        email: "i@gmail.com"
    }
]

// console.log(users[0].email)

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    courseName: "js",
    price: "123",
    courseInstructor: "hitesh"
}
// console.log(course.courseInstructor);
// const {courseInstructor} = course
// console.log(courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);
