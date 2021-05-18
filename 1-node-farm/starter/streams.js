const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  // solution 1
  // fs.readFile("./txt/read-this.txt", (err, data) => {
  //   if(err) {
  //     console.log(err)
  //   }
  //   res.end(data)
  // })
  //solotion 2: streams
//   const readable = fs.createReadStream("./txt/read-this.txt") 
//   readable.on('data', (chunk) =>{
//         res.write(chunk)
//   })
//   readable.on('end', ()=>{
//     res.end();
//   })
//   readable.on("error", err=>{
//     console.log('err', err)
//     res.status(500);
//     res.end("File not found")
//   })

// solotion 3
   const readable = fs.createReadStream("./txt/read-this.txt")
   readable.pipe(res)

})

server.listen(3000, '127.0.0.1', ()=>{
  console.log("Listening...")
})