const express = require('express');

const router= express.Router();

router.get("/login", (req, res)=>{

res.render('login',{title:"Login Page"});

});

router.post("/login", (req, res)=>{

    // res.send("Logged in successfully");
    // console.log(req);

    // res.send(req.body);

    var details = {
        name : req.body.name,
       email: req.body.email,
       comment: req.body.comment
     }
    // var result = req.body.name;
    // var result1 = req.body.email;
    // console.log(result);
    // console.log(result1);

   res.render('output', {title: 'Display Output', data: details});
    
   
    });

exports.router = router;
