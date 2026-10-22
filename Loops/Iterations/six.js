// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

//   let userBooks = books.filter( (bk) => bk.genre === 'History')

//   userBooks = books.filter( (bk) => { 
//     return bk.publish >= 1995 && bk.genre === "History"
// })
//   console.log(userBooks);







  const coding = ["js", "ruby", "java", "python", "cpp"]

///foreach loop doesn't return any value
  // const val = coding.forEach( (item) => {
  //   console.log(item);
  //   return item
  // })
  // console.log(val);
  

  ///now for returning value we use filter which also uses callback func.
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newValue = myNums.filter( (num) => {        ///by using filter we have to put some condition.
//   return num <= 5})
// console.log(newValue);


const newNums = []
myNums.forEach( (val) => {
  if (val > 4){                 ///this way of for-each and filter works same but compartively 
                                /// filter seems easy.
    // console.log(val);
    newNums.push(val)
  }
})

// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  // const newBooks = books.filter( (bk) => {
  //   return (bk.genre === "History")
  // } )

  // console.log(newBooks);


 const newBooks = books.filter( (bk) => ((bk.publish <=2000 && bk.genre == "History")))
console.log(newBooks);
  