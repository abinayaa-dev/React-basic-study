const { error } = require('console');
const fs= require('fs'); // Built-in module

// const content = fs.readFileSync('notes.txt' , 'utf-8');

// console.log(content);
fs.writeFileSync('copy.txt', 'hii','utf-8');

fs.appendFileSync('copy.txt', '\n\nhello','utf-8');
fs.mkdirSync('./file/copy1.txt',{recursive : true});

//Blocking code

console.log("Start of code");

const content = fs.readFileSync("notes.txt","utf-8");
console.log(content);


console.log("End of code");

//Non-Blocking code

console.log("Start of code");

fs.readFile("notes.txt",'utf-8',(error,data)=>{
    if(error){console.log(error);
    }
    else{
        console.log(data);
    }
});

console.log("End of code");
