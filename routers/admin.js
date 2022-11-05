const express = require('express');
const router = express.Router();

router.get("/add-product", (req, res, next) => {
    res.send("<form method='post' action='/add-product'><input type='text' name='title'></input><button type='submit'>Add Product</button></form>")
});

router.post("/add-product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});

module.exports = router;