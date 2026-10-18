///Dates
/// usually the dates are count from Janruary 1, 1970. 

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);


// let myCreatedDate = new Date(2026, 10, 20)
//let myCreatedDate = new Date(2026, 10, 20, 5 , 3)
//let myCreatedDate = new Date("02-19-2003") ///in india format 
 let myCreatedDate = new Date("2026-11-20")
// console.log(myCreatedDate.toLocaleString());

let timestamp = Date.now()
// console.log(timestamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getMonth());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

//console.log(`Today day is ${newDate.getDay()} and month is ${newDate.getMonth()} and year is ${newDate.getFullYear()} `);



console.log(newDate.toLocaleString('default', {
    weekday: "long",
    //Date: "myCreatedDate",
}))





