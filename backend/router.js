"use strict";

const { controller } = require("./controller");

module.exports = (app) => {
  app.route("/categories").get(controller.getCategories);
  app.route("/learn/:catagory").get(controller.getQuestions);
  app.route("/learn/:catagory").post(controller.putQuestion);
};