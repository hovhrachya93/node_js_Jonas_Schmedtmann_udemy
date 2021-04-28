const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();
// process.env.UV_THREADPOOL_SIZE =100

setTimeout(()=>console.log("timer 1 finished"),0)
setImmediate(()=>console.log("Immediete 1 finished"))

fs.readFile('./txt/final.txt', ()=>{
    console.log('I/0 FINISHED')
    console.log('------------------')
    setTimeout(()=>console.log("timer 22 finished"),0)
    setImmediate(()=>console.log("Immediete 333 finished"))

    process.nextTick(()=>console.log("Proccess.nextTick"))

    crypto.pbkdf2Sync('password', 'salt', 10000, 1024, 'sha512'),
    console.log(Date.now()- start, 'password encrypted 1 Sync ->')

    crypto.pbkdf2('password', 'salt', 10000, 1024, 'sha512', ()=>{
        console.log(Date.now()- start, 'password encrypted 1')
    })
    crypto.pbkdf2('password', 'salt', 10000, 1024, 'sha512', ()=>{
        console.log(Date.now()- start, 'password encrypted 2')
    })
    crypto.pbkdf2('password', 'salt', 10000, 1024, 'sha512', ()=>{
        console.log(Date.now()- start, 'password encrypted 3')
    })

    crypto.pbkdf2Sync('password', 'salt', 10000, 1024, 'sha512'),
    console.log(Date.now()- start, 'password encrypted 2 Sync->')

})

console.log("Hello from the top-level")