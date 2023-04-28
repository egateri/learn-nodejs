const express = require('express');

const router= express.Router();

router.get("/", (req, res)=>{
    let loggedIn = false;

    if (loggedIn ){
     console.log("Home page");
     res.send("Home Page");
     res.end();
    }
    else { 
     console.log("Please login");
    res.send("<p><a href =/login>Login</a></p>");
    res.end();
    }

});

exports.router = router;
