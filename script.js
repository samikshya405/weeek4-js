// const fruits = new Array("apple","orange","banana")
// console.log(fruits)

const fruits =["apple","mango","banana"]
console.log(fruits.length)
console.log(fruits[0])



//adding elements
//mutation array
fruits[3] = "pineapple"

// fruits[5] ="p"
// fruits[fruits.length] ="a"


fruits.push("pineapple")

// fruits.pop()
// fruits.splice(1,2)

fruits.splice(5,1,'passionfruit', 'grapes')

// const items = ['tomato', 'onion', 'garlic', 'potato']

// console.log(...items)


//first element remove
// fruits.shift()

//first element unshift

fruits.unshift('orange', 'watermelon')

fruits.splice(3)
console.log(fruits.indexOf('apple'))

console.log(fruits)

const veges = ['tomato', 'onion', 'garlic', 'potato']
let added = veges.concat(fruits)
console.log(added)

const newFruits = [...fruits];
// newFruits.pop()

newFruits.shift()

newFruits.push('berry')
console.log(newFruits)
console.log(fruits)

