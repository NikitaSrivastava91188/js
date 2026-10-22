const myNums = [1, 2, 3]
// const myTotal = myNums.reduce( (acc, currVal) => {
//     return acc + currVal

// }, 2)
// console.log(myTotal);

const myTotal = myNums.reduce( function (acc, currVal) {
   // console.log(`acc is ${acc}, and currval is ${currVal}`);
    
    return acc + currVal

}, 2)
//console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


const price = shoppingCart.reduce( (acc, val) => {
    console.log(`acc is ${acc} and val is ${val.price}`);
    return acc + val.price
}, 0)

console.log(price);
