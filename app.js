const express = require('express');

const app = express();

app.get("/", (req, res)=>{

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


app.get("/login", (req, res)=>{
    console.log("This is login page");

    res.send("Login Page");
    res.end();

});

app.get("/register", (req, res)=>{
    console.log("This is register page");

    res.send("Register Page");
    res.end();

});
app.listen(5500,()=>{
    console.log("Server is running..");
})