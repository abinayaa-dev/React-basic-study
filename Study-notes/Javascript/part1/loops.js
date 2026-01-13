let sum = 0;
let i = 1;
while(i<=5)
{
    sum += i;
    i++;
}

console.log(sum);


let teas = ["green tea","black tea","chai","oolang tea"];
let selecteddTeas = [];

for(let i=0;i<teas.length;i++)
{
    if(teas[i] == "chai")
    {
        break;
    }
    selecteddTeas.push(teas[i]);
}

console.log(selecteddTeas);
//https://www.instagram.com/p/DTaHGECDCH1/?img_index=1

//for-of loop 
// for Value , Array

let numbers = [1,2,3,4,5];
let smallNumbers = [];

for(const element of numbers)
{
    if(element == 4)
    {
        break;
    }
    smallNumbers.push(element);
}

console.log(smallNumbers);

//for in loop -> For objects
let citiesPopulation = {
    "London" : 8900000,
    "New York" : 8400000,
    "Paris" : 2200000,
    "Berlin" : 3500000
};
//stop loop when berlin

let cityNewPopulation = {};

console.log(Object.keys(citiesPopulation));
console.log(Object.values(citiesPopulation));

for(const key in citiesPopulation)
{
    if(key == "Berlin")
    {
        break;
    }
    cityNewPopulation[key] = citiesPopulation[key];
}
console.log(cityNewPopulation);



//forEach loop

let teaCollection = ["earl grey","green tea","chai","oolang tea"];
//stop when chai

let availableTea = [];

teaCollection.forEach(element => {
  if(element == "chai")
  {
    return;
  }
  availableTea.push(element);
});
console.log(availableTea);

//use "for-of" to iterate through array and stop when the length of the 
//current tea name is greater than 10

let shortTeas = [];
for(const tea of teaCollection)
{
    if(tea.length>9)
        {break;}
    shortTeas.push(tea); 
}
console.log(shortTeas);             


//functions
function makeTea(typeOfTea){
    return `maketea : ${typeOfTea}`
}

function processTeaOrder(teaFunction){
  return teaFunction('earl grey')
}
let order = processTeaOrder(makeTea)

console.log(order);

//Higher order function : A function that takes another function as a paramater.
//eg :  forEach

// function processTeaOrder1(teaType)
// {
//     return `making ${teaType}`
// }

// function createTeaMaker(teaOrder,tea){
//     return teaOrder(tea)
// }

// let teaMaker = createTeaMaker(processTeaOrder1 , "green tea")
// console.log(teaMaker);
 //Closure
 // -> A closure happens when a child (inner) function remembers and can use variables from its parent function, even though 
 // those variables are not passed as parameters.

 //Example : 

 
function createTeaMaker(tea){
    return function()
    {
        return `making ${tea}`
    }
}
let teaMaker1 = createTeaMaker("green tea");
let result = teaMaker1();
console.log(result);
