const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

// const newNums = myNumers
//                 .map((num) => num * 10 )
//                 .map( (num) => num + 1)
//                 .filter( (num) => num >= 40)

// console.log(newNums);


// const newValue = myNumers.map( (map) => (map +10))
// console.log(newValue);


const newValue = myNumers.map( (num) => (num * 10)).map((num) => num+1).filter( (num) => (num >50))
console.log(newValue);
