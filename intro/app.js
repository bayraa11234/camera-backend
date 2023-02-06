// const { request, response } = require("express");
const express = require("express");
const cors = require("cors");
const fs = require("fs");
let categories = JSON.parse(fs.readFileSync("categoryData.json", "utf-8"));
let products = JSON.parse(fs.readFileSync("products.json", "utf-8"));

const app = express();

const bodyParser = require("body-parser");

// const jsonParser = bodyParser.json();

app.use(cors());

const port = 8000;
const navbar = [
  {
    li: "Browse categories ⌄",
    popular: [
      {
        pop: "1",
      },
      { pop: "2" },
      { pop: "3" },
    ],
  },
  {
    li: "Home ⌄",
  },
  {
    li: "Catolog ⌄",
  },
  {
    li: "Blog",
  },
  {
    li: "Pages ⌄",
  },
  {
    li: "About us",
  },
];
app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/navbar", (req, res) => {
  res.json(navbar);
  // response.status(200);
  // response.json(categories);
});

app.listen(port, () => {
  console.log("http://localhost:" + port);
});
