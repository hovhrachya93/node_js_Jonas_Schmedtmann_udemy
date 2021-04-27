const fs = require("fs");
const http = require("http");
const url = require("url");
const replaceTemplate = require("./modules/replaceTemplate");
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
//SERVER

const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  "utf-8"
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  "utf-8"
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  "utf-8"
);

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);
  //Overview PAGE
  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, { "Content-Type": "text/html" });

    const cardsHtml = dataObj
      .map((el) => replaceTemplate(tempCard, el))
      .join("");
    const output = tempOverview.replace("{%PRODUCT_CARDS%}", cardsHtml);
    res.end(output);
  }

  // Product page
  else if (pathname === "/product") {
    res.writeHead(200, { "Content-Type": "text/html" });

    const product = dataObj[query.id];
    const output = replaceTemplate(tempProduct, product);
    res.end(output);
  } else if (pathname === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<p>Page not found<p>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to req");
});
