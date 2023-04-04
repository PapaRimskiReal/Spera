const myCity = {
    city: 'New York'
}

// #region bracket notation //

myCity['popular'] = true
// console.log(myCity)
// { city: 'New York', popular: true }

const countryPropertyName = 'country'
myCity[countryPropertyName] = 'USA'
// console.log(myCity)
// { city: 'New York', popular: true, country: 'USA' }
// #endregion

// #region delete 

delete myCity.city
// console.log(myCity)
// { popular: true, country: 'USA' }
// #endregion

// #region function in Object
const newCity = {
    city: 'New York',
    cityGreeting: function () {
        console.log('Greetings!')
    }
}
const newCity2 = {
    city: 'New York',
    cityGreeting() {
        console.log('Greetings!')
    }
}
// newCity.cityGreeting()
// Greetings!
// #endregion

// #region JSON 
// Object to JSON
const post = {
    title: 'myPost',
    likesQty: 15
}

JSON.stringify(post)
// JSON to Object
const postJSON = JSON.stringify(post);

JSON.parse(postJSON)
// #endregion

// #region copy Object without mutation
const person = {
    name: 'Bob',
    age: 25
}

//version 1 (jeigu objekte person yra kitas objektas linkai i ji islieka)
const person2 = Object.assign({}, person)

//version 2 (jeigu objekte person yra kitas objektas linkai i ji islieka)
const person3 = {...person}

//version 3
const person4 = JSON.parse(JSON.stringify(person))
// #endregion

// #region String literal
const message = `${myCity} is a best city`
// #endregion

// #region TRY/CATCH
try {

} catch (error) {

}
///////
const fnWithError = () => {
    throw new Error('Some error')
}

try {

} catch (error) {
    console.error(error)
    // or
    console.log(error.message)
}
// #endregion

// #region Array
const myArray = [1, 2, 3]

// push - add element
myArray.push(4)

// pop - delete last element
const saveDeletedElement = myArray.pop()

// unshift - add element to start
myArray.unshift('start')

// shift - delete first element
const deletedFirstElement = myArray.shift()

// forEach (return undefined)
const newArray = myArray.forEach(el => el * 2)
//console.log(newArray) - undefined

// map (return new Array)
const newArray2 = myArray.map(el => el * 2)
//console.log(newArray2) - [ 2, 4, 6 ]
// #endregion

// #region Destructuring assignment

// Object
const userProfile = {
    name: 'Bogdan',
    age: 25,
    employed: true
}

const {name, age} = userProfile
const {employed} = userProfile

// Array
const fruits = ['banana', 'apple', 'cherry']

const [fruitOne, fruitTwo] = fruits
// #endregion

// #region Loop
// for in
const myObject = {
    x: 10,
    y: true,
    z: 'abc'
}

for (const key in myObject){
    //console.log(key, myObject[key])
}

// for each for Object
Object.keys(myObject).forEach(key => {
    //console.log(key, myObject[key])
})

Object.values(myObject).forEach(value => {
    //console.log(value)
})

// for of
const world = "Hey"

for (const letter of world){
    //console.log(letter)
}

for (const element of myArray){
    //console.log(element)
}
// #endregion

// #region class
class Comment {
    constructor(text){
        this.text = text
        this.votesQty = 0
    }

    upvote(){
        this.votesQty += 1
    }

    // static method
    static mergeComments(first, second){
        return `${first} ${second}`
    }
}
// create class component
const firstComment = new Comment(`it's my first comment`)

// hasOwnProperty
firstComment.hasOwnProperty('text')             //true
firstComment.hasOwnProperty('votesQty')         //true
firstComment.hasOwnProperty('upvote')           //false
firstComment.hasOwnProperty('hasOwnProperty')   //false

// extends
class NumbersArray extends Array {
    sum() {
        this.reduce((el, acc) => acc += el, 0)
    }
}

const newNumbersArray = new NumbersArray(2, 5, 7)
newNumbersArray.sum() // 14

// misc (class prototype equal class component __proto__)
Comment.prototype === firstComment.__proto__ // true
// #endregion