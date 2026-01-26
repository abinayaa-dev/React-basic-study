const { log } = require('console');
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on("myEvent" , () => {
    console.log("This is an event");
})

eventEmitter.emit("myEvent");

eventEmitter.on("myEvent" , (userName) => {
    console.log(`This event is hosted by ${userName}`);
    
})

eventEmitter.emit("myEvent","Abi");

eventEmitter.once("onlyOnes" , () => {
    console.log(
        "They are emitted only once"
    );
})

eventEmitter.emit("onlyOnes")
eventEmitter.emit("onlyOnes") // will not emit this time

console.log(eventEmitter.listeners("myEvent"));

