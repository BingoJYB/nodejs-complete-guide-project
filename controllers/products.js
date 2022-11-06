const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll();

    res.render('shop', {
        pageTitle: 'Shop',
        prods: products,
        path: '/'
    });
};

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    });
};

exports.postAddProduct = (req, res, next) => {
    let product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};