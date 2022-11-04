let http = require('http');
let express = require('express');

let app = express();

app.use("/add-product", (req, res, next) => {
  console.log("Call '/add-product'");
  res.send("<h1>Call '/add-product'</h1>")
});

app.use("/", (req, res, next) => {
  console.log("Call '/'");
  res.send("<h1>Call '/'</h1>")
});

app.listen(8080);