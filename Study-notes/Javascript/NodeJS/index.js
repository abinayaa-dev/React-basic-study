const fs= require('fs'); // Built-in module

const content = fs.readFileSync('notes.txt' , 'utf-8');

console.log(content);
