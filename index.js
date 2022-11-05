const express = require('express');
const bodyParser = require('body-parser');
const adminRouter = require('./routers/admin');
const shopRouter = require('./routers/shop');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRouter);
app.use(shopRouter);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(8080);