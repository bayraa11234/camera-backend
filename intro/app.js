// const { request, response } = require("express");
const express = require("express");
const cors = require("cors");
const fs = require("fs");
let categories = JSON.parse(fs.readFileSync("categoryData.json", "utf-8"));

const app = express();

const bodyParser = require("body-parser");

// const jsonParser = bodyParser.json();

app.use(cors());

const port = 8000;
// let categories = [];
const navbar = [
  {
    li: "Browse categories ⌄",
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

app.get("/navbar", (req, res) => {
  res.json(navbar);
  // response.status(200);
  // response.json(categories);
});

app.listen(port, () => {
  console.log("http://localhost:" + port);
});
