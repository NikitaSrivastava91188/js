

const coding = ["js", "ruby", "java", "python", "cpp"]
// coding.forEach( function (item) {
//     console.log(item);
    
// }) ////since this is a callback function ,so, callback func. doesn't have name.

//now we can also use arroew func here.
// coding.forEach( (val) => {
//     console.log(val);
// })


///now we can also use a function inside for-each.
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)     //here we use only refrence of the func not executing it...
//                             //we only give refrence i.e. printme. it will execute itself.

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    
// })



const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName);
    console.log(item.languageName);
})