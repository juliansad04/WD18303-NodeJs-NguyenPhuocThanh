const express = require("express");
const router = express.Router();

const listProduct = require("../data/products");
const listCategories = require("../data/categories");

router.get("/", (req, res) => {
    res.render("client/home", {
        products: listProduct,
        categories: listCategories,
    });
});

router.get("/home", (req, res) => {
    res.render("client/home", {
        products: listProduct,
        categories: listCategories,
    });
});

router.get("/shop-grid", (req, res) => {
    res.render("client/shop-grid", {
        products: listProduct,
        categories: listCategories,
    });
});

router.get("/shoping-cart", (req, res) => {
    res.render("client/shoping-cart");
});

router.get("/contact", (req, res) => {
    res.render("client/contact");
});

router.get("/shop-details", (req, res) => {
    const id = req.query.id;
    const product = listProduct.find((item) => item.id === parseInt(id));
    res.render("client/shop-details", { product, products: listProduct });
});

router.get("/checkout", (req, res) => {
    res.render("client/checkout");
});

module.exports = router;
