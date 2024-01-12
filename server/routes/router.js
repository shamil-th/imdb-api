const express = require("express");
const route = express.Router();
const controller = require('../controller/controller');

route.post("/watchlist", controller.create);
route.get("/watchlist", controller.find);
route.delete("/watchlist/:id", controller.delete);

module.exports = route