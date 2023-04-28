const express = require('express');

const router= express.Router();

router.get("/login", (req, res)=>{
    console.log("This is login page");

    // res.send("Login Page");
    res.send("<p><a href =/register>Register</a></p>");
    res.end();

});

exports.router = router;
