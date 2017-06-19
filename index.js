var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views","./views");
app.listen(3000);
app.get("/", function (req, res) {
  res.render("homepage");
});
app.get("/test2", function (req, res) {
  res.render("vidu2");
});
app.get("/test3", function (req, res) {
  res.render("vidu3");
});
var mang = ["ha","van","tuan"];
app.post("/getNotes", function (req, res){
  res.send(mang);
});
