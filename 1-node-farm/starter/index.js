const fs = require('fs');
const http = require('http');
const url = require('url');

// `// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// // console.log(textIn);

// // const textOut = `this is what we know about the acocado: ${textIn}.\n ${Date.now()}`;
// // fs.writeFileSync('./txt/output1234.txt', textOut);
// // console.log('file written');

// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2)=>{
//       console.log(data2)
//       fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data3)=>{
//         console.log(data3)
//         fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err=>{
//             console.log('your file was readin')
//         })
//     })
//   })
// });

// console.log("Will read file")

////////////////////////////////

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathname = req.url;
  if (pathname === '/' || pathname === '/overview') {
    res.end('This is Overview');
  } else if (pathname === '/product') {
    res.end('This is the Product');
  } else if (pathname === '/api') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<p>Page not found<p>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('listening to req');
});
