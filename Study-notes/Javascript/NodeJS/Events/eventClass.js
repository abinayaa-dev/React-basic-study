const EventEmitter = require('events')

class Chat extends EventEmitter{
    sendMessage(msg){
        console.log(`Message Sent : ${msg}`);
        this.emit('messageReceived' , msg);
    }
}

const chat = new Chat();

chat.on('messageReceived', (msg) => {
    console.log(`The message received : ${msg}`);
})

chat.sendMessage("Hii");