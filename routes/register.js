const express = require("express");

const router = express.Router();

router.get("/register", (req, res) => {
  res.render("register", { title: "Register Page" });
  res.end();
});

router.post("/register", (req, res) => {
  console.log(req.body);
  res.send(
    "User registered successfully as below: " +
      "<p> Name: " +
      req.body.name +
      "</p>" +
      "<p> Nickname: " +
      req.body.nickname +
      "</p>" +
      "<p> Email: " +
      req.body.email +
      "</p>" +
      "<p> Phone: " +
      req.body.phone +
      "</p>" +
      "<p> Date: " +
      req.body.date +
      "</p>" +
      "<p> Password: " +
      req.body.password +
      "</p>" +
      "<p> Gender: " +
      req.body.gender +
      "</p>" +
      "<p><a href =/login>Login</a></p>"
  );
  res.end();
});

exports.router = router;
