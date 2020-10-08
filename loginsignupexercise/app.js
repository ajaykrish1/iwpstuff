var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/userdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var UserSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
});

var user = mongoose.model("user", UserSchema);

app.use(bodyparser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/unsuccess", function (req, res) {
  res.render("unsuccess");
});

app.get("/user/:name", function (req, res) {
  var name = req.params.name;
  res.render("user", { name: name });
});
app.get("/signup", function (req, res) {
  res.render("signup");
});

app.post("/signup", function (req, res) {
  var newname = req.body.name;
  var newusername = req.body.username;
  var newpassword = req.body.password;

  user.create(
    { name: newname, username: newusername, password: newpassword },
    function (err, userinfo) {
      if (err) {
        console.log(err);
      } else {
        console.log(userinfo);
        res.redirect("/");
      }
    }
  );
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.post("/login", function (req, res) {
  var newusername = req.body.username;
  var newpassword = req.body.password;

  user.find({ username: newusername, password: newpassword }, function (
    err,
    users
  ) {
    if (err) {
      console.log(err);
    } else {
      if (users[0] == undefined) {
        res.redirect("/unsuccess");
      } else {
        if (
          users[0].username == newusername &&
          users[0].password == newpassword
        ) {
          res.redirect("/user/" + users[0].name);
        }
      }
    }
  });
});

app.listen(3000);
