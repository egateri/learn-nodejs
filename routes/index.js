const express = require('express');

const router= express.Router();

router.get("/", (req, res)=>{
    // let loggedIn = false;

    // if (loggedIn ){
    // //  console.log("Home page");
    // //  res.send("Home Page");
    // //  res.end();
    // res.render('home');
    // }
    // else { 
    //  console.log("Please login");
    // res.send("<p><a href =/login>Login</a></p>");
    // res.end();
    // }
    var loggedIn = false;
    var details =  { 
    loggedIn:true,

    user1: {
    name:"Eliud",
    nickname: "Mash",
    age:30,
    phone: 2000
     },
     user2: {
        name:"Peter",
        nickname: "Pete",
        age:37,
        phone: 4000
         }
    
     }
if(loggedIn){
    res.render('home', {title: 'Home Page', data:details});
}
else{
    res.render('home', {title: 'Home Page', data:details});
}
    
});

exports.router = router;
