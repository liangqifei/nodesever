var express = require("express");
var router = express.Router();
var fs = require("fs");
var utilsObj = require("../utils/result.js");

/* GET home page. */
//设置跨域请求头
router.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
router.get("/", function(req, res, next) {
  res.send("index");
});
router.post("/auth", function(req, res, next) {
  console.log(req.body);
  let successObj = utilsObj.succsessMsg({ data: req.body });
  console.log(successObj);
  res.send(successObj);
  // next();
});
// router.get("/index/:id", function(req, res, next) {
//   console.log("aaaa");
//   res.send("kdkd进入k");
// });

module.exports = router;
