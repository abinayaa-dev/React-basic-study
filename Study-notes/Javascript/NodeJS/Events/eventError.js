const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on("Error" , (err) => {
    console.error(`Error Occured : ${err.message}`)
})

eventEmitter.emit("Error" , new Error("Something went wrong"));