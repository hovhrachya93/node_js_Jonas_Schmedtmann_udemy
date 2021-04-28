const EventEmitter = require('events');
const http = require('http');
const server = http.createServer();

class Sales extends EventEmitter {
    constructor() {
        super();
    }
}

// const myEmitter = new EventEmitter();
const myEmitter = new Sales();

// myEmitter.on('newSale', () => {
//   console.log('There was a new sale!');
// });


// myEmitter.on('newSale', (stock) => {
//   console.log('left', stock);
// });

// myEmitter.emit('newSale', 9);


////////////////////////////////


server.on('request', (req, res) => {
    console.log("request recieved");
    res.end("request recieved")
})

server.on('close', ()=>{
    console.log("request closed");
})

server.listen(8000, '127.0.0.1', ()=>{
    console.log("wait for request...")
})