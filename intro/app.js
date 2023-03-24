// const { request, response } = require("express");
const express = require("express");
const cors = require("cors");
const fs = require("fs");
let categories = JSON.parse(fs.readFileSync("categoryData.json", "utf-8"));
let navbar = JSON.parse(fs.readFileSync("navbar.json", "utf-8"));
let product = JSON.parse(fs.readFileSync("product.json", "utf-8"));

const app = express();

const bodyParser = require("body-parser");

// const jsonParser = bodyParser.json();

app.use(cors());

const port = 8000;

app.use(express.static("public"));
app.use("/images", express.static("images"));

app.get("/category", (req, res) => {
  res.json(categories);
});

app.get("/navbar", (req, res) => {
  res.json(navbar);
  // response.status(200);
  // response.json(categories);
});
app.get("/product", (req, res) => {
  res.json(product);
});

app.listen(port, () => {
  console.log("http://localhost:" + port);
});
