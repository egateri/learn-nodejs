
const {md5} = require('../public/js/md5.js');
const express = require("express");

const router = express.Router();

var isGetMethod; //Alert EJS if the Method is POST or GET - To use SAME EJS file for both POST and Get Requests

router.get("/login", (req, res) => {
  
    // var isGetMethod = true;

    console.log(res);

    res.render("login", { title: "Login Page", isGetMethod:true });
 
    res.end();
  
});

router.post("/login", (req, res) => {

  // var isGetMethod = false;
 var name = req.body.name;
 var password =md5(req.body.password);
 var details = {
      name: name,
      password: password
    };


  res.render("login", { title: "Login Page", isGetMethod:false, data: details });
  res.end();
});

exports.router = router;

