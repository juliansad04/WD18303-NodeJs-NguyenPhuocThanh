const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");

const app = express();
const port = 4123;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("./public"));
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, () => {
    console.log(`port: http://127.0.0.1:${port}`);
});

const clientRoutes = require("./routes/clientRoutes");
const adminRoutes = require("./routes/adminRoutes");

app.use("/", clientRoutes);
app.use("/", adminRoutes);

