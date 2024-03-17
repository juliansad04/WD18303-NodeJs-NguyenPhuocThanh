const express = require("express");
const router = express.Router();

const listProduct = require("../data/categories");
const listCategories = require("../data/categories");

router.get("/admin", (req, res) => {
    res.render("admin/home");
});

router.get("/", (req, res) => {
    res.render("admin/home");
});

router.get("/view-cate", (req, res) => {
    res.render("admin/view-cate", { categories: listCategories });
});

router.get("/add-cate", (req, res) => {
    res.render("admin/add-cate");
});

router.get("/edit-cate", (req, res) => {
    res.render("admin/edit-cate");
});

router.get("/view-products", (req, res) => {
    res.render("admin/view-products", { listProduct: listProduct });
});

router.get("/add-product", (req, res) => {
    res.render("admin/add-product", { categories: listCategories });
});

router.get("/edit-product", (req, res) => {
    res.render("admin/edit-product", { categories: listCategories });
});

module.exports = router;
