const express = require('express');

const router= express.Router();

router.get("/register", (req, res)=>{
    console.log("This is register page");
    // res.send("Register Page");
    res.send("<p><a href =/>Home</a></p>");
    res.end();

});

exports.router = router;
