const express = require('express');
const bodyParser = require('body-parser');
const adminRouter = require('./routers/admin');
const shopRouter = require('./routers/shop');
const errorsController = require('./controllers/errors');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./public'));

app.use('/admin', adminRouter);
app.use(shopRouter);
app.use(errorsController.get404);

app.listen(8080);