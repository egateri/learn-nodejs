const express = require('express');

const router= express.Router();

router.get("/login", (req, res)=>{

res.render('login',{title:"Login Page"});

});

router.post("/login", (req, res)=>{

    // res.send("Logged in successfully");
    // console.log(req);

    // res.send(req.body);

    if(req.body.name && req.body.password ){
         var loggedIn =true;
        var details = {
            name : req.body.name,
           password: req.body.password
          
         }
       
        console.log(res);
    
       res.render('output', {title: 'Display Output', data: details});
    //    res.render('output', {title: 'Display Output',loggedIn : loggedIn, data: details});
       res.end();
    }

    else {

        res.send("Please provide login details"+"<p><a href =/login>Login</a></p>");
        res.end();

    }

 
    });


exports.router = router;

