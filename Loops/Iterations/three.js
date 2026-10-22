// for of

// ["", "", ""]
// [{}, {}, {}]


const arr = [11, 12, 13, 14, 15]
for (const num of arr) {
// console.log(`value of array is ${num}`);
}

const Name = "Nikita"
for (const name  of Name) {
// console.log(`each element of string is ${name}`);
}

///map doesn't store duplicate data, it only storeunique values and store in orderly.
const map = new Map()
map.set('In', "India")
map.set('AR', "Argentina")
map.set('SG', "Singapore")
map.set('AU', "Australia")
map.set('In', "India")
// console.log(map);

for (const [key, value] of map) {           ///[key, value] this is also known as array destructuring.
    // console.log(key, `:-`, value);
    
}

const myObject = {
    game1: 'Temple run',
    game2: 'crossword'
}



///this is not working for objects.
for (const [key, value]  of myObject) {
    // console.log(key , value);
    
}