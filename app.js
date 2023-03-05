require("dotenv").config();

const createError = require("http-errors");
const logger = require("morgan");

const dotenv = require("dotenv");
dotenv.config();

require("./config/db.config");


const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
app.use( express.urlencoded({ extended: true, })
);
const routes = require("./config/routes.config");
// console.log(routes)
app.use("/", routes);



app.listen(process.env.PORT||3300, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});