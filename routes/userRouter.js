const express = require("express");
const bodyParser = require("body-parser");
const { Router } = require("express");

const userRouter = express.Router();

userRouter.use(bodyParser.json());

userRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    let data = [
      {
        name: "mohsin",
        department: "software",
      },
      {
        name: "sajjad",
        department: "software",
      },
      {
        name: "ahsan",
        department: "software",
      },
    ];
    console.log("Data: ", data);
    res.end(JSON.stringify(data));
  })
  .post((req, res, next) => {
    res.end(
      "Will add the dish: " +
        req.body.name +
        " with details: " +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /dishes");
  })
  .delete((req, res, next) => {
    res.end("Deleting all dishes");
  });
module.exports = userRouter;
