console.log('hello world')

// this is a comment

/*
this is a multiline comment
*/

// variables - named storage

// we only use let and const 
// - use const whenever possible 

// const user = 'marco'
// console.log(user)

// declaring a variable
let mouse;
mouse = 'jerry'
console.log(mouse)

let cat = 'tom'
const user = 'marco'

// we want to use cameCase for names

// data types

// primitives and objects
// number, string, boolean, null, undefined, Symbol

// we can check the type by using 'typeof'
// js is dynamically typed
let num = '42'
console.log(typeof num)
num = 23
console.log(typeof num)

// Number

const distance = 7000
const price = 19.99

// console.log('hello' * 3) // -> NaN - not a number

// mathematical operators

// console.log(4 + 5)
// + , - , * , /

// % - modulo

// remainder: 5 % 2 -> 1

let x = 1
x = x + 1
x += 1
x++
// x--
console.log(x)
console.clear()

// Strings
// '', ""

const name = '' // -> empty string 
const greeting = 'hello!!'
// connect / concatenate strings -> '+'

console.log(greeting + ' ' + 'marco')
// alternative: using backticks
console.log(`${greeting} marco`)

// string properties and methods

console.log(greeting.length)
console.clear()
// accessing characters in a string
console.log(greeting[greeting.length - 1])
// access the last char of greeting

// using charAt()
console.log(greeting.charAt(0))

// another method: indexOf()
// this gives us the index of the first
// occurence of a character
console.log(greeting.indexOf('l')) // -> 2
// there is also lastIndexOf 
console.log(greeting.lastIndexOf('x')) // -> - 1
// if you want to check if a char is included
// in a string: includes() 
console.log(greeting.includes('e'))
console.clear()

// slice() -> returns a substring within a given range 

let word = 'rickandmorty'

console.log(word.slice(0, 2))

console.clear()

// toUpperCase() -> changes a word to upper case
// console.log(word.toUpperCase())
// strings are immutable (cannot change 
// only reassigned)

word = word.toUpperCase()
console.log(word)
console.clear()
let username = 'rick'

// todo
// get first character
username = username[0].toUpperCase() + username.slice(1)
// capitalize it
// add the rest of the word
console.log(username) // -> 'Rick'
console.clear()

// booleans, undefined and null

// booleans

// boolean operators
console.log(4 > 5) // -> false
// > larger than
// < less than
// >=
// <=

// equality 
console.log(4 == '4') // -> true
// strictly equal
console.log(4 === '4') // -> false
// logical operators
// && -> logical and
// || -> or

console.log(5 > 3 || false)

// truthy and falsy values
// falsy values are: '', 0, undefined, null, NaN

// conditionals
// if (else) statements

// const age = Number(prompt('what is your age?'))
// console.log(typeof age)
// if (age >= 18) {
// 	console.log('you are allowed to drive')
// } else if (age === 17) {
// 	console.log('you can drive with an adult')
// } else {
// 	console.log('you are too young to drive')
// } 

// switch case

const language = 'croatian'

// switch (language) {
// 	case 'french':
// 		console.log('bonjour');
// 		break;
// 	case 'english':
// 		console.log('hello');
// 		break;
// 	case 'italian':
// 		console.log('ciao')
// 		break;
// 	default:
// 		console.log('non recognized language')
// }

console.clear()

// iterations

// log the numbers one to ten
// for loop
// for (let i = 1; i < 11; i++) {
// 	console.log(i)
// }

// while loop
// let i = 1;
// while (i < 11) {
// 	console.log(i)
// 	i++
// }

// more common use for a while loop
let password = prompt('enter your password')
const correctPassword = '123'
while (password !== correctPassword) {
	password = prompt('enter your password')
}
// this line is reached if the password is correct
alert('access granted 🤩')