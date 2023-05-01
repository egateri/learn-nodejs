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
      email: "mash@gmail.com",
      gender: "Male",
    },
    {
      name: "Peter",
      nickname: "Pete",
      age: 37,
      phone: 4000,
      email: "pete@gmail.com",
      gender: "Male",
    },
    {
      name: "John",
      nickname: "Jo",
      age: 137,
      phone: 2300,
      email: "jo@john.com",
      gender: "Male",
    },
    {
      name: "Alexa",
      nickname: "Al",
      age: 17,
      phone: 2500,
      email: "al@alexa.com",
      gender: "Female",
    },
    {
      name: "Andrew",
      nickname: "Andy",
      age: 77,
      phone: 7500,
      email: "andy@andrew.com",
      gender: "Male",
    },
    {
      name: "Paul",
      nickname: "P",
      age: 47,
      phone: 6500,
      email: "p@gmail.com",
      gender: "Male",
    },
    {
      name: "Agnes",
      nickname: "Angie",
      age: 57,
      phone: 1501,
      email: "angie@agnes.com",
      gender: "Female",
    }
  ];
  if (loggedIn) {
    res.render("users", {
      title: "Users Page",
      loggedIn: loggedIn,
      data: details,
    });
  } else {
    // res.render("users", { title: "Users Page",loggedIn:loggedIn, data: details });
    res.send("Not Logged In!");
  }
});

exports.router = router;
