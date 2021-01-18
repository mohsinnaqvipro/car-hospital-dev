const express = require("express");
const bodyParser = require("body-parser");
const dbHandler = require("../database/dbHandler");
const { response } = require("../helpers/response");
const User = require("../models/user");
const userRouter = express.Router();

userRouter.use(bodyParser.json());

userRouter
  .route("/")
  .get(async (req, res, next) => {
    let result;
    try {
      result = await dbHandler.getItems("user");
      return response(true, "Successfully Retrieved", result, res);
    } catch (error) {
      console.log("Error = ", error);
      return response(false, "Faild to retrieved", error, res);
    }
  })
  .post(async (req, res, next) => {
    let data = JSON.stringify(req.body);
    let result;
    try {
      parseData = JSON.parse(data);
      result = await dbHandler.addItem("user", parseData);
      return response(true, "Successfully Added", result, res);
    } catch (error) {
      console.log("Error = ", error);
      return response(false, "Faild to Save", error, res);
    }
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /Users");
  })
  .delete((req, res, next) => {
    res.statusCode = 403;
    res.end("DELETE operation not supported on /Users");
  });

userRouter
  .route("/:userId")
  .get(async (req, res, next) => {
    let result;
    try {
      result = await dbHandler.getItem("user", {
        where: { id: req.params.userId },
      });
      if (result) {
        return response(true, "Successfully Retrieved", result, res);
      } else {
        return response(false, "User Not Exist", result, res);
      }
    } catch (error) {
      console.log("Error = ", error);
      return response(false, "Faild to retrieved", error, res);
    }
  })
  .post(async (req, res, next) => {
    res.statusCode = 403;
    res.end("POST operation not supported on /Users/userId");
  })
  .put(async (req, res, next) => {
    let result;
    let data = req.body;
    let userId = req.params.userId;
    let updateClause = {};

    try {
      if (data.firstName) {
        updateClause.firstName = data.firstName;
      }
      if (data.lastName) {
        updateClause.lastName = data.lastName;
      }
      if (data.accountStatus) {
        updateClause.accountStatus = data.accountStatus;
      }
      if (data.password) {
        updateClause.password = data.password;
      }
      if (data.email) {
        updateClause.email = data.email;
      }
      result = await dbHandler.updateItem("user", updateClause, {
        where: { id: userId },
      });
      if (result) {
        return response(true, "Successfully Updated", result, res);
      } else {
        return response(false, "User Not Exist", result, res);
      }
    } catch (error) {}
  })
  .delete((req, res, next) => {
    res.statusCode = 403;
    res.end("DELETE operation not supported on /Users");
  });
module.exports = userRouter;
