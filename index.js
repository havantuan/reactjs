var express = require("express");
var bodyPaser = require('body-parser');
var parser = bodyPaser.urlencoded({extended: false});
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


app.post("/add", parser, function(req, res){
var newNote = req.body.note;
mang.push(newNote);
res.send(mang);
});
app.post("/delete", parser, function(req, res){
var id = req.body.idXoa;
mang.splice(id,1);
res.send(mang);
});
app.post("/update", parser, function(req, res){
var id = req.body.idSua;
mang[id] =req.body.noiDung;
res.send(mang);
});
