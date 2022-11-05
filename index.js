const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const adminData = require('./routers/admin');
const shopRouter = require('./routers/shop');
const rootDir = require('./util/path');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminData.routers);
app.use(shopRouter);

app.use((req, res, next) => {
  res.status(404).render(path.join(rootDir, 'views', '404.ejs'), { 'pageTitle': 'Page Not Found' });
});

app.listen(8080);