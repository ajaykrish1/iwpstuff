var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
methodOverride = require("method-override");

mongoose.connect("mongodb://localhost/facultydb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var facultyschema = new mongoose.Schema({
    FirstName: String,
    LastName: String,
    Age: String,
    Department:String,
    PhoneNumber:String,
    ExtensionNumber:String,
    School:String,
  });
  
  var faculty = mongoose.model("faculty", facultyschema);

app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/",function(req,res){
    res.render("home");
});

app.get("/add",function(req,res){
    res.render("create");
});

app.post("/add",function(req,res){
    var fname=req.body.fname;
    var lname=req.body.lname;
    var age=req.body.age;
    var dept=req.body.dept;
    var ph=req.body.ph;
    var en=req.body.en;
    var school=req.body.school;
    
    var facultyobj={FirstName:fname,LastName:lname,Age:age,Department:dept,PhoneNumber:ph,ExtensionNumber:en,School:school};
    
    console.log(facultyobj);

    faculty.create(facultyobj, function (err, facultyinfo) {
        if (err) {
          console.log("err");
        } else {
        
    
         console.log(facultyinfo);
         res.redirect("/")
        }
      });
    });

    app.get("/find",function(req,res){
        res.render("find");
    });

    app.post("/find",function(req,res){
        var fname=req.body.fname;
        var lname=req.body.lname;
        var en=req.body.en;

        if(fname==""&&lname==""&&en==""){
            console.log("none");
            faculty.find({}, function (err, foundinfo) {
                
           if(err){
               console.log(err);
           }else{
            console.log(foundinfo);
                  res.render("display", { info:foundinfo });
                }
                });
    }
       
    if(fname!=""&&lname==""&&en==""){
        faculty.find({ FirstName:fname  }, function (err, foundinfo) {
            
       if(err){
           console.log(err);
       }else{
        console.log(foundinfo);
              res.render("display", { info:foundinfo });
            }
            });
    
}


if(fname==""&&lname!=""&&en==""){
    faculty.find({ LastName:lname }, function (err, foundinfo) {
        
   if(err){
       console.log(err);
   }else{
    console.log(foundinfo);
          res.render("display", { info:foundinfo });
        }
        });

}

if(fname==""&&lname==""&&en!=""){
    faculty.find({  ExtensionNumber:en }, function (err, foundinfo) {
        
   if(err){
       console.log(err);
   }else{
    console.log(foundinfo);
          res.render("display", { info:foundinfo });
        }
        });

}

        if(fname!=""&&lname!=""&&en!=""){
        faculty.find({ FirstName:fname , LastName:lname, ExtensionNumber:en }, function (err, foundinfo) {
            
       if(err){
           console.log(err);
       }else{
        console.log(foundinfo);
              res.render("display", { info:foundinfo });
            }
            });
    console.log("all");
}

            
    });

    app.listen(3000, function () {
        console.log("server started..");
      });
      