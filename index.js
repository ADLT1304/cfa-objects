// create an object fruits with at least 5 fruits that have the name of the fruit as the key and the value being the color of the fruit
// print out each value in that object manually

//then print out each value using a for loop

//reassign one of the keys in the object to have a different value

// delete one of the properties in the object

// write a function that takes in an object and key and returns that value at that key in the object

let obj = {
    apple: 'red',
    bananna: 'yellow',
    pear: 'green',
    orange: 'orange',
    mango: 'yellow'
}

for (let key in obj) {
    console.log(obj[key]);
}

obj.apple = 'green';
delete obj.orange

let func = (object, key) => {
    return object[key];
}

console.log(func(obj, 'apple'))
