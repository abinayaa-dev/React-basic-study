
//Always filter and then map
//Do I need to remove items? → filter
// Do I need to change shape? → map
// Order? → filter first, map later

const users = [
  { id: 1, name: "Asha", active: true },
  { id: 2, name: "Ravi", active: false },
  { id: 3, name: "Meena", active: true }
];

// active users

const activeUsers = users.filter(user => user.active === true);
console.log(activeUsers);

// get array of user names

const name = users.map(user => user.name);
console.log(name);

// get array od active user names
const activeUserNames = users.filter(user => user.active === true).map(user => user.name);
console.log(activeUserNames);

const numbers = [10, 25, 40, 55, 70];

//Get only numbers greater than 30

const num = numbers.filter(number => number > 30);
console.log(num);

//Get squares of numbers greater than 30

const num1 = numbers.filter(number => number > 30).map(number => number*number);

console.log(num1);

const names = ["Anu", "Ravi", "Kiran", "Meena"];

//Names longer than 4 characters

const name4 = names.filter(name => name.length >4);
console.log(name4);

//Convert those names to uppercase

const nameUP = name4.map(name => name.toUpperCase());
console.log(nameUP);

const products = [
  { id: 1, name: "Phone", inStock: true },
  { id: 2, name: "Laptop", inStock: false },
  { id: 3, name: "Tablet", inStock: true }
];

//Get only in-stock products

const inStock = products.filter(product => product.inStock === true).map(product =>product.name);
console.log(inStock);

const employees = [
  { name: "Asha", role: "dev", active: true },
  { name: "Bala", role: "tester", active: false },
  { name: "Charan", role: "dev", active: true }
];

// Get active developers, Get names of active developers

const activedev = employees.filter(employee => employee.role === "dev" && employee.active === true).map(employee => employee.name);
console.log(activedev)

const orders = [
  { id: 1, total: 500, delivered: true },
  { id: 2, total: 200, delivered: false },
  { id: 3, total: 800, delivered: true }
];

//Delivered orders only
//Totals of delivered orders
const deliveredOrder = orders.filter(order => order.delivered === true).map(order => order.total);
console.log(deliveredOrder)




const users1 = [
  { name: "Anu", skills: ["JS", "React"] },
  { name: "Bala", skills: ["HTML", "CSS"] },
  { name: "Charan", skills: ["JS", "Node"] }
];

//Users who know JS

//Names of users who know JS

const user = users1.filter(user => user.skills.includes("JS")
    ).map(user => user.name);

console.log(user)