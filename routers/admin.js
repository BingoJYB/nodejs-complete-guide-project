const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();
const products = [];

router.get('/add-product', (req, res, next) => {
    res.render(path.join(rootDir, 'views', 'add-product.ejs'), {
        'pageTitle': 'Add Product'
    });
});

router.post('/add-product', (req, res, next) => {
    products.push({ 'title': req.body.title })
    res.redirect('/');
});

exports.routers = router;
exports.products = products;