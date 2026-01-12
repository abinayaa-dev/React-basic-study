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

// var score = 100

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


//Objects :

const user1 = {
    firstName : "sonali",
    "last name" : "khan",
    isLogged : true,
};

// basically a const object contains primitive data types.They are mutable.
//That is a const variable cannot change value. But the values inside a const object 
//can be changed.Because the memory reference is constant.

user1.firstName = "Sarah";
user1['last name'] = "John";
user1.email = "abc123@gmail.com";
console.log(user1);

//Arrays

const teaFlavours = ["green tea" , "black tea" , "oolang tea"];
let firstTea = teaFlavours[0];
console.log(firstTea);

teaFlavours[1] = "jasmine tea";
teaFlavours.push("Herbal tea");
console.log(teaFlavours);

teaFlavours.pop();
console.log(teaFlavours);

//softcopy and hardcopy of arrays
//Softcopy :
let softcopytea = teaFlavours;
//Here the softcopytea is pointed to the memory refernce. when any change made in 
//teaFlavours then softcopytea will also be changed automatically
teaFlavours.pop();
console.log(softcopytea);

//Hardcopy : 

let hardcopyTea = [...teaFlavours];
//or hardcopyTea = teaFlavours.slice();
teaFlavours.push("Herbal Tea");
console.log(hardcopyTea);
console.log(teaFlavours);

let europeanCities = ["Paris" , "Rome"];
let asianCities = ["Tokyo","Bangkok"];

// let worldCities = [europeanCities , asianCities];
let worldCities = europeanCities.concat(asianCities);
console.log(worldCities);

let citieslength = worldCities.length;

console.log(citieslength);

let isLondon = worldCities.includes("London");
console.log(isLondon);


//shift - Removes the first element

worldCities.shift();
console.log(worldCities);

//unshift - Adds the elements in the beginning

worldCities.unshift("London","Paris");
console.log(worldCities);








