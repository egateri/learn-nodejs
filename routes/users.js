const express = require("express");

const router = express.Router();

router.get("/users", (req, res) => {
  var loggedIn = true;
  
  var details = [
    {
      name: "Eliud",
      nickname: "Mash",
      age: 30,
      phone: 2000,
    },
   {
      name: "Peter",
      nickname: "Pete",
      age: 37,
      phone: 4000,
    },
   {
      name: "John",
      nickname: "Jo",
      age: 137,
      phone: 2300,
    },
   {
      name: "Alex",
      nickname: "Al",
      age: 17,
      phone: 2500,
    },
   {
        name: "Andrew",
        nickname: "Andy",
        age: 77,
        phone: 7500,
      },
     {
        name: "Paul",
        nickname: "P",
        age: 47,
        phone: 6500,
      },
    ];
  if (loggedIn) {
    res.render("users", { title: "Users Page",loggedIn:loggedIn, data: details });
  } else {
    // res.render("users", { title: "Users Page",loggedIn:loggedIn, data: details });
    res.send("Not Logged In!");
  }
});

exports.router = router;
