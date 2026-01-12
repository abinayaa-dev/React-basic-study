/*
String
Number
Boolean
Bigint
Undefined -  exists but not defined
null - empty ( not 0 )

Object
Symbol

Types - Primitive , Non-Primitive 
Primitive - String, Number, Boolean, undefined, Symbol.
Non-Primitive - Objects -> Arrays, functions, objects

Symbol - Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol — that's guaranteed to be unique.
*/

var score = 100

let score = 102
let name = "Abee"
let isLogged = true

//Object
let colors = ["green","red","orange"]
let user = {firstName : "Abee",lastName : "Code"}

let getScore = score;

let expo = 2 ** 3; 
// 2 to the power of 3
 
//Symbol 

const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");

//sym2 == sym3 ?  -> false (Always Unique)

//const sym = new Symbol(); // TypeError
