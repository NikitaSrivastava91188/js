
//for of loop is not working on objects...so for objects we use for-in loop
// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const key in myObject) {
// console.log(`${key} is shortcut for ${myObject[key]}`); 
// }




///keys of array is starting from 0.
//  const programming = ["js", "rb", "py", "java", "cpp"]
//  for (const key in programming) {
//     console.log(programming[key]);

//  }




////maop is not iterable in for-in loop.
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}